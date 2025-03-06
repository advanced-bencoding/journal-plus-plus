import { Stack } from "expo-router"
import { View } from "react-native";

const HomeLayout = () => {
    return (
        <View style={{ backgroundColor: "yellow", flex: 1, paddingHorizontal: 20, paddingVertical: 10 }}>
            <Stack screenOptions={{ headerShown: false }} />
        </View>
    )
}

export default HomeLayout;