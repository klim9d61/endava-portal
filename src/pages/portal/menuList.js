const user = JSON.parse(localStorage.getItem('currentUser'))

const menuList = [
  {
    path: '/admin',
    name: 'Administration',
    icon: 'setting',
    submenu: [
      {
        path: '/admin/users',
        name: 'Users',
        icon: 'user',
        submenu: [],
      },
      {
        path: '/admin/events',
        name: 'Events',
        icon: 'calendar',
        submenu: [],
      },
    ],
  },
  {
    path: `/profile/${user.id}`,
    name: 'Profile',
    icon: 'user',
    submenu: [],
  },
  {
    path: '/',
    name: 'News',
    icon: 'read',
    submenu: [],
  },
  {
    path: '/calendar',
    name: 'Calendar',
    icon: 'calendar',
    submenu: [],
  },
  {
    path: '/request',
    name: 'Request',
    icon: 'tool',
    submenu: [],
  },
  {
    path: '/notifications',
    name: 'Notifications',
    icon: 'bell',
    submenu: [],
  },
]

export default menuList
