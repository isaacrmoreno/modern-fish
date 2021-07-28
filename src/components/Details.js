import React from 'react'
import GettingStarted from './GettingStarted'
import utilStyles from '../styles/utils.module.css'

function Details({selectedFish}) {
  
  return (
    <>
      {selectedFish === null ? <GettingStarted/> :
      <>
        <div className={utilStyles.headingXl}>{selectedFish.name}</div>
        <hr/>
        <div className={utilStyles.headingLg}>Features:</div>
        <div>{selectedFish.features}</div>
        <div className={utilStyles.headingLg}>Habitat:</div>
        <div>{selectedFish.habitat}</div>
        <div className={utilStyles.headingLg}>Technique:</div>
        <div>{selectedFish.technique}</div>
        <br/>
        <div> - Copy provided courtesy of <a className={utilStyles.a} href="https://myodfw.com/">ODFW</a></div>
      </>
      } 
    </>
  )
}

  export default Details;
