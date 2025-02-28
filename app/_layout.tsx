import { Stack, Tabs } from "expo-router";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import migrations from "../data/migrations/migrations";
import db from "@/data/sources/SQLiteDatabase";
import { Text, useColorScheme } from "react-native";
import { TamaguiProvider } from "tamagui";
import tamaguiConfig from "@/tamagui.config";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";

export default function RootLayout() {
  const { success, error } = useMigrations(db, migrations);
  const colorScheme = useColorScheme()
  if (error) {
    throw new Error(error.message);
  }
  if (!success) {
    return <Text>Migrating..</Text>
  }
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Tabs>
          <Tabs.Screen name="(home)/index" options={{ title: "Home" }} />
          <Tabs.Screen name="settings" options={{ title: "Settings" }} />
        </Tabs>
      </ThemeProvider>
    </TamaguiProvider>
  );
}
