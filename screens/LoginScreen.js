import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { React, useState } from 'react'
import { Button, Input, Image } from 'react-native-elements'
import { StatusBar } from 'expo-status-bar'

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {

  }
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <StatusBar style="light" />
        <Image source={{
            uri: "https://www.citypng.com/public/uploads/small/51610315264dnueuotvjocc5ks3mq9scwr9nnp5kbujto76vhkoxiw8nzjtac17i9nonf7ixkvr1jlkzaro2z1rl09kstkmdaydsxawqhwdzg5y.png",
        }}
        style={{ width: 200, height: 200 }}
        />
        <View style={styles.inputContainer}>
            <Input 
                placeholder="Email" 
                autoFocus type="Email" 
                value={email} 
                onChangeText={text => setEmail(text)}
            />
            <Input 
                placeholder="Password" 
                secureTextEntry type="password"
                value={password} 
                onChangeText={text => setPassword(text)} 
            />
        </View>

        <Button containerStyle={styles.button} onPress={signIn} title="Login" />
        <Button onPress={() => navigation.navigate('Register')} containerStyle={styles.button} type="outline" title="Register" />
        <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white"
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,

    }
})