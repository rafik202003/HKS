import React from 'react'
import { Cart } from './Cart'

export const List = ({list,deleteMovie}) => {
    console.log(list)
  return (
    <div>
         {
        React.Children.toArray(list.map(d=><Cart mod={d} deleteMovie={deleteMovie}/>))

         }


    </div>
  )
}
