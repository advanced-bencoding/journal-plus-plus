import { View } from "react-native";
import { Button, Text } from "tamagui";
import { Plus } from "@tamagui/lucide-icons";

const Home = () => {
    return (
        <View style={{ backgroundColor: "yellow", flex: 1, paddingHorizontal: 20, paddingVertical: 10 }}>
            <Text>Home</Text>
            <Button
                icon={<Plus color="white" size={30} />}
                circular position="absolute"
                style={{ top: "93%", left: "93%", backgroundColor: "green" }}
                size="$5"
            />
        </View>
    )
}

export default Home;