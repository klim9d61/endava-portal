const users = [
  {
    id: 1,
    firstName: `first`,
    lastName: `last`,
    username: `user1`,
    password: `1234`,
    role: `user`,
    project: `project 1`,
    position: `junior developer`,
  },
  {
    id: 2,
    firstName: `first`,
    lastName: `last`,
    username: `user2`,
    password: `1234`,
    role: `user`,
    project: `project 2`,
    position: 'senior developer',
  },
  {
    id: 3,
    firstName: `first`,
    lastName: `last`,
    username: `user3`,
    password: `1234`,
    role: `user`,
    project: `project 3`,
    position: `senior developer`,
  },
  {
    id: 4,
    firstName: `first`,
    lastName: `last`,
    username: `admin`,
    password: `1234`,
    role: `admin`,
    project: `-`,
    position: `-`,
  },
]

export default users.map(user => ({
  ...user,
  img: 'https://i.pravatar.cc/300',
}))
