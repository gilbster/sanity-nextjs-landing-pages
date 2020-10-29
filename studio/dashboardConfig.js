export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f9a47af74e164999207c8e8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-psi72sz4',
                  apiId: '8c67122a-6def-4193-8b4a-c0a0ebafd75b'
                },
                {
                  buildHookId: '5f9a47af7867c091a754ddd2',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-jmhm7uuo',
                  apiId: 'fcbba13a-faa5-4400-8d13-de92fcfe99ad'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gilbster/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-jmhm7uuo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
