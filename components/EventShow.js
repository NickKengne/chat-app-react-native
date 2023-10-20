import { Dimensions, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import Font from '../constants/Font'
import { Ionicons } from '@expo/vector-icons'


const { height } = Dimensions.get('screen')
const EventShow = ({name, place, img, hours, price,day,onClick,isSearch,author,imgurl }) => {
    return (
        <View style={{
            width: "100%",
            height: height / 2.5,
            alignSelf: "center",
            //borderRadius: 12,
            backgroundColor: Colors.event_tertiary,
            marginBottom: 0

        }}>
            <View style={{
                width : "100%",
                height: 60,
                backgroundColor:Colors.black,
                flexDirection: "row",
                alignItems:"center",
                paddingHorizontal: 8
            }}>
                <View style={{
                    width: 40,
                    aspectRatio:1,
                    borderRadius: 999,
                    backgroundColor:Colors.white
                }}>
                     <ImageBackground source={{uri : imgurl}} style={{
                        width: "100%",
                        overflow: "hidden",
                        height:"100%",
                        borderRadius: 9999
                    }}/>
                    <ImageBackground source={require('../assets/image/certified.png')} style={{
                        width: 15,
                        position:"absolute",
                        bottom: 0,
                        right: -4,
                        overflow: "hidden",
                        aspectRatio:1,
                        borderRadius: 9999
                    }}/>

                </View>
                <View style={{
                    width: "70%",
                    height: 40,
                    paddingHorizontal: 10,
                    justifyContent:"center"
                }}>
                    <Text style={{
                        fontFamily: Font['mulish-regular'],
                        fontSize: 13,
                        color:Colors.white
                    }}>{author}</Text>
                    <Text style={{
                        fontFamily: Font['mulish-regular'],
                        fontSize: 10,
                        color:"#ffffff40"
                    }}><Ionicons name='earth-outline' size={10} color={"#ffffff40"}/> Publié il y'a 3 jours</Text>

                </View>

            </View>
            <ImageBackground source={img}
                style={{
                    width: "100%",
                    height: (height / 3.5) * 0.8,
                    //borderTopRightRadius: 12,
                    //borderTopLeftRadius: 12,
                    overflow: "hidden"
                }}
            />
            <View style={{
                width:30,
                aspectRatio:1,
                borderRadius: 9999,
                backgroundColor:Colors.event_secondary,
                position:"absolute",
                top: 46,
                right: 12,
                justifyContent:"center",
                alignItems:"center"
            }}>
                <Text style={{
                    textAlign:"center",
                    color:Colors.white,
                    fontSize: 10,
                    fontFamily:Font['mulish-bold']
                }}>{day.slice(0,6)}</Text>
            </View>
            <View style={{
                width: "100%",
                height: (height / 3.5) * 0.3,
                backgroundColor:isSearch? Colors.black : Colors.event_tertiary,
                //borderBottomLeftRadius: 12,
               // borderBottomRightRadius: 12,
                flexDirection: "row",
                paddingHorizontal: 7,
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <View style={{
                    width: "70%",
                    height: "50%",
                    justifyContent: "space-between"
                }}>
                    <Text style={{
                        fontFamily: Font['mulish-semiBold'],
                        color: Colors.white,
                        fontSize: 14
                    }}>{name}-{price}</Text>
                    <Text style={{
                        fontFamily: Font['mulish-regular'],
                        color: "#ffffff50",
                        fontSize: 12
                    }}>{place} - {hours}</Text>
                </View>

                <TouchableOpacity style={{
                    width: "26%",
                    height: 36,
                    backgroundColor: Colors.white,
                    borderRadius: 9999,
                    justifyContent: "center",
                    alignItems: "center"
                }}
                    onPress={onClick}
                >
                    <Text style={{
                        fontFamily: Font['mulish-bold'],
                        color: Colors.black
                    }}>
                        Buy ticket
                    </Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}

export default EventShow

const styles = StyleSheet.create({})