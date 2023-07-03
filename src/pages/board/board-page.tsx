import React from 'react'

import { useParams } from 'react-router'

export const BoardPage = () => {
  const { id } = useParams()
  return <div>{id}</div>
}
