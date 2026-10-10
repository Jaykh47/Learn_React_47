import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Bhupendra' link='https://images.unsplash.com/photo-1791121902526-37047a1b93f4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'/>
      <Card user='Future insaan' link='https://images.unsplash.com/photo-1791162552484-e5f9520fe0bc?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'/>
    </div>
  )
}

export default App
