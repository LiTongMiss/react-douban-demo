// 配置按需加载  插件 react-app-rewired

const {injiectBabelPlugin} = require('react-app-rewired')

module.exports= function override(config, env){
    // webpack配置  扩展
    config = injiectBabelPlugin(
        // 默认配置基础上注入
        // 插件名，插件配置
        ['import', {libraryName: 'antd', libraryDirectory:'es', style:'css'}],
        config
    )

    config = injiectBabelPlugin(
        ['@babel/plugin-proposal-decorators', {legacy:true}],
        config
    )
    return config
    
}