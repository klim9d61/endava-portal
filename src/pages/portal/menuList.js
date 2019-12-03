export default [
  {
    path: '/home',
    name: 'News',
    icon: 'read',
    submenu: [
      {
        path: '/home/calendar',
        name: 'Calendar 1',
        icon: 'calendar',
        submenu: [],
      },
      {
        path: '/home/vacations',
        name: 'Vacations 2',
        icon: 'schedule',
        submenu: [],
      },
      {
        path: '/home/materials',
        name: 'Materials 3',
        icon: 'tool',
        submenu: [],
      },
    ],
  },
  {
    path: '/home/calendar',
    name: 'Calendar',
    icon: 'calendar',
    submenu: [],
  },
  {
    path: '/home/vacations',
    name: 'Vacations',
    icon: 'schedule',
    submenu: [],
  },
  {
    path: '/home/materials',
    name: 'Materials',
    icon: 'tool',
    submenu: [],
  },
]
