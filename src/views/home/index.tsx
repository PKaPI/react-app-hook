import * as React from 'react'
import Helmet from 'react-helmet'
import Page from '../../components/Page'
import { Button } from 'antd';
import ChildOne from './components/childHookOne';
import ChildTwo from './components/childClassTwo';
import './style.scss';

const { useState, useEffect } = React
//React的关于渲染的最重要的一个特性就是 当父组件重渲染的时候，其会默认递归的重渲染所有子组件
export default () => {
  const [title, setTitle] = useState<string>('home');
  let count = 0;
  useEffect(() => {
    console.log(title)
  }, [title]);
  const onClickBtn = () => {
    count++
    setTitle('title:'+count)
  }
  return <Page>
    <Helmet title={title} />
    <Button onClick={onClickBtn}>setstate</Button>
     <div className="child-wrap">
       <ChildOne/>
       <ChildTwo/>
     </div>
  </Page>
}