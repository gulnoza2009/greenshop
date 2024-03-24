import React, { useState } from 'react'
import currentItem from '../../../../constants/currentItem';
import { useParams } from 'react-router-dom';
import { FlowerInfo } from './flowerInfo';

export const Flower = () => {
  const plant = currentItem(useParams().id);
  let [countLit,setCountLit]=useState(1);
  const getCount = (count) => setCountLit(count);

  return (
    <>
    <FlowerInfo plant={plant} countLit={countLit} getCount={getCount}/>
    </>
  )
}
