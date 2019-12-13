const users = [
  {
    id: 1,
    firstName: `Cristina`,
    lastName: `Solovei`,
    username: `user1`,
    password: `1234`,
    role: `user`,
    project: `project 1`,
    position: `junior developer`,
    birthday: `26/07/00`,
  },
  {
    id: 2,
    firstName: `Dan`,
    lastName: `Obramov`,
    username: `user2`,
    password: `1234`,
    role: `user`,
    project: `project 2`,
    position: 'senior developer',
    birthday: `19/02/90`,
  },
  {
    id: 3,
    firstName: `Gretta`,
    lastName: `London`,
    username: `user3`,
    password: `1234`,
    role: `user`,
    project: `project 3`,
    position: `senior developer`,
    birthday: `16/10/90`,
  },
  {
    id: 4,
    firstName: `Jack`,
    lastName: `Cordon`,
    username: `admin`,
    password: `1234`,
    role: `admin`,
    project: `-`,
    position: `-`,
    birthday: `16/07/92`,
  },
]

export default users.map(user => ({
  ...user,
  logo: 'https://i.pravatar.cc/300',
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
