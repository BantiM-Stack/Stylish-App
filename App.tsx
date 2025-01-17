



// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import AppNavigator from './src/modules/public/landing-screens/Navigation';  // Your app's navigation logic

// const App: React.FC = () => {
//   return (
//     <NavigationContainer>  
//       <AppNavigator />  
//       {/* Comment */}
//     </NavigationContainer>
//   );
// };

// export default App;


import React from 'react';
import AppNavigator from './src/modules/public/landing-screens/Navigation';

const App: React.FC = () => {
  return <AppNavigator />;
};

export default App;
