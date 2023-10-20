import { createDrawerNavigator } from '@react-navigation/drawer';
import Status from '../screen_zap/Status';
import Home from '../screen_shop/Home';
import Chats from '../screen_zap/Chats';

const Drawer = createDrawerNavigator();

 export default function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Feed">
      <Drawer.Screen
        name="Status"
        component={Status}
        options={{ drawerLabel: 'Home' }}
      />
      <Drawer.Screen
        name="Notifications"
        component={Home}
        options={{ drawerLabel: 'Updates' }}
      />
      <Drawer.Screen
        name="Profile"
        component={Chats}
        options={{ drawerLabel: 'Profile' }}
      />
    </Drawer.Navigator>
  );
}