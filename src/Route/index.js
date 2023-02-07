import React, { useEffect} from 'react';
import { Dimensions,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Splash from '../Screens/Welcome/Splash';
import AuthContext from '../Utils/AuthContext';
import RouteName from '../Config/RouteName';
import { CommonStrings, CustomDarkTheme, CustomDefaultTheme } from '../Constant';
import AsyncStorage from '@react-native-async-storage/async-storage';
const { height, width } = Dimensions.get('window');

const AppStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function Router() {

    const [isDarkTheme, setIsDarkTheme] = React.useState(false);
    const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

    useEffect(() => {
        async function fetchData() {
            const ColorMode = await AsyncStorage.getItem(CommonStrings.ASYNC_DARK_MODE);
            if (ColorMode == CommonStrings.TRUE) {
                setIsDarkTheme(true)
            } else {
                setIsDarkTheme(false)
            }
        }
        fetchData();
    }, []);

    const themeContext = React.useMemo(
        () => ({
            toggleTheme() {
                setIsDarkTheme(isDarkTheme => !isDarkTheme);
            },
        }),
        [isDarkTheme],
    );

    return (
        <NavigationContainer theme={theme}>
            <AuthContext.Provider value={{ isDarkTheme, setIsDarkTheme, themeContext, }}>
                <AppStack.Navigator
                    initialRouteName={RouteName.Splash}
                    screenOptions={{
                        headerShown: false,
                        gestureEnabled: false,
                        gestureDirection: 'horizontal',
                        ...TransitionPresets.SlideFromRightIOS,
                        headerMode: 'screen',

                    }}
                >
                    <AppStack.Screen name={RouteName.Splash} component={Splash} options={{ headerShown: false }} />
                 
                </AppStack.Navigator>
            </AuthContext.Provider>
        </NavigationContainer>
    );
}
export default Router;
