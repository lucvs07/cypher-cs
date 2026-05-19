import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import {
  Montserrat_800ExtraBold,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
  Montserrat_500Medium,
  Montserrat_400Regular,
} from '@expo-google-fonts/montserrat';
import {
  JetBrainsMono_600SemiBold,
  JetBrainsMono_500Medium,
  JetBrainsMono_400Regular,
} from '@expo-google-fonts/jetbrains-mono';

import { ThemeProvider, useTheme } from './src/context/ThemeContext';
import { RegistrosProvider } from './src/context/RegistrosContext';
import { ListaScreen } from './src/screens/ListaScreen';
import { CadastroScreen } from './src/screens/CadastroScreen';
import { DetalheScreen } from './src/screens/DetalheScreen';
import { RootStackParamList } from './src/types';

const Stack = createStackNavigator<RootStackParamList>();

function AppNavigator() {
  const { isDark } = useTheme();

  return (
    <>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Lista" component={ListaScreen} />
          <Stack.Screen name="Cadastro" component={CadastroScreen} />
          <Stack.Screen name="Detalhe" component={DetalheScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_800ExtraBold,
    Montserrat_700Bold,
    Montserrat_600SemiBold,
    Montserrat_500Medium,
    Montserrat_400Regular,
    JetBrainsMono_600SemiBold,
    JetBrainsMono_500Medium,
    JetBrainsMono_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <RegistrosProvider>
          <AppNavigator />
        </RegistrosProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
