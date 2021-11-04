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
                  buildHookId: '6184537b7399751272407798',
                  title: 'Sanity Studio',
                  name: 'sanity-landing-studio-tmemm1sf',
                  apiId: 'e5438cfe-4dc4-4558-9622-8e8867b52e8b'
                },
                {
                  buildHookId: '6184537be52d3b14abca6230',
                  title: 'Landing pages Website',
                  name: 'sanity-landing-web',
                  apiId: 'c921cdfc-ab91-4986-820e-b2c3307291fe'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/riadjoseph/sanity-landing',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-landing-web.netlify.app', category: 'apps'}
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
