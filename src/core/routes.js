import { LoginPage, PortalPage, NotFoundPage } from 'pages/index'

export default [
  {
    path: '/login',
    component: LoginPage,
  },
  {
    path: '/portal',
    component: PortalPage,
    routes: [
      {
        path: '/portal/calendar',
        component: 'Calendar',
      },
      {
        path: '/portal/requestMaterials',
        component: 'Request Materials form',
      },
      {
        path: '/portal/vacations',
        component: 'Vacation forms',
      },
    ],
  },
  {
    path: '/*',
    component: NotFoundPage,
  },
]
