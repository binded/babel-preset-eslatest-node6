require('babel-core/register')({
  presets: [require('../')],
  plugins: [
    ['transform-object-rest-spread', { useBuiltIns: true }],
  ],
})
require('./object-rest-spread')
