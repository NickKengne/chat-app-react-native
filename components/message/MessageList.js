import { View, Text } from 'react-native';
import React, { useContext, useState } from 'react';
import Font from '../../constants/Font';
import Colors from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import UserContext from '../../context/UserContext';
import { convertTime } from '../../utils/function';


export const timed = () => {
  // Créer un nouvel objet Date avec le timestamp donné

  var date = new Date();
  // Obtenir les composants de l'heure
  var heures = date.getHours();
  var minutes = date.getMinutes();
  var secondes = date.getSeconds();

  // Formater l'heure
  var heureFormattee = heures.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0')

  return heureFormattee
}

const MessageList = ({ data }) => {


  return (
      data?.map((item, index) => (
        <View key={index} style={{ marginVertical: 4,width: "97%",alignSelf:"center"}}>
          {(item.admin_id || item.teacher_id) == 1 ? (
            <View style={{ padding: 1,width:"auto", maxWidth: "100%" ,flexWrap:"wrap",position:"relative",gap: 3}}>
              <Text style={{ fontSize: 12, fontFamily: Font['mulish-regular'], color: Colors.white,  paddingLeft: 0, marginBottom: 0,width: "80%" }}>{item.admin_id !== null ? "Admin" : item.name}</Text>
              <Text style={{ fontSize: 15, fontFamily: Font['mulish-regular'], color: Colors.white,flexWrap:"wrap",borderLeftWidth: 3,borderLeftColor: Colors.secondary,padding :9,width: "100%",textAlign:"justify",backgroundColor:"#ffffff10" }}>{item.message}</Text>
              <Text style={{ fontSize: 9, fontFamily: Font['mulish-regular'], color: 'rgba(0,0,0,0.3)', textAlign: "right" }}>{convertTime(item.timestamp * 1)}</Text>
            </View>
          ) : (
            <View style={{padding: 1, width: "95%",flexWrap:"wrap", alignSelf:"center",gap: 3}}>
              <Text style={{ fontSize: 12, fontFamily: Font['mulish-regular'], color: Colors.white, paddingLeft: 1,backgroundColor: "#ffffff10", marginBottom: 0,width: "100%"  }}>{"Me"}</Text>
              <Text style={{ fontSize: 15, fontFamily: Font['mulish-regular'], color: Colors.white,flexWrap:"wrap",borderLeftWidth: 3,borderLeftColor: Colors.primary,padding :9,width: "100%",textAlign:"justify" }}>{item.message}</Text>
              <Text style={{ fontSize: 9, fontFamily: Font['mulish-regular'], color: 'rgba(255,255,255,0.3)', textAlign: "right" }}>{convertTime(item.timestamp * 1)}<Ionicons name='checkmark-done' size={13} color={Colors.white} /></Text>
            </View>

          )}
        </View>
      ))
  );
};

export default MessageList;
