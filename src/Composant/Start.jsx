import React from 'react'

export const Start = ({number}) => {
    const start=(number)=>{
  let tab=[]
  for(let i=0;i<5;i++)
  {
  if(i<number)
  tab.push(<span style={{color:'gold'}}>★</span>)
  else
  tab.push(<span style={{color:'black'}}>★</span>)
  }
  return tab
    }
  return (
    <div>{start(number)}</div>
  )
}
