require('babel-core/register')({
  plugins: [
    ...require('../').plugins,
  ],
})
require('./es2016')
require('./es2017')
