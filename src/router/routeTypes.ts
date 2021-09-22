import { ComponentClass, FunctionComponent } from 'react' //route在React-router中有专门的RouteProps 我这里只是来举个例子
import { RouteComponentProps } from 'react-router-dom'
export interface IRouteTypes {
  path: string
  component?:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>
  requiresAuth?: boolean
  icon?: ComponentClass | FunctionComponent
  name?: string
  meta?: metaType
  exact?: boolean
  children?: IRouteTypes[]
}

export interface metaType {
  roles?: string[]
}
