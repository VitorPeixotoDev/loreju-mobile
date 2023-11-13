import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import Routes from './src/routes'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar 
        backgroundColor='#FAF0E6' 
        barStyle='dark-content'
        translucent={false}
      />
      <Routes/>  
    </NavigationContainer>
  );
}

/*
:root {
  --white: #fff;
  --black: #000;
  --light-black: #222;
  --dark-900: #FAF0E6;
  --dark-700:  #f5f5f5;
  --wine: #722f37;
  --green: #626e60;
  --red: #f9232c;
}
*/