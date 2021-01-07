import * as React from 'react';
import './style.scss'

export interface IChildOneProps {
  option:string
}
//父组件更新子组件更新
function ChildOne (props: IChildOneProps) {
  const getRandomColor = ():string =>{
    return '#'+('00000'+ (Math.random()*0x1000000<<0).toString(16)).substr(-6); 
  }
  const color:string = getRandomColor();
  return (
    <div className="child-one" style={{width:200,height:200,background:color,textAlign:'center'}}>
        hook component: {color}
    </div>
  );
}
export default React.memo(ChildOne)

//虽然我们写的是函数组件，但是如果不做处理，父组件更新子组件也会跟着更新
