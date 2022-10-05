import { View, StyleSheet, StatusBar } from 'react-native';
import { THEME } from './src/Theme';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat'
import Poppins_400Regular from '@expo-google-fonts/poppins'
import { Header } from './src/components/Header';
import { Feed } from './src/screens/Feed';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoad] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  })
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoad ? <Feed /> : <Loading />}
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1F1F'
  },

});

