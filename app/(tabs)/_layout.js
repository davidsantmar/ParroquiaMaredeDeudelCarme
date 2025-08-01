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
          title: 'Inicio',
          tabBarIcon: ({ color }) => <HomeIcon color={color} />
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'Historia',
          tabBarIcon: ({ color }) => <HistoryIcon color={color} />
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          title: 'Noticias',
          tabBarIcon: ({ color }) => <NewsIcon color={color} />
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: 'Contacto',
          tabBarIcon: ({ color }) => <ContactIcon color={color} />
        }}
      />
    </Tabs>
  );
}

