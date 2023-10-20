import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import Font from '../constants/Font'

const Profil = () => {
  return (
   <SafeAreaView style={{
        flex : 1,
        backgroundColor: Colors.black,
        fontFamily : Font['lionel-regular']
   }}>
    <Text style={{
        fontFamily: Font['lionel-regular'],
        color : Colors.white,
        fontSize : 20
    }}>Sendylo</Text>

   </SafeAreaView>
  )
}

export default Profil

const styles = StyleSheet.create({})