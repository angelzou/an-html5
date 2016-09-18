var appName = "<%= appName %>";
var parentDir = './dev/';
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
    // 雪碧图&图片配置信息
    sprite: {
        // 图片压缩
        image: {
            src: parentDir + appName + '/img', // 源地址
            dest: './dist/' + appName + '/img' // 目标地址
        },
        // 生成正常的sprite图
        icon: {
            src: parentDir + appName + '/sprite/icon/*.*', // 修改图片位置
            cssOpts: 'spriteSrc',
            imgName: 'icon-sprite.png',
            cssName: 'icon-sprite.scss',
            cssFormat: 'scss',
            cssTemplate: './tpl/scss.sprite.tpl',
            algorithm: 'binary-tree',
            padding: 8,
            cssVarMap: function(sprite) {
                sprite.name = 'icon-' + sprite.name;
            }
        },
        // 可以生成retina的，该文件夹下面的retina图片和正常图片要一致，否则会报错
        logo: {
            src: parentDir + appName + '/sprite/logo/*.*', // 修改图片位置
            cssOpts: 'spriteSrc',
            retinaSrcFilter: [parentDir + appName + '/sprite/logo/*@2x.*'],
            imgName: 'logo-sprite.png',
            retinaImgName: 'logo-sprite@2x.png',
            cssName: 'logo-sprite@2x.scss',
            cssFormat: 'scss',
            cssTemplate: './tpl/scss.template.mustache',
            algorithm: 'binary-tree',
            padding: 8,
            cssVarMap: function(sprite) {
                sprite.name = 'icon-' + sprite.name;
            }
        },
        spritesOutputPath: parentDir + appName + '/sprite' // 雪碧图生成后存储的地址
    },
    css: {
        sass: {
            src: parentDir + appName + '/css/sass',
            dest: parentDir + appName + '/css/css'
        },
        src: parentDir + appName + '/css/css',
        dest: './dist/' + parentDir + appName + '/css'
    },
    js: {
        src: parentDir + appName + '/js',
        dest: './dist/' + parentDir + appName + '/js'
    },
    cdn: {

    }
};