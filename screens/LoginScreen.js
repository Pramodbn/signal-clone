import React, {useState, useEffect } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { auth } from '../firebase';

const LoginScreen = ( {navigation} ) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if(authUser) {
                navigation.replace("Home");
            }
        });
        return unsubscribe;
    }, []);

    const signIn = () => {
        auth
        .signInWithEmailAndPassword(email, password)
        .catch((error) => alert(error));
    };
    return (
        <KeyboardAvoidingView behaviour="padding" style={styles.container}>
            <StatusBar style="light" />
            <Image source={{
                uri: "https://pbs.twimg.com/profile_images/1245828066200276995/gOuxVdfv_400x400.jpg",
            }}
            style={{width:200, height:200, borderRadius:15 }}
            />
            <View style={styles.inputContainer}>
                <Input
                  placeholder="Email" 
                  autofocus 
                  type="email" 
                  value={email} 
                  onChangeText={(text) => setEmail(text)}
                  />
                <Input 
                  placeholder="Password" 
                  secureTextEntry 
                  type="password" 
                  value={password} 
                  onChangeText={(text) => setPassword(text)}
                  onSubmitEditing = {signIn}
                 />
            </View>

            <Button containerStyle={styles.button} onPress={signIn} title="Login"/>
            <Button onPress={() => navigation.navigate("Register")} containerStyle={styles.button} type="outline" title="Register"/>
            <View style={{ height:100 }} />
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
        backgroundColor: "white",
    },
    inputContainer: {
        width: 300,

    },
    button: {
        width: 200,
        marginTop: 10,
    },
});
