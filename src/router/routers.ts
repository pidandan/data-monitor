import { lazy } from 'react'
import { IRouteTypes } from './routeTypes'
const Login = lazy(() => import('../page/login'))
const Home = lazy(() => import('../page/home'))
const User = lazy(() => import('../page/user'))
const NotFound = lazy(() => import('../page/notFound'))
const Aboult = lazy(() => import('../page/about'))
export const router: IRouteTypes[] = [
  {
    path: '/',
    exact: true,
    component: Login,
    requiresAuth: false,
  },
  {
    path: '/home',
    exact: false,
    component: Home,
    requiresAuth: false,
    children: [
      {
        path: '/home/user',
        name: 'user',
        exact: false,
        component: User,
        requiresAuth: false,
      },
      {
        path: '/home/about',
        name: 'about',
        exact: false,
        component: Aboult,
        requiresAuth: false,
        children: [
          {
            path: '/home/about/test',
            name: 'test',
            exact: false,
            component: Aboult,
            requiresAuth: false,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    exact: false,
    component: NotFound,
    requiresAuth: false,
  },
]
