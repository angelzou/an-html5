var appName = 'common';
module.exports = {
    // 应用名称
    appName: appName,
    css: {
        sass: {
            src: './' + appName + '/sass',
            dest: './' + appName + '/css'
        },
        src: './' + appName + '/css',
        dest: './' + appName + '/css/min'
    },
    js: {
        src: './' + appName + '/js',
        dest: './' + appName + '/js/min'
    },
    cdn: {

    }
};