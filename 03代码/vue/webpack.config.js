var htmlWP = require('html-webpack-plugin');
module.exports={
	entry:'./src/main.js',//指定打包入口文件
	output:{
		path:__dirname+'/dist',//输出文件
		filename:'build.js'//文件名
	},
	module:{
		loaders:[
			{
				test:/\.css$/,
				loader:'style-loader!css-loader'
			},
			{
				test:/\.less/,
				loader:'style-loader!css-loader!less-loader'
			},
			{
				test: /\.(png|jpg|gif|ttf)$/,
                loader:'url-loader!limit=10000'
			},
			{
            test: /\.js$/,
            loader:'babel-loader',
            exclude:/node_modules/
    		},
    		{
            test: /.vue$/,  // 解析 .vue 组件页面文件
            loader:'vue-loader' 
    		}
		]
	},
	babel:{
            presets:['es2015'],  // 配置将es6语法转换成es5语法
            plugins:['transform-runtime'] // 用来解析vue文件
    },
	 plugins:[
            new htmlWP({
                title: '首页',
                filename: 'index.html', 
                template: 'index.html' //根据template.html这个模板来生成
                })
            ]
}