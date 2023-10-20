import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import Font from '../constants/Font'

const button = ({name,onClick}) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={onClick}>
        <Text style={{fontFamily: Font['poppins-regular'],color:Colors.white,fontSize:17}}>{name}</Text>
    </TouchableOpacity>
  )
}

export default button

const styles = StyleSheet.create({
    btn:{
        width:"80%",
        height: 45,
        backgroundColor:Colors.primary,
        alignSelf:"center",
        borderRadius: 8,
        position:"absolute",
        bottom: "4%",
        alignItems:"center",
        justifyContent:"center"
    }
})