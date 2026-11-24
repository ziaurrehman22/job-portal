import Sidebar from './Dashboard/sidebar'
import Dashboard from './components/dashboard';
import Addjob from './components/Addjob';
import MyApplication from './components/myApplication';
import Statistics from './components/Statistics';
import Settings from './components/Settings';
import { Route,  Routes } from "react-router";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/addjob' element={<Addjob />}/>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/myapplication' element={<MyApplication />} />
        <Route path='/statistics' element={<Statistics />} />
        <Route path='/Settings' element={<Settings />} />
      </Routes>
    </div>
  )
}

export default App