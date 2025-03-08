import { useLocalSearchParams } from "expo-router";
import { View } from "react-native"
import { Button, Input, Text, TextArea } from "tamagui"
import { Check } from "@tamagui/lucide-icons";
import { useEffect, useState } from "react";
import { getSingleEntry } from "@/domain/usecases/entries/getEntries";
import { addEntry } from "@/domain/usecases/entries/saveEntry";
import { router } from "expo-router"

const JournalEntry = () => {
    const { id }: { id: string } = useLocalSearchParams();
    const isNewEntry = id.toLocaleLowerCase() === "new";
    const [title, setTitle] = useState<string | undefined>();
    const [content, setContent] = useState<string>("");
    // enable save only if there's some content

    useEffect(() => {
        if (!isNewEntry) {
            getSingleEntry(Number(id))
                .then((entryResult) => {
                    if (entryResult) {
                        setTitle(entryResult.title);
                        setContent(entryResult.content);
                    } else {
                        throw new Error("failed to fetch entry")
                    }
                })
        }
    }, [])

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
                    onPress={() => {
                        addEntry({
                            content,
                            title,
                            entryId: isNewEntry ? undefined : Number(id),
                            dateCreated: "",
                            dateModified: ""
                        });
                        router.back();
                    }}
                />
        </View>
    )
}

export default JournalEntry;