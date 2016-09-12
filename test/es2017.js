import test from 'blue-tape'

test('es2017 - syntax trailing function commas', (t) => {
  const add = (
    a,
    b, // trailing comma!
  ) => a + b
  t.equal(
    add(2, 5),
    7, // trailing comma!
  )
  t.end()
})

test('es2017 - async / await', async (t) => {
  const fn = () => new Promise((resolve) => {
    process.nextTick(() => resolve('foo'))
  })
  const result = await fn()
  t.equal(result, 'foo')
  // don't need to call t.end because async transforms function
  // to promise and blue-tape understands promises
})
