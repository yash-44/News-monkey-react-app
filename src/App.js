import './App.css';
import React, {useState} from 'react' // rce
import Navbar from './componetns/Navbar';
import News from './componetns/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = ()=> {
  // const apiKey = process.env.REACT_APP_NEWS_API
  const apiKey = "557a4842205b483fa30c635a98885659"
  const pagesize = 6
  const [progress, setProgress] = useState(0)

    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
          height= {5}
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route exeact path="/" element={<News setProgress={setProgress} key="generalnext" apiKey={apiKey}   pagesize={pagesize} country="in" category="general" badgeColor="primary" />}> </Route>
            <Route exeact path="/business" element={<News setProgress={setProgress} key="business" apiKey={apiKey}   pagesize={pagesize} country="in" category="business" badgeColor="dark" />}> </Route>
            <Route exeact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" apiKey={apiKey}   pagesize={pagesize} country="in" category="entertainment" badgeColor="info" />}> </Route>
            <Route exeact path="/general" element={<News setProgress={setProgress} key="general" apiKey={apiKey}   pagesize={pagesize} country="in" category="general" badgeColor="primary" />}> </Route>
            <Route exeact path="/health" element={<News setProgress={setProgress} key="health" apiKey={apiKey}   pagesize={pagesize} country="in" category="health" badgeColor="success" />}> </Route>
            <Route exeact path="/science" element={<News setProgress={setProgress} key="science" apiKey={apiKey}   pagesize={pagesize} country="in" category="science" badgeColor="danger" />}> </Route>
            <Route exeact path="/sports" element={<News setProgress={setProgress} key="sports" apiKey={apiKey}   pagesize={pagesize} country="in" category="sports" badgeColor="secondary" />}> </Route>
            <Route exeact path="/technology" element={<News setProgress={setProgress} key="technology" apiKey={apiKey}   pagesize={pagesize} country="in" category="technology" badgeColor="warning" />}> </Route>
          </Routes>
        </Router>
      </div>
    )
  
}

export default App

