exports.createPages = async ({actions, graphql, reporter}) => {
    const {createPage} = actions;
    const blogPostTemplate = require.resolve(`./src/templates/BlogDetail.tsx`);
    const result = await graphql(`
  {
        blogs: allFile(
            filter: {
                sourceInstanceName: {eq: "blog"}, ext: {eq: ".md"}
                childMarkdownRemark: {frontmatter: {publish: {eq: true}}}
            },
            sort: {order: ASC, fields: childMarkdownRemark___frontmatter___date},
            limit: 1000
        ) {
            nodes {
                childMarkdownRemark {
                    frontmatter {
                        slug
                    }
                }
            }
        }
   }
  `);

    // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    result.data.blogs.nodes.forEach(({childMarkdownRemark}) => {
        createPage({
            path: childMarkdownRemark.frontmatter.slug,
            component: blogPostTemplate,
            context: {
                // additional data can be passed via context
                slug: childMarkdownRemark.frontmatter.slug,
            },
        })
    })
}