import bcrypt from 'bcryptjs'
const users = [
  {
    name: 'admin',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('111111', 10),
    isAdmin: true,
  },
  {
    name: 'client1',
    email: 'client1@gmail.com',
    password: bcrypt.hashSync('111111', 10),
    isAdmin: true,
  },
  {
    name: 'client2',
    email: 'client2@gmail.com',
    password: bcrypt.hashSync('111111', 10),
  },
]

export default users
