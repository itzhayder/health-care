import { GestureHandlerRootView } from "react-native-gesture-handler";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
    useFonts,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import { Slot, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { ASSET } from "../constants/assets";
import { SessionProvider } from "../contexts/authContext";

import "../global.css";
import { View } from "react-native";

export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary,
} from "expo-router";

export default function Root() {
    const [loaded, error] = useFonts({
        PoppinsRegular: Poppins_400Regular,
        PoppinsMedium: Poppins_500Medium,
        PoppinsSemiBold: Poppins_600SemiBold,
    });

    // console.log({ loaded });

    // Expo Router uses Error Boundaries to catch errors in the navigation tree.
    useEffect(() => {
        if (error) throw error;
    }, [error]);

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    // Set up the auth context and render our layout inside of it.
    return (
        <SessionProvider>
            {/* <Slot /> */}
            <Stack
                screenOptions={{
                    headerShown: false,
                    statusBarHidden: false,
                }}
            >
                <Stack.Screen name="index" />
                <Stack.Screen
                    name="sign-up"
                    options={{
                        // headerShown: true,
                        title: "",
                    }}
                />
                <Stack.Screen name="register-as" />
                {/* <Stack.Screen
                    name="(app)"
                    options={{
                        headerShown: false,
                    }}
                /> */}
            </Stack>
        </SessionProvider>
    );
}
