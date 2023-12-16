"use client"
import React from 'react'
import { useRef,useEffect } from 'react';
// import Header from '../Header/Header';
// import StickyCursor from '../StickyCursor/StickyCursor';
import dynamic from 'next/dynamic'
const Header = dynamic(() => import('../Header/Header'))
const StickyCursor = dynamic(() => import('../StickyCursor/StickyCursor'))



type Props = {}

const CursorWrapper = (props: Props) => {
    const stickyElement = useRef(null);
  return (
   <>
    <Header ref={stickyElement}/>
    <StickyCursor stickyElement={stickyElement}/>
   </>
  )
}

export default CursorWrapper