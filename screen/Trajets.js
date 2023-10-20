import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useContext } from 'react'
import Colors from '../constants/Colors'
import Font from '../constants/Font'
import { Ionicons } from '@expo/vector-icons'
import PostProducts from '../components/PostProducts'
import BlockInput from '../components/BlockInput'
import UserContext from '../context/UserContext'
import { removeData } from '../utils/storage'
import BoxConversation from '../components/BoxConversation'



const Trajets = ({ navigation }) => {
  const { user, setUser } = useContext(UserContext)
  console.log(user)
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: Colors.black,
      //paddingTop: 20,
      paddingHorizontal: 8
    }}>
      <View style={{
        width: "98%",
        height: 80,
        backgroundColor: Colors.black,
        borderRadius: 9,
        justifyContent: "space-between",
        alignSelf: "center",
        flexDirection: "row",
        marginBottom: 10,
        marginTop: 20

      }}>
        <View style={{
          width: "98%",
          height: "60%",
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "center",
        }}>
          <Image source={{ uri: user[0]?.avatar }} style={{
            width: 50,
            aspectRatio: 1,
            borderRadius: 9999,
            overflow: "hidden",
            borderWidth: 2,
            borderColor: Colors.secondary
          }} />
          <View style={{
            width: "70%",
            height: '100%',
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            marginLeft: 9
          }}>
            <Text style={{
              fontFamily: Font['mulish-bold'],
              color: Colors.white,
              fontSize: 18
            }}>Hi , 👋 {user[0]?.username}</Text>
            <Text style={{
              fontFamily: Font['mulish-regular'],
              fontSize: 11,
              flexWrap: "wrap",
              width: "100%",
              color: "#ffffff80"

            }}>{user[0]?.bio.length > 30 ? user[0]?.bio.slice(0, 25) + "....." : user[0]?.bio}</Text>
          </View>
          <TouchableOpacity style={{
            position: "absolute",
            right: 0,
            width: 40,
            aspectRatio: 1,
            backgroundColor: Colors.white,
            borderRadius: 9999,
            alignItems: "center",
            justifyContent: "center"
          }}>
            <Ionicons name='notifications-outline' size={28} color={Colors.black} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ width: "100%", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.h3}>Discussions</Text>
        <TouchableOpacity style={{
          position: "absolute",
          right: 10,
        }}>
          <Ionicons name='search-outline' size={18} color={Colors.white} />
        </TouchableOpacity>
      </View>
      <ScrollView overScrollMode='never'>
        <BoxConversation onPress={() => navigation.navigate('Chats')} />
      </ScrollView>
      {/* <PostProducts/> */}
      <TouchableOpacity onPress={() => {
        setUser(null)
        removeData('user')
      }} style={{
        position: "absolute",
        bottom: 25,
        right: 25,
        width: 50,
        aspectRatio: 1,
        borderRadius: 9999,
        backgroundColor: Colors.primary,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Ionicons name='chatbox' size={28} color={Colors.white} />

      </TouchableOpacity>

    </SafeAreaView>
  )
}

export default Trajets

const styles = StyleSheet.create({
  h3: {
    fontFamily: Font['mulish-regular'],
    color: Colors.white,
    fontSize: 16,
    width: "96%",
    alignSelf: "center",
    marginBottom: 14
  },
})