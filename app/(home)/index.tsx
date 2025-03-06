import { View } from "react-native";
import { Button, Text } from "tamagui";
import { Plus } from "@tamagui/lucide-icons";
import { Link } from "expo-router";

const Home = () => {
    return (
        <View style={{ flex: 1 }}>
            <Text>Home</Text>
            <Link href="/entries/new" asChild>
                <Button
                    icon={<Plus color="white" size={30} />}
                    circular position="absolute"
                    style={{ top: "90%", left: "85%", backgroundColor: "green" }}
                    size="$5"
                />
            </Link>
        </View>
    )
}

export default Home;