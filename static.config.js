import React from 'react'
import path from 'path'

export default {
  siteRoot: 'https://pensive-ptolemy-40c05f.netlify.app',
  Document: ({
    Html,
    Head,
    Body,
    children,
    state: { siteData, renderMeta },
  }) => (
    <Html lang="en">
      <Head>
        <title>EthTrader Donuts</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  getRoutes: async () => [
    // {
    //   path: 'about',
    //   template: 'src/pages/about',
    // },
    // {
    //   path: '404',
    //   template: 'src/containers/NotFound',
    // },
  ],
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
    require.resolve('react-static-plugin-sass')
  ],
}
