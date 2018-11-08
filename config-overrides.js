const rewireSass = require('react-app-rewire-scss');
// 新增
const { injectBabelPlugin } = require('react-app-rewired');

const rewireLess = require('react-app-rewire-less');


/* scss */
module.exports = function override(config, env) {
    
    config = rewireSass(config, env);
    // 新增
    config = injectBabelPlugin(
        // ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
        // config,

        // 新增
        ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], // change importing css to less
        config,
    );

    // 新增
    config = rewireLess.withLoaderOptions({
        modifyVars: { "@primary-color": "#029fa5" },
        javascriptEnabled: true,
        loader:require.resolve('less-loader'),
    })(config, env);
    
    return config;
}