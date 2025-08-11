import { Tabs } from "expo-router";
import { ContactIcon, HistoryIcon, HomeIcon, NewsIcon } from "../../components/Icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor:  'rgba(0, 0, 0, 0.95)', 
          height: 90,
          position: 'absolute',
          borderTopWidth: 0, 
          elevation: 0, 
          shadowOpacity: 0, // Opcional: elimina la sombra en iOS
        },
        headerShown: false,
        tabBarActiveTintColor: 'white',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inici',
          tabBarIcon: ({ color }) => <HomeIcon color={color} />
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'Història',
          tabBarIcon: ({ color }) => <HistoryIcon color={color} />
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          title: 'Notícies',
          tabBarIcon: ({ color }) => <NewsIcon color={color} />
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: 'Contacte',
          tabBarIcon: ({ color }) => <ContactIcon color={color} />
        }}
      />
    </Tabs>
  );
}

