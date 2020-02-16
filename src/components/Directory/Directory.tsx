import React, { FC } from 'react'

import { DirectoryItem } from '../DirectoryItem'
import { sections } from './mockdata'

export const Directory: FC = () => {
  return (
    <>
      {sections.map(({ title, id, imageUrl, linkUrl, size }) => (
        <DirectoryItem key={id} title={title} imageUrl={imageUrl} linkUrl={linkUrl} size={size} />
      ))}
    </>
  )
}
