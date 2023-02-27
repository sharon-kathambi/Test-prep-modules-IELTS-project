import { useState } from 'react';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Dashboard from './pages/dashboard/Dashboard';
import Sidebar from './components/global/sidebar/Sidebar';
import Topbar from './components/global/topbar/Topbar';
import { Route, Routes } from 'react-router-dom';
import Team from './pages/team/Team';
import Students from './pages/students/Students';
import Form from './pages/form/Form';
import Calendar from './pages/calendar/Calendar';

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar}/>
          <main className='content'>
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path='/' element={ <Dashboard />}/>
              <Route path='/team' element={ <Team /> }/>
              <Route path='/students' element={ <Students />}/>
              <Route path='/form' element={ <Form />} />
              <Route path='/calendar' element= { <Calendar />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
