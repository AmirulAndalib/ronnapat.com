import Head from '../components/meta'
import React, { useEffect } from "react";
import Router from 'next/router'
export default function Home() {
  useEffect(() => {
    const {pathname} = Router
    if(pathname == '/' ){
        Router.push('/en-us')
    }
  });
 
  return (<Head title='Home' image='meta.png' />)
}
