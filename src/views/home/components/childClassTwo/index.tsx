import * as React from 'react';
import './style.scss'

export interface IChildOneProps {
}
//父组件更新子组件更新

class ChildTwo extends React.PureComponent<any, IChildOneProps> {
  getRandomColor = () => {
    return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6);
  }
  render() {
    const color = this.getRandomColor();
    return (
      <div className="child-one" style={{ width: 200, height: 200, background: color, textAlign: 'center' }}>
        ChildTwo: {color}
      </div>
    );
  }
}
export default ChildTwo
