const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'My Doc',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: 'D:\\test\\docz-master\\docz-master\\examples\\myapp\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'My Doc',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'D:\\test\\docz-master\\docz-master\\examples\\myapp',
          templates:
            'D:\\test\\docz-master\\docz-master\\examples\\myapp\\node_modules\\docz-core\\dist\\templates',
          docz: 'D:\\test\\docz-master\\docz-master\\examples\\myapp\\.docz',
          cache:
            'D:\\test\\docz-master\\docz-master\\examples\\myapp\\.docz\\.cache',
          app:
            'D:\\test\\docz-master\\docz-master\\examples\\myapp\\.docz\\app',
          appPackageJson:
            'D:\\test\\docz-master\\docz-master\\examples\\myapp\\package.json',
          appTsConfig:
            'D:\\test\\docz-master\\docz-master\\examples\\myapp\\tsconfig.json',
          gatsbyConfig:
            'D:\\test\\docz-master\\docz-master\\examples\\myapp\\gatsby-config.js',
          gatsbyBrowser:
            'D:\\test\\docz-master\\docz-master\\examples\\myapp\\gatsby-browser.js',
          gatsbyNode:
            'D:\\test\\docz-master\\docz-master\\examples\\myapp\\gatsby-node.js',
          gatsbySSR:
            'D:\\test\\docz-master\\docz-master\\examples\\myapp\\gatsby-ssr.js',
          importsJs:
            'D:\\test\\docz-master\\docz-master\\examples\\myapp\\.docz\\app\\imports.js',
          rootJs:
            'D:\\test\\docz-master\\docz-master\\examples\\myapp\\.docz\\app\\root.jsx',
          indexJs:
            'D:\\test\\docz-master\\docz-master\\examples\\myapp\\.docz\\app\\index.jsx',
          indexHtml:
            'D:\\test\\docz-master\\docz-master\\examples\\myapp\\.docz\\app\\index.html',
          db:
            'D:\\test\\docz-master\\docz-master\\examples\\myapp\\.docz\\app\\db.json',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /.*/,
        stages: ['develop'],
        options: {
          emitWarning: false,
          failOnError: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-compile-es6-packages',
      options: {
        modules: ['docz', 'gatsby-theme-docz'],
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
