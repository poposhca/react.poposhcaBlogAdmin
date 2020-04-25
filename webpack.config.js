const path = require('path')

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    resolve: {
        extensions: ['.js'],
        modules: ['node_modules', 'src'],
    },
    output: {
        path: path.resolve(__dirname, 'server/public/dist'),
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
        ]
    },
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'quill': 'Quill'
    }
}
