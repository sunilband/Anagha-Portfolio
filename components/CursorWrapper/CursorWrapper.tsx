"use client"
import React from 'react'
import { useRef,useEffect } from 'react';
import Header from '../Header/Header';
import StickyCursor from '../StickyCursor/StickyCursor';





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