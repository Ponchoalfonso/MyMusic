import React, { Component } from 'react';
import { 
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { getToken } from './api-client';

export default class LoginView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
        };
    }

    logIn = () => {
        getToken(this.state.username, this.state.password)
        .then(data => {
            global.token = data.token;
            Actions.home()
        })
        .catch(error => { console.warn(`${error}`)});
    }

    render() {
        return(
            <View style={styles.container}>
                <Image source={require('./assets/mymusic_logo.jpg')} style={styles.logo} resizeMode="contain" />
                <TextInput
                    style={styles.textInput}
                    onChangeText={username => this.setState({username})}
                    value={this.state.username}
                    placeholder={'Correo electrónico*'}
                    placeholderTextColor={'#000035'}
                    onSubmitEditing={() => { this.password.TextInput.focus(); }}
                    returnKeyType={'next'}
                    autoCompleteType='email'
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    autoCapitalize='none'
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={password => this.setState({password})}
                    value={this.state.password}
                    secureTextEntry= {true}
                    placeholder={'Contraseña'}
                    placeholderTextColor={'#000035'}
                    ref={input => {this.passwordTextInput = input; } }
                    returnKeyType={'done'}
                    onSubmitEditing={this.ingresar}
                    autoCompleteType='password'
                />
                <TouchableOpacity onPress={this.logIn} style={styles.boton}>
                    <Text style={styles.textoBoton}>
                        Log in
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
        backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:{
        width: 200,
        height: 80,
        flexDirection: 'row',
    },
    textInput:{
        height: 40,
        backgroundColor: '#f2f2f2',
        width: 230,
        color: '#000035',
        marginBottom: 40,
        borderRadius: 5,
        padding: 5,
    },
    boton:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 230,
        height: 40,
        backgroundColor: '#00ccd0',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#fff'
    },
    textoBoton:{
        color: '#fff',
        fontSize: 22,
    },
});