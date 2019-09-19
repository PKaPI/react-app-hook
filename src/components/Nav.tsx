import  * as React from 'react';
import {Button} from 'antd';
const {useState} = React;

interface IProps {
  children: any;
}
const Nav = (props:IProps)=>{
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <Button type="primary" onClick={() => setCount(count + 1)}>
        点击
      </Button>
       {props.children}
    </div>
  );
}
export default Nav;