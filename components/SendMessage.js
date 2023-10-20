import { View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useContext, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native'
import Colors from '../constants/Colors'
import Font from '../constants/Font'
import UserContext from '../context/UserContext'
import { postAxios } from '../utils/api'

const SendMessage = ({ receiver }) => {
    const [message, setMessage] = useState('')
    const { user, setUser } = useContext(UserContext)
    // const { messages, setMessages } = useContext(MessageContext)

    const postMessage = {
        "receiver_id": 1,
        "name": user.name + " " + user.surname,
        "message": message,
        // "timestamp": getTimeStamp(),
        "admin_id": user.type === "admin" ? user.id : null,
        "teacher_id": user.type === "teacher" ? user.id : null,
    }

    const sendText = () => {
        postAxios(`/add_chat`, postMessage)
            .then(res => {
                setMessage('')
                console.log(message)
            })
            .catch(error => console.log(error))

    }


    return (

        <View
            style={{
                width: '100%',
                backgroundColor: Colors.black,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 10,
                borderRadius: 10,
                maxHeight: 70,
                
            }}
        >
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} keyboardVerticalOffset={20} style={{ flex: 1 }}>
                <TextInput
                    selectionColor={Colors.primary}
                    placeholder='Ecrire un message'
                    style={{
                        fontFamily: Font['poppins-regular'],
                        fontSize: 14,
                        paddingVertical: 2,
                        backgroundColor: Colors.black,
                        marginVertical: 5,
                        paddingHorizontal: 4,
                        width: '90%',
                        height: 'auto',
                        color: Colors.white,
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                    placeholderTextColor={"#ffffff50"}
                    multiline={true}
                    value={message}
                    onChangeText={(text) => setMessage(text)}
                />
            </KeyboardAvoidingView>
            <TouchableOpacity
                style={{
                    width: 45,
                    aspectRatio: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: Colors.primary,
                    borderRadius: 25,
                    bottom: 5
                }}

            >
                <Ionicons name='send' size={20} color={'white'} />
            </TouchableOpacity>
        </View>

    )
}

export default SendMessage
