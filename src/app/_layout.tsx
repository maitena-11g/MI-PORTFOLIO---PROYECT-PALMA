
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { COLORES } from "./datos";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORES.principal,
        tabBarInactiveTintColor: "#9698A9",
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          borderTopColor: COLORES.borde,
          height: 68,
          paddingTop: 8,
          paddingBottom: 8,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
        },
        tabBarIcon: ({ color, size }: { color: string; size: number }) => (
  <Ionicons name="home-outline" size={size} color={color} />
),
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Inicio" }} />
      <Tabs.Screen name="estudios" options={{ title: "Estudios" }} />
      <Tabs.Screen name="habilidades" options={{ title: "Habilidades" }} />
      <Tabs.Screen name="contacto" options={{ title: "Contacto" }} />
      <Tabs.Screen name="explore" options={{ href: null }} />
    </Tabs>
  );
}
