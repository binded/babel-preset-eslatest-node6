import test from 'blue-tape'

const user = {
  username: 'olalonde',
  email: 'olalonde@gmail.com',
  name: 'oli',
}

test('object rest', (t) => {
  const { email, ...rest } = user
  t.deepEqual(rest, { username: 'olalonde', name: 'oli' })
  t.equal(email, 'olalonde@gmail.com')
  t.end()
})

test('object rest in function parameter', (t) => {
  const fn = ({ email, ...rest } = {}) => {
    t.deepEqual(rest, { username: 'olalonde', name: 'oli' })
    t.equal(email, 'olalonde@gmail.com')
  }
  fn(user)
  t.end()
})
