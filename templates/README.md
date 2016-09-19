#an-scaffold

### 使用

创建应用或者是单个页面（进入项目根目录）
```bash
$ slush an-scaffold:app    // 创建应用
$ slush an-scaffold:page   // 创建页面
```

项目中gulp自动构建的使用，例如运行gulp watch任务（进入项目根目录）

```bash
// ./dev/blog-pc/config.js是blog-pc应用下面的配置文件
$ gulp watch --app ./dev/blog-pc/config.js
```


### tpl【模板文件夹】

### 参考
1. `scss.sprite.tpl`
    雪碧图生成css时，使用的模板文件 [https://github.com/banricho/webLog/issues/1](https://github.com/banricho/webLog/issues/1)

2. gulp：从命令行传递参数[http://www.gulpjs.com.cn/docs/recipes/pass-arguments-from-cli/](http://www.gulpjs.com.cn/docs/recipes/pass-arguments-from-cli/)

### TODO
1. mock测试数据
2. cdn上传

