'use client'
import React from 'react'

/* as a function */
/* export default function button({styles, handleClick, text}) {
  return (
    <button type="button" className={styles} onClick={handleClick}>{text}</button>
  )
} */

/* using const 

const GlobalButton = ({text, styles}) => {
    return (
        <button type="button" class={styles} onClick={() => alert("You clicked me!")}>{text}</button>
      )
};
*/

const gblButtonAlert = ({styles, handleClick , text}) => {
    return (
        {/* <button type="button" className={styles} onClick={handleClick}>{text}</button> */},
        <button type="button" className={styles} onClick={() => alert(handleClick)}>{text}</button>
      )
};

export default gblButtonAlert;
