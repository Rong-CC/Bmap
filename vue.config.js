module.exports={
    // baseUrl: process.env.NODE_ENV === "production" ? "./" : "/",
    // outputDir: process.env.outputDir,
    configureWebpack: {
        externals: {
            'echarts': 'echarts',
            "BMap": "BMap"
        },
        
    }
}