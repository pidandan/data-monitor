import { lazy } from 'react'
import { AndroidOutlined } from '@ant-design/icons'
import { IRouteTypes } from './routeTypes'
const Login = lazy(() => import('../page/login'))
const Home = lazy(() => import('../page/home'))
const User = lazy(() => import('../page/user'))
const NotFound = lazy(() => import('../page/notFound'))

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
    requiresAuth: true,
    children: [
      {
        path: '/home/user',
        name: 'user',
        icon: AndroidOutlined,
        component: User,
      },
    ],
  },
  {
    path: '*',
    exact: true,
    component: NotFound,
    requiresAuth: false,
  },
]
