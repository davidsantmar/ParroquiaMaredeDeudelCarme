import React, { useRef, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Pressable,
  Image
} from "react-native";
import { Link } from 'expo-router';
import { MassIcon, TouchIcon } from "./Icons";

export function Main() {
  const rotacionAnimada = useRef(new Animated.Value(0)).current; // Valor animado para la rotación
  const floatAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Define la animación de flotación
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: -20, // Equivalente a translateY(-20px)
          duration: 1000, // 50% del ciclo (mitad de 2 segundos)
          useNativeDriver: true, // Mejora el rendimiento
        }),
        Animated.timing(floatAnim, {
          toValue: 0, // Vuelve a translateY(0)
          duration: 1000, // Otra mitad del ciclo
          useNativeDriver: true,
        }),
      ])
    );

    // Inicia la animación
    animation.start();

    // Limpia la animación al desmontar el componente
    return () => animation.stop();
  }, [floatAnim]);

  // Maneja el inicio del toque (equivalente a hover)
  const manejarPresionInicio = () => {
    Animated.timing(rotacionAnimada, {
      toValue: 180, // Rotar a 180 grados
      duration: 600, // Duración de la animación (como en el CSS)
      useNativeDriver: true,
    }).start();
  };

  // Maneja el fin del toque (equivalente a salir del hover)
  const manejarPresionFin = () => {
    Animated.timing(rotacionAnimada, {
      toValue: 0, // Volver a 0 grados
      duration: 600,
      useNativeDriver: true,
    }).start();
  };

  // Interpolación para la rotación en el eje Y
  const rotacion = rotacionAnimada.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  // Interpolación para controlar la visibilidad (opacidad) del frente y la parte trasera
  const opacidadFrente = rotacionAnimada.interpolate({
    inputRange: [90, 180],
    outputRange: [1, 0],
  });

  const opacidadTrasera = rotacionAnimada.interpolate({
    inputRange: [0, 90],
    outputRange: [0, 1],
  });
  return (
        <View style={styles.container}>
          <Pressable onPressIn={manejarPresionInicio} onPressOut={manejarPresionFin}>
          <Animated.View style={[styles.flipCardInner, { transform: [{ rotateY: rotacion }] }]}>
            <Animated.View style={[styles.flipCardFront, { opacity: opacidadFrente }]}>
              <Image
                source={{ uri:  "https://marededeudelcarme.wordpress.com/wp-content/uploads/2025/07/image.png"}}
                    style={{ width: 356, height: 474, resizeMode: "cover", borderRadius: 10 }}
                />
            </Animated.View>
            {/* Parte trasera de la tarjeta (Texto) */}
            <Animated.View style={[styles.flipCardBack, { opacity: opacidadTrasera, transform: [{ rotateY: '180deg' }] }]}>
              <Text style={{ fontWeight: "bold"}}>Pregària de Sant Simó Stock</Text>
              <Text style={{fontStyle: "italic"}}>Flor del Carme</Text>
              <Text style={{fontStyle: "italic"}}>cep del raïm diví,</Text>
              <Text style={{fontStyle: "italic"}}>llum celeste,</Text>
              <Text style={{fontStyle: "italic"}}>i Verge amb fruit al sí,</Text>
              <Text style={{fontStyle: "italic", marginBottom: 10}}>meravella!</Text>
              <Text style={{fontStyle: "italic"}}>Mare tendra</Text>
              <Text style={{fontStyle: "italic"}}>intacte de baró</Text>
              <Text style={{fontStyle: "italic"}}>als vostres</Text>
              <Text style={{fontStyle: "italic"}}>doneu protecció,</Text>
              <Text style={{fontStyle: "italic", marginBottom: 10}}>bella estrella.</Text>
              <Text style={{fontStyle: "italic"}}>Mare dolça,</Text>
              <Text style={{fontStyle: "italic"}}>Senyora del Carmel,</Text>
              <Text style={{fontStyle: "italic"}}>vostre poble</Text>
              <Text style={{fontStyle: "italic"}}>ompliu del goig que al cel</Text>
              <Text style={{fontStyle: "italic", marginBottom: 10}}>fruïu ara.</Text>
              <Text style={{fontStyle: "italic"}}>Sou la porta,</Text>
              <Text style={{fontStyle: "italic"}}>la clau del paradís;</Text>
              <Text style={{fontStyle: "italic"}}>conduïu-nos</Text>
              <Text style={{fontStyle: "italic"}}>on vos regneu feliç,</Text>
              <Text style={{fontStyle: "italic"}}>nostra Mare. Amén.</Text>
            </Animated.View>
          </Animated.View>
        </Pressable>
        <View style={{  flexDirection: 'row', alignItems: 'center'}}>
          <Link asChild href="/timetable" style={{ color: "white", marginTop:"20", fontSize: 20, marginLeft: "170"}}>
            <Pressable>
              {({ pressed }) => <MassIcon style={{ color: "white"}} />}
            </Pressable>
          </Link>
          <Animated.View style={[
            styles.iconContainer,
            { transform: [{ translateY: floatAnim }] }, // Aplica la animación
          ]}>
            <View style={{ marginLeft: "50", flexDirection: "column", alignItems: "center"}}>
              <TouchIcon style={{fontSize: 48}} />
              <Text style={{ color: "white", marginTop: "10"}} >Pulsa la imagen</Text>
            </View>
          </Animated.View>
        </View>        
        
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", 
    backgroundColor: "black",
  },
  flipCardBack: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});



