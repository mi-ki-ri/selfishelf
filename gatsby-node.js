const path = require('path')

exports.createPages = ({ graphql, actions }) => {
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
        resolve()
      })
    })
  }