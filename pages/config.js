var appName = '<%= appName %>';
var parentDir = './page/';
module.exports = {
    // 应用名称
    appName: appName,
    // 服务器配置信息，文档：http://www.browsersync.cn/docs/gulp/
    server: {
        isProxy: false, // 是否使用代理服务器，false为不使用代理，true为使用代理
        proxy: 'www.angel.com', // 代理服务器的域名和IP
        files: [parentDir + appName + '/*.html'], // browsersync可以在工作中监听的文件
        baseDir: parentDir + appName + '/'  // 使用browsersync内置的静态服务器
    },
    css: {
        sass: {
            src: parentDir + appName,
            dest: parentDir + appName
        },
        src: parentDir + appName,
        dest: './dist/' +  parentDir + appName + '/css'
    },
    js: {
        src: parentDir + appName,
        dest: './dist/' + parentDir + appName + '/js'
    },
    html: {
        src: parentDir + appName,
        dest:  './dist/' + parentDir + appName + '/html',
        listen: [
            './dist/' + parentDir + appName + '/*.html'
        ]
    },
    cdn: {

    }
};