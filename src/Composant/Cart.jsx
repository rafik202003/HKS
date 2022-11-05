import React from 'react'
import { Start } from './Start'

export const Cart = ({mod,deleteMovie}) => {
    console.log(mod)
  return (
    <div className='card'> 
     <h3>{mod.title}</h3>
     <img src={mod.image} alt={mod.title} />
<Start number={mod.rating} />
<button onClick={()=>deleteMovie(mod.id)}>delete 

</button>

    </div>
  )
}
