import { View } from "react-native";
import { Button, Text } from "tamagui";
import { Plus } from "@tamagui/lucide-icons";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Entry } from "@/domain/models/entry";
import { getAllEntries } from "@/domain/usecases/entries/getEntries";

const Home = () => {
    const [entries, setEntries] = useState<Entry[]>([]);

    useEffect(() => {
        getAllEntries()
            .then((result) => {
                setEntries(result);
            })
            .catch((error) => {
                throw new Error(error.message);
            })
    });

    return (
        <View style={{ flex: 1 }}>
            <Text>Home</Text>
            {entries.map((entry) => {
                return (
                    <Link href={`/entries/${entry.entryId}`} asChild>
                        <Button><Text>
                        Journal Entry: {entry.entryId}
                            </Text></Button>
                    </Link>
                )
            })}
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