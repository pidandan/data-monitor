import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { router as routesMap } from './routers'
import { IRouteTypes } from './routeTypes'
const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        {routesMap.map((item: IRouteTypes, index: number) => {
          return (
            <Route
              key={index}
              render={(props) => {
                const Component: any = item.component
                return <Component {...props} route={item} />
              }}
            ></Route>
          )
        })}
      </Switch>
    </Router>
  )
}
export default Routes
