


exports.createPages = ({ graphql, actions }) => {

    const path = require('path')
    const { paginate } = require( 'gatsby-awesome-pagination')

    const { createPage } = actions
    const postTemplate = path.resolve(`./src/templates/PostTemplate.jsx`)




    return new Promise((resolve, reject) => {
        graphql(`
      query MyQuery {
        allWordpressPost(limit: 25) {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
      `).then(result => {
            // GraphQLのデータを使ってページを追加する処理
            result.data.allWordpressPost.edges.forEach(edge => {
                const node = edge.node
                createPage({
                    path: `/posts/${node.id}`,
                    component: postTemplate,
                    context: {
                        id: node.id
                    }
                })
            })


            // Create your paginated pages
            paginate({
                createPage, // The Gatsby `createPage` function
                items: result.data.allWordpressPost.edges, // An array of objects
                itemsPerPage: 15, // How many items you want per page
                pathPrefix: '/pages', // Creates pages like `/blog`, `/blog/2`, etc
                component: path.resolve(`./src/templates/pages.js`), // Just like `createPage()`
            })


            resolve()
        })
    })
}