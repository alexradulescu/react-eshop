import React from 'react'

import { CategoryBox } from './CategoryBox'

const categories = [
  {
    title: 'Ships',
    subTitle: 'From Earth to Mars and back',
    imageSrc:
      'https://images.unsplash.com/photo-1501532358732-8b50b34df1c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
  },
  {
    title: 'Costumes',
    subTitle: 'Cooler than Star Trek',
    imageSrc:
      'https://images.unsplash.com/photo-1579935110464-fcd041be62d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
  },
  {
    title: 'Tech',
    subTitle: 'You never have enough tech',
    imageSrc:
      'https://images.unsplash.com/photo-1504894577131-1ec09a4bc15b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
  },
  {
    title: 'People',
    subTitle: 'Company is most important',
    imageSrc:
      'https://images.unsplash.com/photo-1550479023-2a811e19dfd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
  },
  {
    title: 'A.I.',
    subTitle: 'Always there for you',
    imageSrc:
      'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
  }
]

export const HomePage = () => (
  <>
    <header className='mb-5'>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <a className='navbar-brand' href='#'>
          <span className='text-primary'>Space</span> Shop
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarDark'
          aria-controls='navbarDark'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarDark'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item active'>
              <a className='nav-link' href='#'>
                Home <span className='sr-only'>(current)</span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Cart
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>

    <main className='container'>
      <div className='row'>
        {categories.map((category) => (
          <CategoryBox
            {...category}
            key={category.title}
            className='col-sm-4'
          />
        ))}
      </div>
    </main>
  </>
)
