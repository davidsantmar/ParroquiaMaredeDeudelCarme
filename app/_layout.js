import { Stack } from 'expo-router';
import { View, StyleSheet, Text, Platform } from 'react-native';


export default function Layout () {
    return (
      <>
        <View style={styles.container}>
          <Text style={{ color: "white", marginTop:"50", 
            fontSize: 25, textAlign: "center", fontWeight: "bold"}}>
                Iglesia Ntra. Sra. Del Carmen
          </Text>
          <Stack 
            screenOptions={{
              headerStyle: { backgroundColor: "black" },
              headerTitle: "",
              headerBackButtonDisplayMode: "generic", 
              headerBackTitle: "Inicio",
              headerBackTitleVisible : true,
              headerBackVisible: true,
              headerTintColor: "white"
            }}/>
        </View>
      </>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: "black",
  },
});