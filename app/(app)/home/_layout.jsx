import { Stack } from "expo-router";

export default function HomeLayout() {
    return (
        <Stack screenOptions={{ headerShown: false, headerTitleAlign: "center" }}>
            <Stack.Screen name="index" options={{ headerShown: false, title: "Home" }} />
            <Stack.Screen name="[id]" options={{ headerShown: true }} />
            <Stack.Screen name="create" options={{ headerShown: true }} />
        </Stack>
    );
}
