import React, { useEffect, useState } from 'react';
import TwitRouter from 'components/Router';
import { authService } from 'fbase';
import 'styles/Styles.css';

function App() {

  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if(user) {
        setIsLoggedIn(true);
        setUserObj({
            displayName : user.displayName,
            uid: user.uid,
            updateProfile : (args) => user.updateProfile(args)
        });
      } else {
        setIsLoggedIn(false)
        setUserObj({
          displayName: ""
        });
      }
      setInit(true);
    })
  }, []);
  
  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName : user.displayName,
      uid: user.uid,
      updateProfile : (args) => user.updateProfile(args)
    });
  }

  return (
    <>
      {init ? (
        <TwitRouter
          isLoggedIn={isLoggedIn}
          userObj={userObj}
          refreshUser={refreshUser}
        />
       ) : (
        <div className="init">
          <span className="init_txt">Initializing...</span>
        </div>
       )
       }
      <footer>&copy; {new Date().getFullYear()} Cwitter</footer>
    </>
  );
  
}

export default App;
