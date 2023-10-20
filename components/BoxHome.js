import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import Font from '../constants/Font'
import { Ionicons } from '@expo/vector-icons'


const BoxHome = ({ name, data2, isLight ,isActivity,times}) => {


    return (
        <View style={{
            width: "45%",
            height: 120,
            backgroundColor: isLight ? Colors.light : Colors.secondary,
            borderRadius: 10,

        }}>
            <View style={{
                paddingLeft: 10,
                paddingTop: 9
            }}>
                <Text style={{
                    fontFamily: Font['poppins-regular'],
                    fontSize: 12,
                    color: isLight ? Colors.white : Colors.black
                }}>{name}</Text>
                <Text style={{
                    fontFamily: Font['poppins-bold'],
                    fontSize: 12,
                    color:isLight ? "#ffffff50" : "#00000050",
                    marginBottom: 3
                }}>{data2}</Text>
                {
                    isActivity ? (
                        <Text style={{fontFamily:Font['poppins-semiBold'],fontSize: 25,textAlign:"center",color: isLight ?Colors.white : Colors.black}}>{times}</Text>
                    ) : <Ionicons name={isLight ? 'pulse-outline' : 'radio-button-on-outline'} size={55} color={isLight ? "red" : Colors.light} style={{alignSelf:"center"}} />
                }
                
            </View>


        </View>
    )
}

export default BoxHome
