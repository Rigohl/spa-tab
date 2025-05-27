import React from 'react'
import Kanban from './views/Kanban'
import Estadisticas from './views/Estadisticas'
import './App.css'

function App() {
  const [vista, setVista] = React.useState('kanban')

  return (
    <div>
      <nav>
        <button onClick={() => setVista('kanban')}>CRM</button>
        <button onClick={() => setVista('stats')}>Estadísticas</button>
      </nav>
      {vista === 'kanban' ? <Kanban /> : <Estadisticas />}
    </div>
  )
}

export default App
