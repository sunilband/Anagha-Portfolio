"use client"
import React from 'react'
import { useRef } from 'react';
import Header from '../components/header/index';
import StickyCursor from '../components/stickyCursor/index';
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