/*
 * slush-an-html5
 * https://github.com/angelzou/slush-an-html5
 *
 * Copyright (c) 2016, AngelZou
 * Licensed under the MIT license.
 */

'use strict';

var gulp = require('gulp'),
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    _ = require('underscore.string'),
    inquirer = require('inquirer'),
    path = require('path');

function format(string) {
    var username = string.toLowerCase();
    return username.replace(/\s/g, '');
}

var defaults = (function () {
    var workingDirName = path.basename(process.cwd()),
      homeDir, osUserName, configFile, user;

    if (process.platform === 'win32') {
        homeDir = process.env.USERPROFILE;
        osUserName = process.env.USERNAME || path.basename(homeDir).toLowerCase();
    }
    else {
        homeDir = process.env.HOME || process.env.HOMEPATH;
        osUserName = homeDir && homeDir.split('/').pop() || 'root';
    }

    configFile = path.join(homeDir, '.gitconfig');
    user = {};

    if (require('fs').existsSync(configFile)) {
        user = require('iniparser').parseSync(configFile).user;
    }

    return {
        appName: workingDirName,
        userName: osUserName || format(user.name || ''),
        authorName: user.name || '',
        authorEmail: user.email || ''
    };
})();

var prompts = [{
    name: 'appName',
        message: '请输入项目名?',
        default: defaults.appName
    }, {
        name: 'appDescription',
        message: '请输入项目描述?'
    }, {
        name: 'appVersion',
        message: '请输入项目版本号?',
        default: '0.1.0'
    }, {
        name: 'authorName',
        message: '请输入作者名称?',
        default: defaults.authorName
    }, {
        name: 'authorEmail',
        message: '请输入作者邮箱?',
        default: defaults.authorEmail
    }, {
        name: 'userName',
        message: '请输入Github用户名?',
        default: defaults.userName
    }, {
        type: 'confirm',
        name: 'moveon',
        message: '继续?'
}];

var promptsModule = [{
        name: 'appName',
        message: '请输入应用名?(必须)',
        validate: function(val) {
            if (val === '') {
                // Pass the return value in the done callback
                return '请输入应用名?(必须)';
            }
            // Pass the return value in the done callback
            return true;
        }
    }, {
        name: 'appDescription',
        message: '请输入应用描述?'
    }, {
        name: 'appVersion',
        message: '请输入应用版本号?',
        default: '0.1.0'
    }, {
        name: 'authorName',
        message: '请输入作者名称?',
        default: defaults.authorName
    }, {
        type: 'confirm',
        name: 'moveon',
        message: '继续?'
}];

var promptsPage = [{
        name: 'appName',
        message: '请输入页面名称，请以_pc或_h5结尾？(必须)',
        validate: function(val) {
            if (val === '') {
                return '请输入页面名称，请以_pc或_h5结尾？(必须)';
            }
            if (/_pc/.test(val) || /_h5/.test(val)) {
                return true;
            } else {
                return '输入的页面名称，请以_pc或_h5结尾？(必须)';
            }

        }
    }, {
        name: 'appDescription',
        message: '请输入业务描述?'
    }, {
        name: 'appVersion',
        message: '请输入页面版本号?',
        default: '0.1.0'
    }, {
        name: 'authorName',
        message: '请输入作者名称?',
        default: defaults.authorName
    }, {
        type: 'confirm',
        name: 'moveon',
        message: '继续?'
}];

gulp.task('default', function (done) {
    //Ask
    inquirer.prompt(prompts,
        function (answers) {
            if (!answers.moveon) {
                return done();
            }
            answers.appNameSlug = _.slugify(answers.appName);
            gulp.src(__dirname + '/templates/**')
                .pipe(template(answers))
                .pipe(rename(function (file) {
                    if (file.basename[0] === '_') {
                        file.basename = '.' + file.basename.slice(1);
                    }
                }))
                .pipe(conflict('./'))
                .pipe(gulp.dest('./'))
                .pipe(install())
                .on('end', function () {
                    done();
                });
        });
});

gulp.task('app', function(done) {
    // var pageName = gulp.args[0];
    // if (!pageName) {
    //     console.log('请带上应用名称!');
    //     done();
    //     return;
    // }
    inquirer.prompt(promptsModule,
        function (answers) {
            if (!answers.moveon) {
                return done();
            }
            answers.appNameSlug = _.slugify(answers.appName);
            gulp.src(__dirname + '/modules/**')
                //.pipe(template(answers))
                .pipe(rename(function (file) {
                    if (file.basename[0] === '_') {
                        file.basename = '.' + file.basename.slice(1);
                    }
                }))
                .pipe(conflict('./dev/' + answers.appName + '/'))
                .pipe(gulp.dest('./dev/' + answers.appName + '/'))
                // .pipe(install())
                .on('end', function () {
                    done();
                });
        });
});

gulp.task('page', function(done) {
    // var pageName = gulp.args[0];
    // if (!pageName) {
    //     console.log('请带上页面名称！slush an-scaffold:page test_h5');
    //     done();
    //     return;
    // }
    inquirer.prompt(promptsPage,
        function (answers) {
            if (!answers.moveon) {
                return done();
            }
            answers.appNameSlug = _.slugify(answers.appName);
            gulp.src(__dirname + '/pages/**')
                .pipe(template(answers))
                .pipe(rename(function (file) {
                    if (file.basename[0] === '_') {
                        file.basename = '.' + file.basename.slice(1);
                    }
                }))
                .pipe(conflict('./page/' + answers.appName + '/'))
                .pipe(gulp.dest('./page/' + answers.appName + '/'))
                // .pipe(install())
                .on('end', function () {
                    done();
                });
        });
});