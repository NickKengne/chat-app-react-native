import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import Font from '../constants/Font'
import SendMessage from '../components/SendMessage'
import Privacy from '../components/Privacy'
import MessageList from '../components/message/MessageList'
import message from "../data/message"

const ConversationView = ({ navigation }) => {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: Colors.black
        }}>
            <SafeAreaView style={{
                width: "100%",
                height: 70,
                backgroundColor: Colors.primary_two,
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 12,
            }}>
                <TouchableOpacity style={{
                    flexDirection: "row",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 6
                }} onPress={() => navigation.pop()}>
                    <Ionicons name='arrow-back-outline' size={25} color={Colors.white} />
                    <ImageBackground source={require('../assets/image/user1.jpg')} style={{
                        width: 35,
                        aspectRatio: 1,
                        borderRadius: 9999,
                        overflow: 'hidden',
                        marginRight: 10,
                    }} />
                </TouchableOpacity>
                <View style={{

                }}>
                    <Text style={{
                        fontSize: 18,
                        color: Colors.white,
                        fontWeight: "100",
                        fontFamily: Font['mulish-regular']
                    }}>Dibrilain</Text>
                    <Text style={{
                        fontSize: 12,
                        color: "#ffffff40",
                        fontWeight: "100"
                    }}>En ligne</Text>
                </View>
                <View style={{
                    flexDirection: "row",
                    width: "35%",
                    justifyContent: "flex-end",
                    gap: 15,
                    height: 25,
                    position: "absolute",
                    right: 10
                }}>
                    <TouchableOpacity>
                        <Ionicons name='camera-outline' size={25} color={Colors.white} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name='ellipsis-vertical' size={25} color={Colors.white} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <ScrollView>
                <Privacy />
                <MessageList data={message} />
            </ScrollView>
            <SendMessage />

        </SafeAreaView>
    )
}

export default ConversationView

const styles = StyleSheet.create({})