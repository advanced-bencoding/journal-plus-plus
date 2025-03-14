import { Tabs } from "expo-router";
import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import migrations from "../data/migrations/migrations";
import db from "@/data/sources/drizzleClient/SQLiteDatabase";
import { Text, useColorScheme } from "react-native";
import { TamaguiProvider } from "tamagui";
import tamaguiConfig from "@/tamagui.config";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Home } from "@tamagui/lucide-icons";
import { Settings } from "@tamagui/lucide-icons";

export default function RootLayout() {
  const { success, error } = useMigrations(db, migrations);
  const colorScheme = useColorScheme();
  if (error) {
    throw new Error(error.message);
  }
  if (!success) {
    return <Text>Migrating..</Text>;
  }
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Tabs>
          <Tabs.Screen
            name="(home)"
            options={{ title: "Home", tabBarIcon: () => <Home /> }}
          />
          <Tabs.Screen
            name="settings"
            options={{ title: "Settings", tabBarIcon: () => <Settings /> }}
          />
        </Tabs>
      </ThemeProvider>
    </TamaguiProvider>
  );
}
