import { Button, Text, View } from "tamagui";
import { Trash } from "@tamagui/lucide-icons";
import { Pressable, StyleSheet } from "react-native";
import { forwardRef } from "react";

interface JournalEntryItemProps {
  dateCreated: string;
  title?: string;
  content: string;
  entryId: number;
  onDelete: () => void;
}

const JournalEntryItem: React.FC<JournalEntryItemProps> = forwardRef(
  ({ dateCreated, title, content, entryId, onDelete, ...props }, ref) => {
    const date = new Date(dateCreated);
    const month = date.toLocaleString("en-us", { month: "short" });
    const day = date.getDate();
    let displayVal = title ?? content;
    displayVal = displayVal.slice(0, 10);
    return (
      <Pressable {...props} style={styles.itemWrapper}>
        <View style={styles.metaDataWrapper}>
          <View style={styles.dateContainer}>
            <View>
              <Text>{day}</Text>
            </View>
            <View>
              <Text>{month}</Text>
            </View>
          </View>
          <View style={styles.textWrapper}>
            <Text>{displayVal}</Text>
          </View>
        </View>
        <Button icon={Trash} onPress={onDelete} />
      </Pressable>
    );
  }
);
JournalEntryItem.displayName = "JournalEntryItem";

const styles = StyleSheet.create({
  itemWrapper: {
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "grey",
    borderRadius: 10,
  },
  dateContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 10,
    alignItems: "center",
    backgroundColor: "lightgrey",
  },
  metaDataWrapper: {
    flexDirection: "row"
  },
  textWrapper: {
    justifyContent: "center"
  }
});

export default JournalEntryItem;
