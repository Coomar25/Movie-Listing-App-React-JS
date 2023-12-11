import React from 'react'
import NowShowing from '../component/NowShowing'
import { useEffect } from 'react'
import NextRelease from '../component/NextRelease'
import CommingSoon from '../component/CommingSoon'

const Home = () => {

  return (
    <>
      <NowShowing />
      <NextRelease/>
      <CommingSoon/>
    </>
  )
}

export default Home
