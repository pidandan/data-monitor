import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { IRouteTypes } from '../../router/routeTypes'
const Home: React.FC<any> = (props: any) => {
  const dealChildrenRouter = (routers: IRouteTypes[]): any => {
    return routers.map((item: IRouteTypes, index: number) => {
      if (item.children && item.children.length > 0) {
        return dealChildrenRouter(item.children)
      } else {
        return <Route key={index} path={item.path} component={item.component} />
      }
    })
  }
  return (
    <div>
      <div>我是home</div>
      <div>
        <Link to="/home/user">user</Link>
      </div>
      <div>
        <Switch>{dealChildrenRouter(props.route.children)}</Switch>
      </div>
    </div>
  )
}
export default Home
