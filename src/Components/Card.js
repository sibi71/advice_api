import React from 'react'
import "../App.css"
import {BarLoader} from "react-spinners"
const Card = ({advice,fetchadvice,loader}) => {
  return (
    <div className='card'>
        <BarLoader
        color="rgb(243, 119, 214)"
        cssOverride={{}}
        height={6}
        loading={loader}
        speedMultiplier={1}
        width={700}
        />
        <h1>{advice }</h1>
        <button onClick={fetchadvice}>give me advice</button>
    </div>
  )
}

export default Card