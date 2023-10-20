import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from "./constants/Colors";
import BottomTab from "./components/BottomTabs";
import Trajets from "./screen/Trajets";
import Profil from "./screen/Profil";
import ConversationView from "./screen/ConversationView";




export default function NavigationNotAuth() {

    const Stack = createNativeStackNavigator();

    // username , password, adresse email , phone


    return (
        <NavigationContainer>
            <StatusBar barStyle="light-content" backgroundColor={Colors.black} />
            <Stack.Navigator>
                <Stack.Screen
                    name="Tabs"
                    component={Trajets}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Profile"
                    component={Profil}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Chats"
                    component={ConversationView}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
