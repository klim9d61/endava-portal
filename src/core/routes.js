import { LoginPage, PortalPage, NotFoundPage } from 'pages/index'

export default [
  {
    path: '/login',
    component: LoginPage,
  },
  {
    path: '/home',
    component: PortalPage,
    routes: [
      {
        path: '/home/calendar',
        component: 'Calendar',
      },
      {
        path: '/home/requestMaterials',
        component: 'Request Materials form',
      },
      {
        path: '/home/vacations',
        component: 'Vacation forms',
      },
    ],
  },
  {
    path: '/*',
    component: NotFoundPage,
  },
]
