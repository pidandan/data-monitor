import { lazy } from 'react'
// import { AndroidOutlined } from '@ant-design/icons'
import { IRouteTypes } from './routeTypes'
const Login = lazy(() => import('../page/login'))
const Home = lazy(() => import('../page/home'))
const User = lazy(() => import('../page/user'))
const NotFound = lazy(() => import('../page/notFound'))
// import Login from '../page/login'
// import Home from '../page/home'
// import NotFound from '../page/notFound'

export const router: IRouteTypes[] = [
  {
    path: '/',
    exact: true,
    component: Login,
    requiresAuth: false,
  },
  {
    path: '/home',
    exact: true,
    component: Home,
    requiresAuth: false,
    children: [
      {
        path: '/home/user',
        name: 'user',
        exact: true,
        component: User,
        requiresAuth: false,
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
