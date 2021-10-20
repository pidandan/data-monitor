import React from 'react';
import useStores from '../../stores';
const User: React.FC<{}> = () => {
  const { userStore } = useStores();
  const { name } = userStore;

  return <div>我是用户,{name}</div>;
};
export default User;
