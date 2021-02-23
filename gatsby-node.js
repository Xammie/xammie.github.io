exports.createPages = async ({actions, graphql, reporter}) => {
    const {createPage} = actions;

    const result = await graphql(`
        {
            blogs: allMarkdownRemark(
                filter: {frontmatter: {publish: {eq: true}}}
                sort: {order: ASC, fields: frontmatter___date}
            ) {
                nodes {
                    frontmatter {
                        slug
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

    const template = require.resolve(`./src/templates/BlogDetail.tsx`);

    result.data.blogs.nodes.forEach(({frontmatter}) => {
        createPage({
            path: frontmatter.slug,
            component: template,
            context: {
                slug: frontmatter.slug,
            },
        })
    })
}