const path = require('path');
const fs = require('fs');

const filterFiles = (dir) => fs.readdirSync(dir)
.filter(x => fs.lstatSync(path.join(dir, x)).isFile())
.map(x => path.resolve(dir, x));

module.exports = {
    context: path.resolve(__dirname, 'src/components'),
    devtool: 'inline-source-map',
    entry: filterFiles(path.join(__dirname, 'src', 'components')),
    mode: 'development',
    module: {
        rules: [
            {
                test: /.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /.ts$/,
                use: 'ts-loader'
            }
        ]
    },
    output: {
        filename: 'main.js',
        path: path.resolve(process.cwd(), 'public')
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    target: 'web'
}
