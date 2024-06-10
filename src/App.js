import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateHome from './Components/createHome';
import Home from './Components/Home';
import Edit from './Components/edit';
import Widget from './Components/widget';
import Settings from './Components/settings';
import { MenuProvider } from './context/themecontext';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <MenuProvider>
        <Routes>
          <Route exact path='/' Component={CreateHome} />
          <Route exact path='/home' Component={Home} />
          <Route exact path='/projects' Component={CreateHome} />
          <Route exact path='/edit' Component={Edit} />
          <Route exact path='/widget' Component={Widget} />
          <Route exact path='/settings' Component={Settings} />
        </Routes>
      </MenuProvider>
    </BrowserRouter>

  )
}

export default App;
