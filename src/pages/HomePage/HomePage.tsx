import React from 'react'

import { Directory, Header } from '../../components'

export const HomePage = () => (
  <>
    <Header />

    <main className="container">
      <div className="row">
        <Directory />
      </div>
    </main>
  </>
)
