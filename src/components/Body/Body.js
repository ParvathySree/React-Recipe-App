import React, { useEffect, useState } from 'react'
import foodsImg from '../utils/images/foods.svg'
import { foodQuotes } from '../utils/constants/constants'
import './Body.css'
const Body = () => {

  const [quoteCount,setQuoteCount] = useState(0)

  useEffect(()=>{

    const timer = setTimeout(()=>{
      if(quoteCount<foodQuotes.length-1){
          var newCount = quoteCount+1;
          setQuoteCount(newCount);
          }else{
            setQuoteCount(0)
          }
      
    },(10000))
   

    return(()=>clearTimeout(timer))

  },[quoteCount])

  return (
    <div className='body-con'>
      <div className='body-content'>
          <h1>Delight in every bite!</h1>
          {/* <p>Your ultimate recipe companion</p> */}
      </div>
      <div className='body-img'>
          <img className="cooking-img" src={foodsImg} alt="cookingImage"></img>
      </div>
      <div>
        {foodQuotes.map((quote,index)=>{
          return(
            index === quoteCount && <span className="quote" key={quote}>{'"' + quote + '"'}</span>
          )
        })}
      
      </div>
    </div>
  )
}

export default Body