import React from "react";
import { ScrollView, View } from "react-native";

import Icon from "./icon";

import { ICONS_NAME } from "@/constants/iconsName";

const Layout = ({
    header,
    center = false,
    hasScrollView = true,
    children,
    style = {},
    ...props
}) => {
    return (
        <>
            {header ? (
                <View className="h-20 justify-center px-5">
                    <Icon name={ICONS_NAME["nav-menu"]} color="#2e1065" size={24} />
                </View>
            ) : (
                <></>
            )}
            <ScrollView
                contentContainerClassName="px-5 py-5"
                contentContainerStyle={{
                    ...(center ? { alignItems: "center", justifyContent: "center" } : {}),
                    flexGrow: 1,
                }}
            >
                {children}
            </ScrollView>
        </>
    );
    return hasScrollView ? (
        <ScrollView
            className="flex-1 p-4"
            contentContainerStyle={{ paddingBottom: 60 }}
            style={style}
            {...props}
        >
            {children}
        </ScrollView>
    ) : (
        <View className="flex-1 p-4" style={style} {...props}>
            {children}
        </View>
    );
};

export default Layout;
