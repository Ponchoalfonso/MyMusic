import React, { Component } from 'react';
import { 
    Platform,
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import { Action } from 'react-native-router-flux';
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
        .catch(error => { console.warn(error); });
    }

    render() {
        return(
            <View style={style.container}>
                <Image source={require('./assets/mymusic_logo.jpg')} style={styles.logo} resizeMode="contain" />
                <TextInput
                    style={styles.textInput}
                    onChangeText={username => this.setState({username})}
                    value={this.state.username}
                    placeholder={'Correo electrónico*'}
                    placeholderTextColor={'#000035'}
                    onSubmitEditing={() => { this.password.TextInput.focus(); }}
                    returnKeyType={'next'}
                />
                <TextInput
                    style={styles.textInput}
                    onChangeText={password => this.setState({password})}
                    value={this.state.username}
                    secureTextEntry= {true}
                    placeholder={'Contraseña'}
                    placeholderTextColor={'#000035'}
                    ref={input => {this.passwordTextInput = input; } }
                    returnKeyType={'done'}
                    onSubmitEditing={this.ingresar}
                />
                <TouchableOpacity onPress={this.ingresar} style={styles.boton} />
                <Text style={styles.textoBoton}>
                    Log in
                </Text>
            </View>
        );
    }
}
