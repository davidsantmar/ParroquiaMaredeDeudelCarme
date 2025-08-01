import { View, Text, StyleSheet, Platform } from 'react-native';

export default function Timetable () {
    return (
      <>
        <View style={styles.container}>
            <Text style={{ color: "white", marginTop: Platform.OS === "android" ? "0" : "20", fontSize: 25, fontWeight: "bold", textAlign: "center", marginBottom: 20}}>Horarios</Text>
            <View style={{padding: Platform.OS === "android" ? "20" : "10"}}>
                <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", marginBottom: 10}}>Horari de misa</Text>
                <Text style={{ color: "white", fontSize: 20 }}>De dilluns a dissabte i vigilies: 20:00</Text>
                <Text style={{ color: "white", fontSize: 20 }}>Diumenges i festius: 11:00 i 12:15</Text>
            </View>
           <View style={{padding: Platform.OS === "android" ? "20" : "10", marginTop: 20}}>
              <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>Horari de despatx parroquial</Text>
              <Text style={{ color: "white", fontSize: 20 }}>Dilluns i dimecres de 18:00 a 19:30</Text>
          </View>
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