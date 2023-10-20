import { View, Text } from 'react-native'
import React from 'react'
import Font from '../constants/Font'
import Colors from '../constants/Colors'

const Privacy = () => {
  return (
    <View style={{
        width:"70%",
        height:"auto",
        padding: 7,
        flexWrap:"wrap",
        flexDirection:"row",
        backgroundColor: Colors.secondary,
        justifyContent:"center",
        alignItems:"center",
        marginVertical: 16,
        borderRadius: 9,
        alignSelf:"center"
    }}>
      <Text style={{
        color:Colors.black,
        fontFamily: Font['mulish-regular'],
        fontSize: 9,
        textAlign:"center"
      }}>Message are ecrypted 🔑 . No one outside of this chat , not even ChatFriend 🎓 , can read to them. Tap to learn more .</Text>
    </View>
  )
}

export default Privacy