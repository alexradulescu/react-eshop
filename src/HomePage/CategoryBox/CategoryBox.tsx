import React, { FC } from 'react'

interface Props {
  title: string
  subTitle: string
  imageSrc?: string
  className?: string
}

export const CategoryBox: FC<Props> = ({
  title,
  subTitle,
  className,
  imageSrc = 'https://images.unsplash.com/photo-1581474057313-b2c28d95ea9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
}) => (
  <div className={className}>
    <div className={`card mb-5 `}>
      <img src={imageSrc} className='card-img' alt='' />
      <div className='card-img-overlay text-white'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{subTitle}</p>
      </div>
    </div>
  </div>
)
