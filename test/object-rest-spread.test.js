require('babel-core/register')({
  presets: [require('../')],
  plugins: [
    'transform-es2015-destructuring',
    'transform-es2015-parameters',
    ['transform-object-rest-spread', { useBuiltIns: true }],
  ],
})
require('./object-rest-spread')
