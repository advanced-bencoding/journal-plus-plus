import { Stack, Tabs } from "expo-router";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import migrations from "../data/migrations/migrations";
import db from "@/data/sources/SQLiteDatabase";
import { Text } from "react-native";

export default function RootLayout() {
  const { success, error } = useMigrations(db, migrations);
  if (error) {
    throw new Error(error.message);
  }
  if (!success) {
    return <Text>Migrating..</Text>
  }
  return (
    <Tabs>
      <Tabs.Screen name="(home)/index" options={{ title: "Home" }} />
      <Tabs.Screen name="settings" options={{ title: "Settings" }} />
    </Tabs>
  );
}
