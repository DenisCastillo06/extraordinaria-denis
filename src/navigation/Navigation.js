import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../screens/Home';
import Add from '../screens/Add';

const Stack = createNativeStackNavigator();


//Las pantallas de la app y sus navegaciones
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{title:'Gestión de estudiantes'}} />
                <Stack.Screen name="Add" component={Add} 
                options={{presentation:'modal', title:'Registro de estudiantes'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;