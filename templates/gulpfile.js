'use strict';

var gulp = require('gulp'),
    spritesmith = require('gulp.spritesmith'),
    imagemin = require('gulp-imagemin'),
    open = require('gulp-open');

// 配置信息
var configs = {
    // 图片压缩
    image: {
        src: 'img', // 源地址
        dest: 'dist/img' // 目标地址
    },
    // 值生成正常的sprite图
    icon: {
        src: 'sprite/icon/*.*', // 修改图片位置
        cssOpts: 'spriteSrc',
        imgName: 'icon-sprite.png',
        cssName: 'icon-sprite.scss',
        cssFormat: 'scss',
        cssTemplate: './tpl/scss.template.mustache',
        algorithm: 'binary-tree',
        padding: 8,
        cssVarMap: function(sprite) {
            sprite.name = 'icon-' + sprite.name;
        }
    },
    // 可以生成retina的，该文件夹下面的retina图片和正常图片要一致，否则会报错
    logo: {
        src: 'sprite/logo/*.*', // 修改图片位置
        cssOpts: 'spriteSrc',
        retinaSrcFilter: ['./sprite/logo/*@2x.*'],
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
    spritesOutputPath: 'dist/sprite'
};

// sprite总命令
gulp.task('sprite:normal', ['sprite:icon', 'sprite:min'], function() {});
gulp.task('sprite:retina', ['sprite:logo', 'sprite:min'], function() {});
// 创建雪碧图
gulp.task('sprite:icon', function() {
    var spriteData = gulp.src(configs.icon.src) // source path of the sprite images
        .pipe(spritesmith(
            configs.icon
        ));
    spriteData.img.pipe(gulp.dest(configs.spritesOutputPath)); // output path for the sprite
    spriteData.css.pipe(gulp.dest(configs.spritesOutputPath)); // output path for the CSS
});
// 创建雪碧图
gulp.task('sprite:logo', function() {
    var spriteData = gulp.src(configs.logo.src) // source path of the sprite images
        .pipe(spritesmith(
            configs.logo
        ));
    spriteData.img.pipe(gulp.dest(configs.spritesOutputPath)); // output path for the sprite
    spriteData.css.pipe(gulp.dest(configs.spritesOutputPath)); // output path for the CSS
});
// 压缩雪碧图
gulp.task('sprite:min', function() {
    return gulp.src(configs.spritesOutputPath + '/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
    .pipe(imagemin({
        interlaced: true,
    }))
    .pipe(gulp.dest(configs.spritesOutputPath))
});
// 打开文件目录
gulp.task('sprite:open', function() {
    gulp.src('')
    .pipe(open({app: 'Finder', uri: configs.spritesOutputPath}));
});

// 压缩图片
gulp.task('image:min', function() {
    return gulp.src(configs.image.src + '/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
    .pipe(imagemin({
        interlaced: true,
    }))
    .pipe(gulp.dest(configs.image.dest))
});

// browser-sync 自动刷新
gulp.task('server', function() {

});


