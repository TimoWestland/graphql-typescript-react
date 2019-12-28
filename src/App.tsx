import './App.css'

import * as React from 'react'
import LaunchList from './components/LaunchList'
import LaunchProfile from './components/LaunchProfile'

const App: React.FC = () => {
  const [id, setId] = React.useState(42)

  const handleIdChange = React.useCallback((newId) => {
    setId(newId)
  }, [])

  return (
    <div className="app">
      <LaunchList onIdChange={handleIdChange} />
      <LaunchProfile id={id} />
    </div>
  )
}

export default App
