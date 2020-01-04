export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e109dcb8f2580a843cb13f3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-55423haq',
                  apiId: '5b9d6dd8-7841-4eda-91f3-9fc698ae7b3f'
                },
                {
                  buildHookId: '5e109dcb4040ec7e66167604',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-o17h61fd',
                  apiId: '186d4a59-d0f3-47a5-b189-189b56b82af3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/theoatrix/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-o17h61fd.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
