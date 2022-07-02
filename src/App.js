import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Headers/Header'
import Login from './Components/Login/Login';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './Actions/User';
import { Home } from './Components/Home/Home';
import Account from './Components/Account/Account';
import NewPost from './Components/NewPost/NewPost';
// import Construction from './Components/Construction/Construction';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Hello")
    dispatch(loadUser());
  }, [dispatch]); // // 

  const { isAuthenticated } = useSelector((state) => state.user);


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />
        <Route path="/userAccount" element={isAuthenticated ? <Account /> : <Login />} />
        <Route path="/ceratePost" element={isAuthenticated ? <NewPost /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;
