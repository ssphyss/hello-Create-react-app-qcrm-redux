const rewireSass = require('react-app-rewire-scss');
// 新增
const { injectBabelPlugin } = require('react-app-rewired');

/* scss */
module.exports = function override(config, env) {
    
    config = rewireSass(config, env);
    // 新增
    config = injectBabelPlugin(
        ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
        config,
    );

    return config;
}