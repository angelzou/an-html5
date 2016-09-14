# Slush An-html5

> 一个简单的脚手架（还在开发中，还不完善，还有错误）

全局安装`an-scaffold`

```bash
$ npm install -g slush an-scaffold
```

如果你已经全局安装了`slush`，只需要安装`an-scaffold`即可

### 使用

给你的项目创建文件夹

```bash
$ mkdir my-slush-an-scaffold
```

进入创建的文件夹并且生成脚手架文件:

```bash
$ cd my-slush-an-scaffold && slush an-scaffold
```

创建应用或者是单个页面
```bash
$ cd my-slush-an-scaffold && slush an-scaffold:app
$ cd my-slush-an-scaffold && slush an-scaffold:page
```

项目中gulp自动构建的使用
```bash
$ cd my-slush-an-scaffold
// ./dev/blog-pc/config.js是blog-pc应用下面的配置文件
$ gulp watch --app ./dev/blog-pc/config.js
```



## Getting To Know Slush

Slush is a tool that uses Gulp for project scaffolding.

Slush does not contain anything "out of the box", except the ability to locate installed slush generators and to run them with liftoff.

To find out more about Slush, check out the [documentation](https://github.com/slushjs/slush).

## Contributing

See the [CONTRIBUTING Guidelines](https://github.com/angelzou/slush-an-html5/blob/master/CONTRIBUTING.md)

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/angelzou/slush-an-html5/issues).

## License

The MIT License

Copyright (c) 2016, AngelZou

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

