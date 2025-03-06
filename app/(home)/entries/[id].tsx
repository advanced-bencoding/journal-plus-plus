import { useLocalSearchParams } from "expo-router";
import { View } from "react-native"
import { Button, Input, Text, TextArea } from "tamagui"
import { Check } from "@tamagui/lucide-icons";
import { useState } from "react";

const JournalEntry = () => {
    const { id }: { id: string } = useLocalSearchParams();
    const isNewEntry = id.toLocaleLowerCase() === "new";
    const [title, setTitle] = useState<string | undefined>();
    const [content, setContent] = useState<string>();

    return (
        <View style={{ flex: 1 }}>
            <View>
                <Input placeholder="Title" borderWidth={0} value={title} onChangeText={(text) => {
                    setTitle(text);
                }} />
            </View>
            <View
            style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1
            }}
            />
            <TextArea borderWidth={1} flex={1} verticalAlign="top" value={content} onChangeText={(text) => {
                setContent(text);
            }} />
            <Button
                    icon={<Check color="white" size={30} />}
                    circular position="absolute"
                    style={{ top: "90%", left: "85%", backgroundColor: "green" }}
                    size="$5"
                />
        </View>
    )
}

export default JournalEntry;