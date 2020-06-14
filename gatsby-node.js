const createProjectPages = async (graphql, actions, reporter) => {
    const { createPage } = actions
    const getProjectsResult = await graphql(`
        {
            allSanityCinematography {
                nodes {
                    id
                    slug {
                        current
                    }
                }
            }
        }
    `)
    if (getProjectsResult.errors) {
        throw getProjectsResult.errors
    }
    const projects = getProjectsResult.data.allSanityCinematography.nodes || []
    projects.forEach((node) => {
        const path = `cinematography/${node.slug.current}`
        createPage({
            path,
            component: require.resolve('./src/templates/cinamato.js'),
            context: { id: node.id },
        })
    })
}

// You can delete this file if you're not using it
exports.createPages = async ({ graphql, actions, reporter }) => {
    await createProjectPages(graphql, actions, reporter)
}
