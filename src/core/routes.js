import { LoginPage, PortalPage, NotFoundPage } from 'pages'
import {
  CalendarRBC,
  Vacations,
  RequestMaterials,
  News,
  Profile,
  Notifications,
} from 'features'

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
      {
        path: '/profile',
        component: Profile,
      },
    ],
  },
]

export default routes
