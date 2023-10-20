import { StyleSheet, Text, View,TextInput } from 'react-native'
import React , {useState} from 'react'
import Font from '../constants/Font'
import Colors from '../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import SelectDropdown from 'react-native-select-dropdown'

const BlockInput = ({label,type,placeholder,value,onChangeText,secureTextEntry,keyboardType,isLight,isTextArea,isDropdown,dataDropdown,dropHolder}) => {

    const [show ,setShow] = useState(true)

    const styles = StyleSheet.create({
      input:{
          width:"94%",
          height: isTextArea ? 70 : "100%",
          fontSize: 14,
          fontFamily:Font['mulish-regular'],
          color: isLight? Colors.white : Colors.black
      }
  })

  return (
    <View style={{
        width: "90%",
        alignSelf:"center",
        marginBottom:15
    }}>
      <Text style={{
        fontSize: 15,
        fontFamily:Font['mulish-regular'],
        color: isLight ? "#ffffff70" : "#00000090",
        marginBottom: 4
    }}>{label}</Text>
      <View style={{
        width:"100%",
        borderWidth: 1,
        borderColor: isLight ? "#ffffff40" : "#00000040",
        borderRadius: 7,
        minHeight: isTextArea ? 70 : 40,
        maxHeight:"auto",
        paddingHorizontal: 10,
        justifyContent:"space-between",
        flexDirection: "row",
        alignItems:"center"
      }}>
         
             <TextInput placeholder={placeholder} style={styles.input} secureTextEntry={!show ? false : secureTextEntry} selectionColor={isLight ? Colors.white : Colors.event_primary} value={value} onChangeText={onChangeText} keyboardType={keyboardType}
          placeholderTextColor={isLight ? '#ffffff50' : '#00000040'}
          
        />
        
        {type != "password" ? (<></>) : (<Ionicons name={ show ? 'eye' : "eye-off"} color={Colors.white} size={24} onPress={() => setShow(!show)}/>)}
          
        
      </View>
    </View>
  )
}

export default BlockInput

