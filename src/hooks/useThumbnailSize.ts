import { useEffect, useState } from 'react'
import type { ThumbnailSize } from '../types/movie'

export function useThumbnailSize(): ThumbnailSize {
  const [size, setSize] = useState<ThumbnailSize>(() => getThumbnailSize())

  useEffect(() => {
    const onResize = () => setSize(getThumbnailSize())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return size
}

function getThumbnailSize(): ThumbnailSize {
  if (window.innerWidth >= 1025) return 'large'
  if (window.innerWidth >= 768) return 'medium'
  return 'small'
}
