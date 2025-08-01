import { ScrollView, Text, View, Platform } from "react-native";

export default function News() {
    return (
        <ScrollView style={{ backgroundColor: "black" }}>
            <Text style={{ color: "white", fontSize: 30, padding: Platform.OS === "android" ? "20" : "10", fontWeight: "bold" }}>Festes de la Mare de Déu del Carme</Text>
            <View style={{ padding: Platform.OS === "android" ? "20" : "10" }}>
                <Text style={{ color: "white", fontSize: 20, fontStyle: "italic" }}>Pares carmelites</Text>
                <Text style={{ color: "white", fontSize: 20, fontStyle: "italic" }}>Parroquia del Carme</Text>
                <Text style={{ color: "white", fontSize: 20, fontStyle: "italic" }}>Terrassa, Juliol del 2025</Text>
            </View>
            <Text style={{ color: "white", fontSize: 25, padding: Platform.OS === "android" ? "20" : "10", fontWeight: "bold" }}>Tridu preparatori</Text>
            <View style={{ padding: Platform.OS === "android" ? "20" : "10" }}>
                <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>Diumenge dia 13, missa de les 11 del matí:</Text>
                <Text style={{ color: "white", fontSize: 20, fontStyle: "italic" }}>“Maria, Verge contemplativa”</Text>
                <Text style={{ color: "white", fontSize: 20 }}>Predicarà el P. Bladimir Ramos, carmelita, vicari de la nostra parròquia.</Text>
            </View>
            <View style={{ padding: Platform.OS === "android" ? "20" : "10" }}>
                <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>Dilluns dia 14, missa de les 8 del vespre:</Text>
                <Text style={{ color: "white", fontSize: 20, fontStyle: "italic" }}>“Maria, Companya del nostre camí”</Text>
                <Text style={{ color: "white", fontSize: 20 }}>Predicarà Mn. Miguel Ángel Jaimes Duarte, Rector de la parròquia de Sant Cristòfor.</Text>
            </View>
            <View style={{ padding: Platform.OS === "android" ? "20" : "10" }}>
                <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>Dimarts dia 15, missa de les 8 del vespre :</Text>
                <Text style={{ color: "white", fontSize: 20, fontStyle: "italic" }}>“Maria, Companya de pregària en la Resurrecció”</Text>
                <Text style={{ color: "white", fontSize: 20 }}>Predicarà Mn. Carles Milà Farnés,prevere de la diòcesi de Terrassa</Text>
            </View>
            <View style={{ padding: Platform.OS === "android" ? "20" : "10" }}>
                <Text style={{ color: "white", fontSize: 20}}>▪️ Les Eucaristies del Tridu aniran precedides del rés del sant rosari.</Text>
                <Text style={{ color: "white", fontSize: 20}}>▪️ El dia 15, després de la missa, s’imposarà l’escapulari als qui ho demanin.</Text>
                <Text style={{ color: "white", fontSize: 20}}>▪️ El dia 13, a les 5.30 de la tarda, tindrà lloc el darrer cinema fòrum del curs amb la pel·lícula “Cabrini” sobre la defensa dels valors de la dona feta per aquesta santa, que es va lliurar a servir els més pobres al New York del segle XIX.</Text>
            </View>
            <View style={{ padding: Platform.OS === "android" ? "20" : "10" }}>
                <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>Dimecres 16 de juliol:</Text>
                <Text style={{ color: "white", fontSize: 20, fontStyle: "italic" }}>"Solemnitat de la Mare de Déu del Carme"</Text>
                <Text style={{ color: "white", fontSize: 20 }}><Text style={{fontWeight: "bold"}}>A migdia: </Text>repic de campanes i llançament de coets.</Text>
                <Text style={{ color: "white", fontSize: 20 }}><Text style={{fontWeight: "bold"}}>A les 8 del vespre:</Text> Solemne Eucaristia Concelebrada</Text>
                <Text style={{ color: "white", fontSize: 20 }}><Text style={{fontWeight: "bold"}}>A les 9 del vespre:</Text> Sopar-concert, al claustre. Actuaran la cantant Oyuna Baturova i el guitarrista Josep Noguera.</Text>
            </View>
            <View style={{ padding: Platform.OS === "android" ? "20" : "10" }}>
                <Text style={{ color: "white", fontSize: 20}}>▪️ El dia 16 sou pregats de portar flors a la Verge per guarnir l’altar.</Text>
                <Text style={{ color: "white", fontSize: 20}}>▪️ També el dia 16 es farà una col·lecta especial per les despeses de la parròquia.</Text>
                <Text style={{ color: "white", fontSize: 20}}>▪️ Per participar al sopar-concert, cal apuntar-se al contacte 677 28 74 83. Preu indicatiu: 12€</Text>
            </View>
            <View style={{ padding: Platform.OS === "android" ? "20" : "10" , marginBottom: 100}}>
                <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>Diumenge 20 de juliol</Text>
                <Text style={{ color: "white", fontSize: 20, fontStyle: "italic" }}>"Festa de Sant Elies Profeta, Pare inspirador de l’Orde del Carme"</Text>
                <Text style={{ color: "white", fontSize: 20 }}>A les 11 del matí, Eucaristia del Sant</Text>
            </View>
        </ScrollView>
    )
} //last new has to have a marginBottom: 100