import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from './Components/Card'
const App = () => {

  const api = "https://api.adviceslip.com/advice" 


  const [advice , setAdvice] = useState(" ")
  const [loader, setLoader]  = useState(false)


  async function fetchadvice() {
    try {
      setLoader(true)
      const res = await axios.get(api)

      // console.log(res.data.slip.advice);
   
      setAdvice(res.data.slip.advice)
      
      setLoader(false)
      
    } catch (error) {
      console.log(error);
      
    }
    
  }
  
useEffect(()=>{
 fetchadvice()
},[])


  return (
    <div className='app'>
      <Card advice = {advice}  fetchadvice = { fetchadvice}loader = {loader}/>
    </div>
  )
}

export default App