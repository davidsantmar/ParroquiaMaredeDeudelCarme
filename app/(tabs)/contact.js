import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import React, { useState } from 'react';
import { PrayIcon } from "../../components/Icons";
import * as EmailJS from '@emailjs/browser';
import { EMAILJS_PUBLIC_KEY } from '@env';

export default function Contact() {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
        email: '',
    });
    const onSubmit = () => {
        EmailJS
        .send('service_4kmjw87', 'template_ar6elm7', toSend, EMAILJS_PUBLIC_KEY)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            // Limpiar el formulario
            setToSend({ from_name: '', email: '', message: '' });
        })
        .catch((err) => {
            console.log('FAILED...', err);
            Alert('Error', 'No se pudo enviar el mensaje.');
        });
    };
    const handleChange = (from_name, value) => {
        setToSend({ ...toSend, [from_name]: value });
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}                
                placeholder='Nom'
                onChangeText={(value) => handleChange('from_name', value)}
                value={toSend.from_name}
                placeholderTextColor="black"
                ref='from_name' required
            />
            <TextInput
                style={styles.input}
                keyboardType="email-address"
                placeholder='Correu electrònic'
                value={toSend.reply_to}
                onChangeText={(value) => handleChange('reply_to', value)}
                placeholderTextColor="black"
                ref='email' required
            />
            <TextInput
                style={styles.textArea}
                placeholder='Missatge'
                value={toSend.message}
                onChangeText={(value) => handleChange('message', value)}
                placeholderTextColor="black"
                ref='message' required
            />
            <Pressable style={styles.button} onPressOut={onSubmit}>
                <Text style={{ fontSize: 20 }}>Enviar</Text>
            </Pressable>
            <View style={styles.subtitle}>
                <Text style={{ color: "white", fontSize: 24 }}>Déu us beneeixi</Text>
                <PrayIcon style={{marginTop: 20}} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "black",
    height: 1000
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    height: 40, // Altura fija para simular el tamaño de un textarea
    justifyContent: 'flex-start', // Asegura que el texto comience desde arriba
    borderRadius: 10,
    backgroundColor: "white"
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    height: 120, // Altura fija para simular el tamaño de un textarea
    justifyContent: 'flex-start', // Asegura que el texto comience desde arriba
    borderRadius: 10,
    backgroundColor: "white"
  },
  button: {
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    experimental_backgroundImage: "linear-gradient(rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%)"
  },
  subtitle:{
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20"
  }
});