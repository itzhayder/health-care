import { Stack, useLocalSearchParams } from "expo-router";
import { View } from "react-native";

import Button from "@/components/buttons/button";
import Layout from "@/components/layout";
import Typography from "@/components/typography";
import { useSession } from "@/contexts/authContext";

export default function HomeDetails() {
    const { session } = useSession();
    const isCustomer = session === "customer";

    return (
        <Layout>
            <Stack.Screen
                options={{ title: isCustomer ? "Request New Carer" : "Schedule Shift" }}
            />
            <Typography className="mt-2">
                {isCustomer
                    ? "Request Carer Form will be there"
                    : "Schedule Shift Form will be there"}
            </Typography>
            <Button
                className="bg-indigo-500 mt-10 mb-2"
                title={isCustomer ? "Request" : "Create Shift"}
                onPress={() => {}}
            />
        </Layout>
    );
}
