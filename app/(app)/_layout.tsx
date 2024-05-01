import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Redirect, Stack, Tabs } from "expo-router";
import { Text } from "react-native";

import Typography from "@/components/typography";
import { useSession } from "@/contexts/authContext";
import { cn } from "@/utilities/cn";

export default function AppLayout() {
    const { session, isLoading } = useSession();

    // You can keep the splash screen open, or render a loading screen like we do here.
    if (isLoading) {
        return <Text>Loading...</Text>;
    }

    // Only require authentication within the (app) group's layout as users
    // need to be able to access the (auth) group and sign in again.
    if (!session) {
        // On web, static rendering will stop here as the user is not authenticated
        // in the headless Node process that the pages are rendered in.
        return <Redirect href="/" />;
    }

    // This layout can be deferred because it's not the root layout.
    return (
        <Tabs screenOptions={{ headerShown: true, headerTitleAlign: "center" }}>
            <Tabs.Screen
                name="home"
                options={{
                    headerShown: false,
                    title: "Home",
                    tabBarIcon: ({ color, size, focused }) => (
                        <FontAwesome
                            name="home"
                            color={focused ? "#7c3aed" : "#737373"}
                            size={size}
                        />
                    ),
                    tabBarLabel: ({ focused, children }) =>
                        focused ? (
                            <Typography
                                variant="small1"
                                className={cn({ "text-violet-500": true })}
                            >
                                {children}
                            </Typography>
                        ) : (
                            <Typography
                                variant="small1"
                                className={cn({ "text-neutral-500": true })}
                            >
                                {children}
                            </Typography>
                        ),
                }}
            />
            <Tabs.Screen
                name="account"
                options={{
                    headerShown: true,
                    headerTitle: "Account",
                    title: "Account",
                    tabBarIcon: ({ color, size, focused }) => (
                        <FontAwesome
                            name="user"
                            color={focused ? "#7c3aed" : "#737373"}
                            size={size}
                        />
                    ),
                    tabBarLabel: ({ focused, children }) =>
                        focused ? (
                            <Typography
                                variant="small1"
                                className={cn({ "text-violet-500": true })}
                            >
                                {children}
                            </Typography>
                        ) : (
                            <Typography
                                variant="small1"
                                className={cn({ "text-neutral-500": true })}
                            >
                                {children}
                            </Typography>
                        ),
                }}
            />
        </Tabs>
    );
}
