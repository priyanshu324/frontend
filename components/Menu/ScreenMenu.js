import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/auth/Login'
import Register from '../../screens/auth/Register'
import Post from '../../screens/Post'
import Myposts from '../../screens/Myposts'
import Account from '../../screens/Account'
import { AuthContext } from '@/context/authContext';
import HeaderMenu from "../../components/Menu/HeaderMenu";
import Home from "../../screens/Home"

const ScreenMenu = () => {

    const [state] = useContext(AuthContext);

    const authenticatedUser = state?.user && state?.token;

    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            {authenticatedUser ? (
                <>
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{
                            title: "full Satck App",
                            headerRight: () => <HeaderMenu />,
                        }}
                    />
                    <Stack.Screen
                        name="Post"
                        component={Post}
                        options={{
                            headerBackTitle: "Title",
                            headerRight: () => <HeaderMenu />,
                        }}
                    />
                    <Stack.Screen
                        name="Myposts"
                        component={Myposts}
                        options={{
                            headerBackTitle: "Title",
                            headerRight: () => <HeaderMenu />,
                        }}
                    /><Stack.Screen
                        name="Account"
                        component={Account}
                        options={{
                            headerBackTitle: "Title",
                            headerRight: () => <HeaderMenu />,
                        }}
                    />
                </>
            ) : (
                <>
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Register"
                        component={Register}
                        options={{ headerShown: false }}
                    />
                </>
            )}

        </Stack.Navigator>
    );
}

export default ScreenMenu;