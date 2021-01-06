import React,{ useState } from 'react'
import Helmet from 'react-helmet'
import Page from '../../components/Page'
import { Button } from 'antd';
import ChildOne from './components/childHookOne';
import ChildTwo from './components/childClassTwo';
import './style.scss';

let count:number = 0;
//React的关于渲染的最重要的一个特性就是 当父组件重渲染的时候，其会默认递归的重渲染所有子组件
export default () => {
  const [title, setTitle] = useState<string>('home');
  const [option, setOption] = useState<string>('home');
  const onChangeTitle = ():void =>  {
    count++
    setTitle('title:' + count)
  }
  const onChangeOption = ():void => {
    count++
    setOption('title:' + count)
  }
  return <Page>
    <Helmet title={title} />
    <div className="contro-wrap">
      <Button onClick={onChangeTitle}>更改Title</Button>
      <Button onClick={onChangeOption} type='primary'>更改Option</Button></div>
    <div className="child-wrap">
      <ChildOne option={option} />
      <ChildTwo option={option} />
    </div>
  </Page>
}