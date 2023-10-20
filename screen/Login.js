import React, { useState,useContext } from 'react';
import { SafeAreaView, ScrollView, ImageBackground, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Colors from '../constants/Colors';
import Font from '../constants/Font';
import BlockInput from '../components/BlockInput';
import ButtonLog from '../components/ButtonLog';
import Loader from '../utils/animations/Loader';
import Toast from 'react-native-toast-message';
import { postAxios } from '../utils/api';
import UserContext from '../context/UserContext';
import { storeData } from '../utils/storage';
const { height } = Dimensions.get('screen');


const Login = ({ navigation }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { user, setUser } = useContext(UserContext);


  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = () => {
    const { email, password } = formData;
    const form = new FormData()
    form.append('email', formData.email)
    form.append('password', formData.password)
    console.log(formData)
    if (email.trim() !== '' && password.trim() !== '') {
      postAxios('/login', formData)
        .then(res => {
          setUser(res.user);
          storeData('token', res.token);
          storeData('user', res.user);
        })
    }

    else {
      // Nom d'utilisateur invalide ou mot de passe invalide, afficher le message Toast
      Toast.show({
        type: 'error',
        position: 'top',
        text1: 'Error',
        text2: 'Error data , please check your entry',
        visibilityTime: 4000,
        autoHide: true,
        topOffset: 30,
      });
    }

  };

  const inputFields = [
    {
      name: 'email',
      label: 'Username',
      placeholder: 'Enter your username account',
    },
    {
      name: 'password',
      label: 'Password',
      placeholder: 'Tap your secret code',
      secureTextEntry: true,
      type: "password"
    },
  ];

  return (
    <SafeAreaView style={styles.container}>

      <Loader />
      <View style={{
        marginTop: 50
      }}></View>
      {inputFields.map((field, index) => (
        <BlockInput
          key={index}
          label={field.label}
          placeholder={field.placeholder}
          secureTextEntry={field.secureTextEntry}
          value={formData[field.name]}
          onChangeText={(text) => handleInputChange(field.name, text)}
          type={field.type}
          isLight={true}

        />
      ))}

      <ButtonLog color={Colors.white} name={'Sign In'} onClick={handleLogin} isLight={true} />


    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 26,
    color: Colors.white,
    fontFamily: Font['mulish-bold'],
  },
  subtitle: {
    fontFamily: Font['mulish-regular'],
    color: '#ffffff40',
  },
});
