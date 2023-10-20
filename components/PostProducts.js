import { StyleSheet, Text, View,ImageBackground, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import Font from '../constants/Font'
import { Ionicons } from '@expo/vector-icons'

const PostProducts = () => {
    return (
        <TouchableOpacity style={styles.box}>
            <View style={{
                width :"90%",
                marginLeft : 10,
                marginTop: 4,
                flexDirection :"row",
                alignItems: 'center',
            }}>
                <Text style={{
                    fontFamily: Font['lionel-regular'],
                    color: Colors.tertiary,
                    fontSize: 16,
                    marginRight :4
                }}>Billet d'avion verifié</Text>
                <View style={{
                    width: 13,
                height :13,
                    borderRadius: 999999,
                    borderColor:Colors.tertiary,
                    borderWidth :1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Ionicons name='checkmark' color={Colors.tertiary} size={10}/>
                </View>
            </View>


            <View style={{
                width : "96%",
                height :"62%",
                alignSelf: 'center',
                flexDirection:"row",
                marginTop :4
            }}>
                <ImageBackground source={require("../assets/image/trajet.png")} style={{
                    width :16,
                    height  : 100
                }}/>
                <View style={{
                    justifyContent: 'center',
                    gap:5
                    
                }}>
                    <View style={{
                        marginLeft: 10
                    }}>
                        <Text style={{
                            fontFamily: Font['lionel-regular'],
                            fontSize: 25,
                            color: Colors.white
                        }}>Yaoundé  <Text style={{
                            fontFamily: Font['lionel-regular'],
                            fontSize: 20,
                            color: Colors.white
                        }}>🇨🇲 </Text></Text>
                        <Text style={{
                            fontFamily: Font['lionel-regular'],
                            fontSize: 16,
                            color: "#ffffff70",
                        }}>Cameroon</Text>
                    </View>
                    <View style={{
                        marginLeft: 10
                    }}>
                    <Text style={{
                            fontFamily: Font['lionel-regular'],
                            fontSize: 25,
                            color: Colors.white
                        }}>Bruxelles  <Text style={{
                            fontFamily: Font['lionel-regular'],
                            fontSize: 20,
                            color: Colors.white
                        }}>🇧🇪 </Text></Text>
                        <Text style={{
                            fontFamily: Font['lionel-regular'],
                            fontSize: 16,
                            color: "#ffffff70",
                        }}>Belgique</Text>
                    </View>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems:"center",
                    position:"absolute",
                    right: 0
                }}>
                   
                        <Text style={{
                            fontFamily: Font['lionel-regular'],
                            fontSize: 45,
                            color: Colors.white,
                            
                        }}>27</Text>
                        <Text style={{
                            fontFamily: Font['lionel-regular'],
                            fontSize: 21,
                            color: Colors.secondary,
                           
                        }}>Juillet</Text>
                        <Text style={{
                            fontFamily: Font['lionel-regular'],
                            fontSize: 18,
                            color: Colors.white,
                           
                        }}>2055</Text>
                  
                </View>
                

            </View>




            <View style={{
                alignSelf: 'center',
                width : "95%",
                flexDirection: "row"
            }}>
                <ImageBackground source={require("../assets/image/user.png")} style={{
                    width :35,
                   aspectRatio : 1,
                    borderRadius: 9999,
                    overflow:"hidden",
                    marginRight: 7
                }}/>
                <View style={{
                    width :"97%",
                    justifyContent:"space-between",
                    alignItems: 'center',
                    flexDirection:"row"
                }}>
                    <View style={{
                        width :"50%",
                        gap: 2,
                    }}>
                        <Text style={{
                            fontFamily: Font['lionel-regular'],
                            color: Colors.white,
                            fontSize :16
                        }}>Nick <Image source={require("../assets/image/certified.png")} style={{
                            width :14,
                           height : 14,
                            overflow:"hidden",
                            marginRight: 7
                        }}/></Text>
                        <Text style={{
                            fontFamily: Font['lionel-regular'],
                            color: "#ffffff70",
                            fontSize :16
                        }}>Kengne</Text>
                    </View>
                    <View style={{
                        alignItems: 'flex-end',
                        gap: 2,
                        position : "absolute",
                        right : 30
                    }}>
                        <Text style={{
                            fontFamily: Font['lionel-regular'],
                            color: Colors.tertiary,
                            fontSize :16
                        }}>135.99 &euro;</Text>
                        <Text style={{
                            fontFamily: Font['lionel-regular'],
                            color: Colors.white,
                            fontSize :16
                        }}>Pour <Text style={{color: Colors.secondary}}>23</Text> kg</Text>
                    </View>
                </View>

            </View>

        </TouchableOpacity>
    )
}

export default PostProducts

const styles = StyleSheet.create({
    box: {
        width: "97%",
        height: 195,
        backgroundColor: Colors.primary,
        borderRadius: 6,
        marginTop: 4,
        marginBottom: 4,
        alignSelf: "center"
    }
})