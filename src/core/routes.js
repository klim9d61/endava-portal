import { LoginPage, PortalPage, NotFoundPage } from 'pages'
import { Calendar, Vacations, Materials, News, Notifications } from 'features'

const routes = [
  {
    path: '/login',
    component: LoginPage,
  },
  {
    path: '/404',
    component: NotFoundPage,
  },
  {
    path: '/*',
    component: PortalPage,
    routes: [
      {
        path: '/',
        component: News,
      },
      {
        path: '/calendar',
        component: Calendar,
      },
      {
        path: '/materials',
        component: Materials,
      },
      {
        path: '/vacations',
        component: Vacations,
      },
      {
        path: '/notifications',
        component: Notifications,
      },
    ],
  },
]

export default routes
