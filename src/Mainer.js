import React, { useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes, useParams } from 'react-router-dom'
import UserPageWrapper from './components/IndiPage'


const Mainer = () => {

    const Egg = () => {
        return(
            <h1>egg</h1>
        )
    }

    const Cringe = () => {
        return(
            <h1>cringe</h1>
        )
    }

    const Wosa = () => {
        return(
            <h1>wosa</h1>
        )
    }

    const User = () => (
        <div>
          <header className="App-header">
            <h1>you made it</h1>
          </header>
        </div>
      );

      const wowsa =[{
        title: 'egg',
        largeFry:'of course'
}]
  return (
    <>
      <Router>
        <Routes>
        <Route index element={<Egg/>}/>
            <Route path=":edgg" element={<UserPageWrapper />} />
        <Route path='user' element={<User />}>
        </Route>
        <Route path="*" element={<Wosa />} />
        </Routes>
      </Router>
    </>
  )
}

export default Mainer
