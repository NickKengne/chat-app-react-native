import React, { useState, useEffect } from 'react';
import NavigationNotAuth from './NavigationNotAuth';
import fonts from './config/fonts'
import { useFonts } from "expo-font"
import UserContext from './context/UserContext';
import Login from './screen/Login';
import Toast from 'react-native-toast-message';
import { getData } from './utils/storage';


export default function App() {
  const { fontLoaded } = useFonts(fonts)
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);


  useEffect(() => {
    getData("user").then((res) => {
      setUser(res);
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading);
    }, 2000);
  }, []);

  return loading ? <></> : (
    <React.Fragment>
      <UserContext.Provider value={{ user, setUser }}>
        {
          user ? (
            <NavigationNotAuth />
          )
            : <Login />
        }
      </UserContext.Provider>
      <Toast />
    </React.Fragment>


  )


}

