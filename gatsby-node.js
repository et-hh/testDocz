const path = require('path')


exports.onCreateWebpackConfig = ({
  actions,
  loaders,
  getConfig
}) => {
  const config = getConfig()
  // console.log(config.module.rules)
  // {
  //   test: /\.tsx?$/,
  //   use: {
  //     options: {
  //       stage: 'develop-html',
  //       reactRuntime: 'classic',
  //       cacheDirectory: 'D:\\test\\docz-master\\docz-master\\examples\\myapp\\.doc
  // z\\.cache\\webpack\\babel',
  //       rootDir: 'D:\\test\\docz-master\\docz-master\\examples\\myapp\\.docz'
  //     },
  //     loader: 'D:\\test\\docz-master\\docz-master\\examples\\myapp\\node_modules\\
  // gatsby\\dist\\utils\\babel-loader.js'
  //   }
  // }
  // console.log(config.module.rules) && rule.oneOf[0].test.test('index.module.less') && rule.oneOf[0].use[0].loader.includes('style')
  // const rules = config.module.rules
  // for (var rule of rules) {
  //   if (rule.oneOf) {
  //     // rule.oneOf[0].use[0].options = {}
  //     // console.log(rule.oneOf)
  //   }
  //   if (rule.test && rule.test.test && rule.test.test('xx.ts')) {
  //     console.log(rule)
  //   }
  // }
  actions.setBabelPlugin({
    name: `@babel/plugin-proposal-decorators`,
    options: { legacy: true },
  })
  actions.setWebpackConfig({
    resolve: {
      modules: [
        path.resolve(__dirname, '../src/components'),
        path.resolve(__dirname, '../src/pages'),
        path.resolve(__dirname, '../src'),
        'node_modules'
      ],
      alias: {
        'react-router': path.resolve(__dirname, '../node_modules/umi/node_modules/react-router'), // 'D:\\apps\\ai-web\\scrm-admin\\node_modules\\react-router',
        'react-router-dom': path.resolve(__dirname, '../node_modules/umi/node_modules/react-router-dom'), // 'D:\\apps\\ai-web\\scrm-admin\\node_modules\\react-router-dom',
        'history': path.resolve(__dirname, '../node_modules/history-with-query'), // 'D:\\apps\\ai-web\\scrm-admin\\node_modules\\history-with-query',
        'regenerator-runtime': path.resolve(__dirname, '../node_modules/umi/node_modules/regenerator-runtime'), // 'D:\\apps\\ai-web\\scrm-admin\\node_modules\\@umijs\\preset-built-in\\node_modules\\regenerator-runtime',
        'react': path.resolve(__dirname, '../node_modules/react'), // 'D:/apps/ai-web/scrm-admin/node_modules/react',
        'react-dom': path.resolve(__dirname, '../node_modules/react-dom'), // 'D:/apps/ai-web/scrm-admin/node_modules/react-dom',
        'antd': path.resolve(__dirname, '../node_modules/antd'), // 'D:\\apps\\ai-web\\scrm-admin\\node_modules\\antd',
        'antd-mobile': path.resolve(__dirname, '../node_modules/antd-mobile'), // 'D:\\apps\\ai-web\\scrm-admin\\node_modules\\antd-mobile',
        'dva': path.resolve(__dirname, '../node_modules/dva'), // 'D:\\apps\\ai-web\\scrm-admin\\node_modules\\dva',
        '@': path.resolve(__dirname, '../src'), // 'D:/apps/ai-web/scrm-admin/src',
        '@@': path.resolve(__dirname, '../src/.umi'), // 'D:/apps/ai-web/scrm-admin/src/.umi',
        '@umijs/plugin-request/lib/ui': path.resolve(__dirname, '../node_modules/@umijs/plugin-request/lib/ui/index.js'), // 'D:\\apps\\ai-web\\scrm-admin\\node_modules\\@umijs\\plugin-request\\lib\\ui\\index.js',
        'umi': path.resolve(__dirname, '../node_modules/umi'), // 'D:\\apps\\ai-web\\scrm-admin\\node_modules\\umi'
      },
    },
    module: {
      rules: [
        {
          test: /\.less$/,
          use: [
            loaders.miniCssExtract(),
            loaders.css({
              modules: {
                compileType: "module",
                mode: "local",
                auto: true,
                exportGlobals: true,
                // localIdentName: "[path][name]__[local]--[hash:base64:5]",
                localIdentContext: path.resolve(__dirname, "src"),
                localIdentHashPrefix: "my-custom-hash",
                namedExport: true,
                exportLocalsConvention: "camelCase",
                exportOnlyLocals: false,
                localIdentName: "[path][name]__[local]--[hash:base64:5]"
              } 
            }),
            // 'css-loader?modules&localIdentName=[name]_[local]-[hash:5]',
            loaders.postcss(),
            'less-loader'
          ]
        }
      ]
    }
  })
}
