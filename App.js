import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Services from './screens/Services';
import Contact from './screens/Contac';
import About from './screens/About';
import Pets from './screens/Pets';
import Login from './screens/LoginScreens';
import Registrar from './screens/RegistrarScreens'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ title: 'Inicio de sesion' }} />
        <Stack.Screen name="Registrar" component={Registrar} options={{ title: 'Registro' }} />
        <Stack.Screen name="Home" component={Home} options={{ title: 'Veterinaria Amigos' }} />
        <Stack.Screen name="Services" component={Services} options={{ title: 'Nuestros Servicios' }} />
        <Stack.Screen name="Contact" component={Contact} options={{ title: 'Contacto' }} />
        <Stack.Screen name="About" component={About} options={{ title: 'Sobre Nosotros' }} />
        <Stack.Screen name="Pets" component={Pets} options={{ title: 'Nuestros Pacientes' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}