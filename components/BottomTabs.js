import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import Font from '../constants/Font';
import Trajets from '../screen/Trajets';
import Profil from '../screen/Profil';


const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.secondary,
                tabBarStyle:{
                    borderTopWidth: 0.4,
                    borderTopColor: "#00000040",
                    backgroundColor:Colors.black,
                    paddingBottom : 2
                },
                tabBarLabelStyle:{
                    fontSize: 12,
                    fontFamily: Font['mulish-regular']
                }
            }}
        >
            <Tab.Screen name="Trajets" component={Trajets}
                options={{
                    tabBarLabel: "Chats",
                    tabBarIcon: ({ focused = true }) => (
                        <Ionicons
                            name={'chatbubble-outline'}
                            color={focused ? Colors.secondary : "#ffffff30"}
                            size={22}

                        />
                    ),
                }} />
            <Tab.Screen name="Profil" component={Profil}
                options={{
                    tabBarLabel: "Me",
                    tabBarIcon: ({ focused = true }) => (
                        <Ionicons
                            name={focused ? "person-outline" : "person-outline"}
                            color={focused ? Colors.secondary : "#ffffff30"}
                            size={22}

                        />
                    ),
                }} />
        </Tab.Navigator>
    );
}