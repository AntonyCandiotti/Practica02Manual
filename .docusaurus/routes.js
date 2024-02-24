import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Practica02Manual/blog',
    component: ComponentCreator('/Practica02Manual/blog', '42b'),
    exact: true
  },
  {
    path: '/Practica02Manual/blog/archive',
    component: ComponentCreator('/Practica02Manual/blog/archive', '50a'),
    exact: true
  },
  {
    path: '/Practica02Manual/blog/first-blog-post',
    component: ComponentCreator('/Practica02Manual/blog/first-blog-post', '755'),
    exact: true
  },
  {
    path: '/Practica02Manual/blog/long-blog-post',
    component: ComponentCreator('/Practica02Manual/blog/long-blog-post', '3ac'),
    exact: true
  },
  {
    path: '/Practica02Manual/blog/mdx-blog-post',
    component: ComponentCreator('/Practica02Manual/blog/mdx-blog-post', '117'),
    exact: true
  },
  {
    path: '/Practica02Manual/blog/tags',
    component: ComponentCreator('/Practica02Manual/blog/tags', '1e5'),
    exact: true
  },
  {
    path: '/Practica02Manual/blog/tags/docusaurus',
    component: ComponentCreator('/Practica02Manual/blog/tags/docusaurus', 'bb5'),
    exact: true
  },
  {
    path: '/Practica02Manual/blog/tags/facebook',
    component: ComponentCreator('/Practica02Manual/blog/tags/facebook', 'ed0'),
    exact: true
  },
  {
    path: '/Practica02Manual/blog/tags/hello',
    component: ComponentCreator('/Practica02Manual/blog/tags/hello', '1db'),
    exact: true
  },
  {
    path: '/Practica02Manual/blog/tags/hola',
    component: ComponentCreator('/Practica02Manual/blog/tags/hola', '20c'),
    exact: true
  },
  {
    path: '/Practica02Manual/blog/welcome',
    component: ComponentCreator('/Practica02Manual/blog/welcome', 'a87'),
    exact: true
  },
  {
    path: '/Practica02Manual/markdown-page',
    component: ComponentCreator('/Practica02Manual/markdown-page', 'cec'),
    exact: true
  },
  {
    path: '/Practica02Manual/docs',
    component: ComponentCreator('/Practica02Manual/docs', '2f0'),
    routes: [
      {
        path: '/Practica02Manual/docs',
        component: ComponentCreator('/Practica02Manual/docs', '809'),
        routes: [
          {
            path: '/Practica02Manual/docs',
            component: ComponentCreator('/Practica02Manual/docs', '314'),
            routes: [
              {
                path: '/Practica02Manual/docs/category/tutorial---basics',
                component: ComponentCreator('/Practica02Manual/docs/category/tutorial---basics', '320'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Practica02Manual/docs/category/tutorial---extras',
                component: ComponentCreator('/Practica02Manual/docs/category/tutorial---extras', '47a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Practica02Manual/docs/intro',
                component: ComponentCreator('/Practica02Manual/docs/intro', 'f8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Practica02Manual/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/Practica02Manual/docs/tutorial-basics/congratulations', '075'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Practica02Manual/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/Practica02Manual/docs/tutorial-basics/create-a-blog-post', 'c61'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Practica02Manual/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/Practica02Manual/docs/tutorial-basics/create-a-document', '816'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Practica02Manual/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/Practica02Manual/docs/tutorial-basics/create-a-page', 'e2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Practica02Manual/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/Practica02Manual/docs/tutorial-basics/deploy-your-site', 'e57'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Practica02Manual/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/Practica02Manual/docs/tutorial-basics/markdown-features', '61e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Practica02Manual/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/Practica02Manual/docs/tutorial-extras/manage-docs-versions', 'dcc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Practica02Manual/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/Practica02Manual/docs/tutorial-extras/translate-your-site', '1d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/Practica02Manual/',
    component: ComponentCreator('/Practica02Manual/', '333'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
