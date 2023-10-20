import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Font from '../constants/Font'
import Colors from '../constants/Colors'

const NotificationComponent = ({img,username,notif_text,img_event}) => {

    const [modal,setShowModal] = React.useState(false)

    const handleTap = () => {
        alert("hello les gens")
        setShowModal(true)

    }

  return (
    <View style={{
        width: "100%",
        height: 80,
        justifyContent:"space-between",
        flexDirection: "row",
        alignItems:"center",
        paddingHorizontal: 8,
        marginTop: 2,
        marginBottom: 0 
    }} onTouchStart={() => handleTap()}>
      <ImageBackground source={{uri : img}} style={{
        width: 40,
        aspectRatio: 1,
        borderRadius: 9999,
        overflow: 'hidden',
      }}/>
      <View style={{
        width: "70%",
        height: "100%",
        justifyContent:"center"
      }}>
            <Text style={{
                fontFamily: Font['mulish-bold'],
                fontSize: 14,
                color: Colors.white
            }}>{username}</Text>
            <Text style={{
                fontFamily: Font['mulish-regular'],
                fontSize: 14,
                color: "#ffffff50"
            }}>{notif_text}</Text>
      </View>
      <ImageBackground source={{uri : img_event}} style={{
        width: 40,
        height: 50,
        borderRadius: 3,
        overflow: 'hidden',
      }}/>
    </View>
  )
}

export default NotificationComponent

const styles = StyleSheet.create({

})