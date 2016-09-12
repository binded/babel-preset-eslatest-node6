const es2015 = [
  require('babel-plugin-transform-es2015-modules-commonjs'),
]

const es2016 = [
  require('babel-plugin-transform-exponentiation-operator'),
]

const es2017 = [
  require('babel-plugin-syntax-trailing-function-commas'),
  // [require('babel-plugin-transform-runtime'), {}],
  require('babel-plugin-transform-async-to-generator'),
]

const preset = (context, { loose } = {}) => {
  const plugins = [...es2015, ...es2016, ...es2017]
    .map(
      (plugin) => (Array.isArray(plugin) ? plugin : [plugin, {}])
    )
    .map(
      ([plugin, opts]) => [plugin, Object.assign(opts, { loose })]
    )

  return { plugins }
}

// syntax highlighting breaks :(

module.exports = preset({})

Object.defineProperty(module.exports, 'buildPreset', {
  configurable: true,
  writable: true,
  enumerable: false,
  value: preset,
})
