import React from 'react'
import { Card } from '../card/card'
import { useSelector } from 'react-redux'

export const Plants = ({styles}) => {
  const {plants} = useSelector(state=>state.data)
  return (
    <div className={`flex flex-wrap gap-[40px] ${styles}`}>
      {plants.map(plant=><Card key={plant.id} plant={plant}/>)}
    </div>
  )
}
