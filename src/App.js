import React, { useEffect } from 'react';
import './App.css';
import WebcamCapture from './WebcamCapture';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Preview from './Preview';
import Chats from './Chats';
import ChatView from './ChatView';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/appSlice';
import Login from './Login';
import { auth } from './firebase';
import Logo from './logo.png'
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
        dispatch(login(
          {
            usernamme:authUser.displayName,
            profilePic:authUser.photoURL,
            id:authUser.uid
          }
        ))
      }else{
        dispatch(logout())
      }
    })
  },[])

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ):(
          <>
            <img src={Logo} className="app__logo" alt="" />
            <div className="app__body" >
              <div className="app__bodyBackground">
                <Switch>
                  <Route exact={true} path="/" >
                    <WebcamCapture />
                  </Route>
                  <Route  path="/preview" >
                    <Preview />
                  </Route>
                  <Route  path="/chats/view" >
                    <ChatView />
                  </Route>
                  <Route  path="/chats" >
                    <Chats />
                  </Route>
                </Switch>
              </div>
            </div>
          </>
          )}
        </Router>
      </div>
    
  );
}

export default App;
