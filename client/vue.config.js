const path = require('path')
// create aproxy to solve the localhost error

module.exports = {
    outputDir: path.resolve(__dirname, '../server/public'),
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:5000'
            }
        }
    }
}