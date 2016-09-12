import test from 'blue-tape'

// Already supported by Node v6
test('es2016 - arr.includes()', (t) => {
  t.ok(['a', 'b', 'c'].includes('b'))
  t.end()
})

// transform-exponentiation-operator
test('es2016 - exponentiation operator', (t) => {
  t.equal(2 ** 3, 8)
  t.equal(2 ** 8, 256)
  t.end()
})
