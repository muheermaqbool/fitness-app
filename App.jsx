import "./global.css";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DemoScreen from "./screens/DemoScreen";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        options={{headerShown:false}}
        name="Home" 
        component={HomeScreen} 
        />
           <Stack.Screen 
           options={{headerShown:false}}
        name="DemoScreen" 
        component={DemoScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
