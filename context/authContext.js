import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// context
const AuthContext = createContext();

// provider

const AuthProvider = ({ children }) => {
    // golbal state  
    const [state, setState] = useState({
        user: null,
        token: "",
    });

    let token = state && state.token;
    // axios default settings
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axios.defaults.baseURL = "http://192.168.1.7:8080/api/v1";

    useEffect(() => {
        const loadLocalStorageData = async () => {
            let data = AsyncStorage.getItem("@auth");
            let loginData = JSON.parse(data)

            setState({ ...state, user: loginData?.user, token: loginData?.token })
        }
        loadLocalStorageData();
    }, [])

    return (
        <AuthContext.Provider value={[state, setState]} >
            {children}
        </AuthContext.Provider>
    )
};

export { AuthContext, AuthProvider };