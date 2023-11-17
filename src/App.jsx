import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Tabs from './components/Tabs'
import UserRegistration from './components/UserRegistration'
import UserDataTable from './components/UserDataTable'

function App() {

  const [openTab, setOpenTab] = useState(1);

  return (
    <>
      <Header />
      <Tabs openTab={openTab} setOpenTab={setOpenTab}/>
      {openTab === 1 && <UserDataTable />}
      {openTab === 2 && <UserRegistration />}
    </>
  )
}

export default App
