import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Services from './screens/Services';
import Contact from './screens/Contac';
import About from './screens/About';
import Login from './screens/LoginScreens';
import Registrar from './screens/RegistrarScreens'
import EditarMascotaScreen from './screens/Pets/PetEdit';
import CrearMascotaScreen from './screens/Pets/Register';
import MascotasScreen from './screens/Pets';


// Component 
export default function App() {
  // Vars 
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MascotasList">
        <Stack.Screen name="Login" component={Login} options={{ title: 'Inicio de sesion' }} />
        <Stack.Screen name="Registrar" component={Registrar} options={{ title: 'Registro' }} />
        <Stack.Screen name="Home" component={Home} options={{ title: 'Veterinaria Amigos' }} />
        <Stack.Screen name="Services" component={Services} options={{ title: 'Nuestros Servicios' }} />
        <Stack.Screen name="Contact" component={Contact} options={{ title: 'Contacto' }} />
        <Stack.Screen name="About" component={About} options={{ title: 'Sobre Nosotros' }} />
        <Stack.Screen name="MascotasList" component={MascotasScreen} options={{ title: 'Mis Mascotas' }}/>
        <Stack.Screen name="EditarMascota" component={EditarMascotaScreen} options={{ title: 'Editar Mascota' }}/>
        <Stack.Screen name="CrearMascota" component={CrearMascotaScreen} options={{ title: 'Registrar Mascota' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}