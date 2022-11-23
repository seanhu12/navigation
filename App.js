import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';

import 'react-native-gesture-handler';

import { NavigationContainer, StackRouter ,TabActions,useNavigation} from '@react-navigation/native';
import { createStackNavigator,} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();



function HomeScreen() {
  const navigation = useNavigation();

  function client(){
    navigation.navigate('client')
    
  }
  function admin(){
    navigation.navigate('admin')
    
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title='client' onPress={client}></Button>
      <Button title='admin' onPress={admin}></Button>
    </View>
  );
}
function ClientScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Client Screen</Text>
    </View>
  );
}

function Admincreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Admin Screen</Text>
    </View>
  );
}





// stack
/*export default function App() {
  return (

    <NavigationContainer >
     
      <Stack.Navigator>
       
        <Stack.Screen name='Home' component={HomeScreen}   />
        <Stack.Screen name='client' component={ClientScreen} />
        <Stack.Screen name='admin' component={Admincreen} />
     
      </Stack.Navigator>

    </NavigationContainer>
  );
}*/


//tab
/* export default function App() {
  return (

    <NavigationContainer >
      <Tab.Navigator>
        <Tab.Screen name='Home' component= {HomeScreen} />
        <Tab.Screen name='client' component={ClientScreen} />
        <Tab.Screen name='admin' component={Admincreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
} */




export default function App() {
  return (

    <NavigationContainer >
      <Drawer.Navigator>
        <Drawer.Screen name='Home' component= {HomeScreen} />
        <Drawer.Screen name='client' component={ClientScreen} />
        <Drawer.Screen name='admin' component={Admincreen} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
