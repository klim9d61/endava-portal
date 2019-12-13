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

const listData = [
  {
    id: 1,
    title: 'Notification 1',
  },
  {
    id: 2,
    title: 'Notification 2',
  },
  {
    id: 3,
    title: 'Notification 3',
  },
  {
    id: 4,
    title: 'Notification 4',
  },
  {
    id: 5,
    title: 'Notification 5',
  },
  {
    id: 6,
    title: 'Notification 6',
  },
]

export const notificationsData = listData.map(element => ({
  ...element,
  href: 'http://ant.design',
  avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  description:
    'Notification Description. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, vitae.',
  content:
    'Notification Content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia at modi, sint voluptate mollitia laudantium. Fugit',
}))
