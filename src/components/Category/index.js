import React from 'react'
import { Link, Image } from './styles'

const DEFAULT_IMAGE = 'https://static.platzi.com/media/user_upload/styled-comp-609781f2-82ec-476e-9250-579ee8b016fb.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path = '#', emoji = '?' }) => (
  <Link to={path}>
    <Image src={cover} />
    {emoji}
  </Link>
)
