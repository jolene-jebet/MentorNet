import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import SignUpScreen from './SignUpScreen';
import { View } from 'react-native';
import { Platform } from 'react-native';
import { Icon } from 'react-native-elements';

const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: 'black' },
    headerTitleAlign: 'center',
    headerTitleStyle: { fontSize: 36 },
    headerLeft: () => (
        <View style={{ marginLeft: 50, marginTop: 5}}>
          <Icon
            name='book'
            type='font-awesome'
            color='#fff'
            size={28}
         />
          </View>
  ),
    
};

const SignupNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Mentor Net'
                component={SignUpScreen}
                options={{ title: 'Mentor Net' }}
            />
        </Stack.Navigator>
    );
};
const Main = () => {
    return (
        <View
            style={{
                flex: 1,
                paddingTop:
                    Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}
        >
            <SignupNavigator/>
        </View>
    );
};

export default Main;