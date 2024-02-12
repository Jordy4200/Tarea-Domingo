import { createStackNavigator } from '@react-navigation/stack';
import { MainScreen } from '../screens/MainScreen';
import { SecondScreen } from '../screens/SecondScreen';


const Stack = createStackNavigator();

export const StackNavigator=()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainScreen" options={{headerShown:false}} component={MainScreen} />
      <Stack.Screen name="SecondScreen" options={{headerShown:false}} component={SecondScreen} />
    </Stack.Navigator>
  );
}