import { Button, Text, View } from "tamagui";
import { Trash } from "@tamagui/lucide-icons";
import { Pressable } from "react-native";

interface JournalEntryItemProps {
    dateModified: string;
    title?: string;
    content: string;
    entryId: number;
}

const JournalEntryItem: React.FC<JournalEntryItemProps> = ({ dateModified, title, content, entryId, ...props }) => {
    const date = new Date(dateModified);
    const month = date.toLocaleString("en-us", { month: "short" });
    const day = date.getDate();
    let displayVal = title ?? content;
    displayVal = displayVal.slice(0, 10);
    return (
        <Pressable {...props} style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 2, paddingVertical: 1 }}>
            <View style={{ flexDirection: "row" }}>
                <View>
                    <View>
                        <Text>{day}</Text>
                    </View>
                    <View>
                        <Text>{month}</Text>
                    </View>
                </View>
                <View style={{ justifyContent: "center" }}>
                    <Text>{displayVal}</Text>
                </View>
            </View>
            <Button icon={Trash} />
        </Pressable>
    );
}

export default JournalEntryItem;
