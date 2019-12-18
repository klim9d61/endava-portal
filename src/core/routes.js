import { LoginPage, PortalPage, NotFoundPage } from 'pages'
import { Calendar, RequestForm, News, Profile, Notifications } from 'features'

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
        path: '/request',
        component: RequestForm,
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
