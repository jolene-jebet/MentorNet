import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import HomeScreen from './HomeScreen';
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

const HomeNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Mentor Net'
                component={HomeScreen}
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
            <HomeNavigator/>
        </View>
    );
};

export default Main;