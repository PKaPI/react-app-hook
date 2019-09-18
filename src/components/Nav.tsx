import  * as React from 'react';
const {useState} = React;

interface IProps {
  children: any;
}
const Nav = (props:IProps)=>{
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        点击
      </button>
       {props.children}
    </div>
  );
}
export default Nav;