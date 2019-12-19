const menuList = [
  {
    path: '/admin',
    name: 'Administration',
    icon: 'setting',
    accessLevel: 1,
    submenu: [
      {
        path: '/admin/users',
        name: 'Users',
        icon: 'user',
        accessLevel: 1,
        submenu: [],
      },
      {
        path: '/admin/events',
        name: 'Events',
        icon: 'calendar',
        accessLevel: 1,
        submenu: [],
      },
    ],
  },
  {
    path: '/profile',
    name: 'Profile',
    icon: 'user',
    accessLevel: 0,
    submenu: [],
  },
  {
    path: '/',
    name: 'News',
    icon: 'read',
    accessLevel: 0,
    submenu: [],
  },
  {
    path: '/calendar',
    name: 'Calendar',
    icon: 'calendar',
    accessLevel: 0,
    submenu: [],
  },
  {
    path: '/request',
    name: 'Request',
    icon: 'tool',
    accessLevel: 0,
    submenu: [],
  },
  {
    path: '/notifications',
    name: 'Notifications',
    icon: 'bell',
    accessLevel: 0,
    submenu: [],
  },
]

export default menuList
