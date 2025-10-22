import React, { useMemo } from 'react'

const UseMemo = () => {
    const change = true;
    const memoizevalue = useMemo(() => computeExpensiveValue(2,2),[change])
  return (
        <h1>{memoizevalue}</h1>
   
    
  )
}

const computeExpensiveValue=(a,b)=>{
    return a * b;
}

export default UseMemo
