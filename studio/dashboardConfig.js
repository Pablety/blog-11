export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '626cb7ebce71d228b571aac6',
                  title: 'Sanity Studio',
                  name: 'blog-11-studio',
                  apiId: 'ae1fd461-e8e6-40e8-88ae-5cfe6f393bc1'
                },
                {
                  buildHookId: '626cb7ec276ce2281d2cfa67',
                  title: 'Blog Website',
                  name: 'blog-11',
                  apiId: 'eb5e3d3a-82c7-4489-b1d5-149cdd00c2d3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Pablety/blog-11',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://blog-11.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
