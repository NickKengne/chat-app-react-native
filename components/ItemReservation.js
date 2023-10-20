import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import Colors from '../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import Font from '../constants/Font'

const ItemReservation = ({name,icon}) => {
    const [color, setColor] = useState(false)

    return (
        <TouchableOpacity style={
            {
                width: "32%",
                height: 40,
                borderRadius: 99999,
                backgroundColor: color ? Colors.event_secondary : Colors.event_tertiary,
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                marginBottom: 5,
                paddingHorizontal: 8
            }
        } onPress={() => setColor(!color)}>
            <View style={{
                width: "34%",
                aspectRatio: 1,
                borderRadius: 9999,
                backgroundColor: Colors.white,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row"

            }}><Ionicons name={icon} size={22} color={Colors.event_secondary} /></View>
            <Text style={{
                color: Colors.white,
                fontSize: 14,
                fontFamily: Font['mulish-regular']
            }}>{name}</Text>
        </TouchableOpacity>
    )
}

export default ItemReservation
