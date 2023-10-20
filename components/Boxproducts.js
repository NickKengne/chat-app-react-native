import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import Font from '../constants/Font'

const Boxproducts = () => {
  return (
    <TouchableOpacity style={styles.container}>
        <View style={{
            justifyContent:"center",
            alignItems:"center",
            width:27,
            aspectRatio:1,
            backgroundColor:Colors.primary_one,
            position:"absolute",
            right:0,
            borderTopRightRadius:12
        }}><Ionicons name='heart-outline' color={Colors.white} size={17}/></View>
        <ImageBackground source={require('../assets/image/casque.png')} style={{
            width: 100,
            aspectRatio:1,
            alignSelf:"center",
            
        }}/>
        <View style={{
            width:"95%",
            height:"26%",
            position:"absolute",
            bottom: 9,
            alignSelf:"center",
            justifyContent:"space-between"
        }}>
            <Text style={{fontFamily:Font['poppins-bold'],fontSize:13}}>Wireless Hearphones</Text>
            <View style={{
                flexDirection:"row",
                justifyContent:"space-between",
                alignItems:"center",
                width:"100%"
            }}>
                <Text style={{fontFamily:Font['poppins-semiBold'],fontSize:12}}>$120.00</Text>
                <View style={{flexDirection:"row",width: 85,justifyContent:"space-between"}}>
                    <View style={{width:20,aspectRatio:1,borderRadius:999,backgroundColor:"blue"}}></View>
                    <View style={{width:20,aspectRatio:1,borderRadius:999,backgroundColor:Colors.primary_one}}></View>
                    <View style={{width:20,aspectRatio:1,borderRadius:999,backgroundColor:Colors.secondary}}></View>
                    <View style={{width:20,aspectRatio:1,borderRadius:999,backgroundColor:"pink"}}></View>
                </View>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default Boxproducts

const styles = StyleSheet.create({
    container:{
        width: "47%",
        height:160,
        backgroundColor:Colors.tertiary_one,
        borderRadius: 12,
        marginBottom: 14,
        paddingTop: 9
    }
})