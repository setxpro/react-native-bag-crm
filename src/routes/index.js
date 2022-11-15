import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Details } from "../screens/Locale/Details";
import { PrivateScreen } from "../screens/Private";
import { SignIn } from "../screens/SignIn";
import { Welcome } from "../screens/Welcome";


const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Welcome" 
                component={Welcome} 
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="SignIn" 
                component={SignIn} 
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="PrivateScreen" 
                component={PrivateScreen} 
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="Detail" 
                component={Details} 
            />
        </Stack.Navigator>
    )
}