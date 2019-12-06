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

export default listData.map(element => ({
  ...element,
  href: 'http://ant.design',
  avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  description:
    'Notification Description. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, vitae.',
  content:
    'Notification Content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia at modi, sint voluptate mollitia laudantium. Fugit',
}))
