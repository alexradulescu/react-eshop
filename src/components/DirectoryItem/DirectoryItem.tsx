import React, { FC } from 'react'

enum SIZE {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large'
}

interface Props {
  title: string
  subTitle?: string
  imageUrl: string
  size?: SIZE | string
  linkUrl: string
}

export const DirectoryItem: FC<Props> = ({ title, subTitle, size, imageUrl, linkUrl }) => {
  const getClassName = () => {
    if (size && size === SIZE.LARGE) {
      return 'col-sm-6'
    }
    return 'col-sm-4'
  }

  return (
    <div className={getClassName()}>
      <a className={`card mb-5 `} href={linkUrl}>
        <img src={imageUrl} className="card-img" alt="" />
        <div className="card-img-overlay text-white">
          <h5 className="card-title">{title.toUpperCase()}</h5>
          {subTitle && <p className="card-text">{subTitle}</p>}
        </div>
      </a>
    </div>
  )
}
