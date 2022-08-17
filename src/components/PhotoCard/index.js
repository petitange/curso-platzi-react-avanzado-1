import React from 'react'
import { Img, ImgWrapper } from './styles'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { useMutationToogleLike } from '../../hooks/useMutationToogleLike'
import { FavButton } from '../FavButton'
const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_dogs.jpg'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()
  const { mutation, mutationLoading, mutationError } = useMutationToogleLike()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const handleFavClick = () => {
    !liked && mutation({
      variables: {
        input: { id }
      }
    })
    setLiked(!liked)
  }

  return (
    <article ref={element}>
      {
                show && <>
                  <a href={`/?detail=${id}`}>
                    <ImgWrapper>
                      <Img src={src} />
                    </ImgWrapper>
                  </a>
                  <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
                </>
            }
    </article>
  )
}
