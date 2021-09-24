import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
  RouteComponentProps,
  Redirect,
} from 'react-router-dom'
import { router as routesMap } from './routers'
import { IRouteTypes } from './routeTypes'
const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        {
          // routesMap.map((item: IRouteTypes, index: number) => {
          //   return (
          //     <Route
          //       key={index}
          //       path={item.path}
          //       exact={item.exact}
          //       component={item.component}
          //     ></Route>
          //   )
          // })

          routesMap.map((item: IRouteTypes, index: number) => {
            return (
              <Route
                key={index}
                path={item.path}
                exact={item.exact}
                render={(props: RouteComponentProps) => {
                  let Component: any = item.component
                  console.log(item.children)
                  //如果是不需要权限 或者 已登录 或者 访问路径是/login，则直接返回当前组件
                  if (!item.requiresAuth) {
                    return <Component {...props} route={item} />
                  }
                  debugger
                  //否则重定向到/login
                  return (
                    <Redirect
                      to={{
                        pathname: '/login',
                        state: { from: props.location },
                      }}
                    />
                  )
                }}
              />
            )
          })
        }
      </Switch>
    </Router>
  )
}
export default Routes
