import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import EditProfile from '../screen_event/EditProfile';
import ShowYourPost from '../screen_event/ShowYourPost';

const Tab = createMaterialTopTabNavigator();

export default function TopBarNavigatio() {
  return (
      <Tab.Navigator
        initialRouteName="ShowMyPost"
        screenOptions={{
          tabBarActiveTintColor: Colors.black,
          tabBarLabelStyle: { fontSize: 17, textTransform: "capitalize" },
          tabBarStyle: { backgroundColor: Colors.white, },
          tabBarInactiveTintColor: "#00000070",
          tabBarIndicatorStyle: {
            backgroundColor: Colors.black,
            
          },
          tabBarIndicatorContainerStyle:{
            backgroundColor:Colors.white
          },
        

        }}
      >
        <Tab.Screen
          name="ShowMyPost"
          component={ShowYourPost}
          options={{ tabBarIcon: ({focused = true }) => <Ionicons name='grid-outline' size={20} color={ focused ? "#000" : "#00000040"} />,
          tabBarShowLabel: false
        }
        }
        />
        <Tab.Screen
          name="EditProfile"
          component={EditProfile}
          options={{ tabBarIcon: ({focused = true }) => <Ionicons name='person-outline' size={20} color={ focused ? "#000" : "#00000040"} />,
          tabBarShowLabel: false}
        }
        />
      </Tab.Navigator>
  );
}