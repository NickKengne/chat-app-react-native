import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Image, TouchableOpacity, Modal } from 'react-native';
import Colors from '../constants/Colors';

const FullScreenImageModal = ({ visible, imageUrl, onClose,onChangeProfile }) => {
  return (
    <Modal isVisible={visible} onBackdropPress={onClose}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor:Colors.black}}>
        <Image source={{ uri: imageUrl }} style={{ width: '100%', height: '100%' }} resizeMode="contain" />
        <TouchableOpacity onPress={onClose} style={{ position: 'absolute', top: 20, right: 20 }}>
          {/* Ajoutez ici un bouton pour fermer l'image en plein écran */}
          <Ionicons name='close' size={35} color={Colors.white}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={onChangeProfile} style={{ position: 'absolute', top: 20, left: 20 }}>
          {/* Ajoutez ici un bouton pour fermer l'image en plein écran */}
          <Ionicons name='camera-outline' size={35} color={Colors.white}/>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default FullScreenImageModal;

export function convertTime(timestamp) {
  // Convertir le timestamp en objet Date
  const date = new Date(timestamp);

  // Obtenir les heures et les minutes de l'objet Date
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Ajouter un zéro devant les heures et les minutes si nécessaire
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');

  // Concaténer les heures et les minutes au format "hh:mm"
  const formattedTime = `${formattedHours}h${formattedMinutes}`;

  return formattedTime;
}

