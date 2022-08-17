import React from 'react'
import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery'
import { useParams } from 'react-router-dom'

export const Detail = () => {
  const params = useParams()
  console.log(params)
  return <PhotoCardWithQuery id={params.detailId} />
}
 
