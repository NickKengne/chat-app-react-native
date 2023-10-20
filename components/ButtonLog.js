import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import Font from '../constants/Font'

const ButtonLog = ({name,onClick,color, isLight}) => {
  return (
    <TouchableOpacity style={{
      width:"70%",
      height: 40,
      backgroundColor: color ? color : Colors.primary,
      alignSelf:"center",
      borderRadius: 8,
      alignItems:"center",
      justifyContent:"center",
      marginBottom: 30,
      marginTop: 10
    }} onPress={onClick}>
        <Text style={{fontFamily: Font['mulish-regular'],color: !isLight ? Colors.white : Colors.black,fontSize:15}}>{name}</Text>
    </TouchableOpacity>
  )
}

export default ButtonLog

const styles = StyleSheet.create({
    btn:{
        
    }
})