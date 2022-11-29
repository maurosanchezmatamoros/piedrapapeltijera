import { useState } from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { Header } from './components';
import colors from './constants/colors';
import { StartGame } from './screens'
import Result from './screens/result';
import { useFonts } from 'expo-font'

export default function App() {
  const [loaded] = useFonts({
    'PatrickHand': require('../assets/fonts/PatrickHand-Regular.ttf')
  })

  const [userOption, setUserOption] = useState(null)

  const handleGetResult = (optionSelected) => {
    setUserOption(optionSelected)
  }

  if (!loaded) {
    return(
      <View>
        <ActivityIndicator size='large' color={colors.primary} />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Header title='Piedra, Papel o Tijera'/>
      {userOption?
        <Result userOption={userOption} handleGetResult={handleGetResult} />
        : <StartGame handleGetResult={handleGetResult} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
});
