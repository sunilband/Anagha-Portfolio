"use client"
import React from 'react'
import { useRef,useEffect } from 'react';
import Header from '../Header/Header';
import StickyCursor from '../StickyCursor/StickyCursor';
type Props = {}

const CursorWrapper = (props: Props) => {
  const [windowWidth, setWindowWidth] = React.useState(0)
  const [visibleOnMobile, setVisibleOnMobile] = React.useState(false)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth)
    })
    if(windowWidth<768){
      setVisibleOnMobile(true)
    }
    else{
      setVisibleOnMobile(false)
    }
  }, [])
    const stickyElement = useRef(null);
  return (
   <>
    <Header ref={stickyElement}/>
    {visibleOnMobile?<StickyCursor stickyElement={stickyElement}/>:null}
    {/* <StickyCursor stickyElement={stickyElement}/> */}
   </>
  )
}

export default CursorWrapper