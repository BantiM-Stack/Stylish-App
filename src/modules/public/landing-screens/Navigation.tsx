// // import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// // import { createStackNavigator } from 'react-navigation-stack';
// // import Logo from './Logo';
// // import ChooseProductsScreen from './ChooseProducts';
// // import MakePaymentScreen from './MakePayment';
// // import GetYourOrderScreen from './GetYourOrder';

// // const AppStack = createStackNavigator({
// //   Splash: Logo,
// //   ChooseProducts: ChooseProductsScreen,
// //   MakePayment: MakePaymentScreen,
// //   GetYourOrder: GetYourOrderScreen,
// // });

// // const AppNavigator = createSwitchNavigator({
// //   Main: AppStack,
// // });

// // export default createAppContainer(AppNavigator);
// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import Logo from './Logo';
// import ChooseProductsScreen from './ChooseProducts';
// import MakePaymentScreen from './MakePayment';
// import GetYourOrderScreen from './GetYourOrder';

// const Stack = createStackNavigator();

// const AppNavigator: React.FC = () => {
//   return (
//     <Stack.Navigator initialRouteName="Splash">
//       <Stack.Screen name="Splash" component={Logo} />
//       <Stack.Screen name="ChooseProducts" component={ChooseProductsScreen} />
//       <Stack.Screen name="MakePayment" component={MakePaymentScreen} />
//       <Stack.Screen name="GetYourOrder" component={GetYourOrderScreen} />
//     </Stack.Navigator>
//   );
// };

// export default AppNavigator;


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import CarouselScreen from './CarouselScreen';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer  >
      <Stack.Navigator >
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Carousel" component={CarouselScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
