/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, ScrollView, View, TextInput, ImageBackground, TouchableOpacity } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  state = {
    email: '',
    password: '',
    enable: false
  }
  handleEmail = (text) => {
    this.setState({ email: text })
  }
  handlePassword = (text) => {
    this.setState({ password: text })
  }
  createAccount = (email, pass) => {
    alert('email: ' + email + ' password: ' + pass)
  }

  enable(email, pass) {
    if (email === "" || password === "") {
      alert('inserisci' + mail + 'inserisci' + pass)
    } else {
      this.setState({ enable: true })
    }
  }



  render() {
    return (
        <View style={styles.container}>
          <ImageBackground source={require('./photo.jpg')} style={{ width: '100%', height: '100%' }}>
            <View style={styles.bgImage}>

              <View>
                <Text style={styles.mainText}>REGISTRATI</Text>
                <Text style={styles.subText}>Schermata di registrazione</Text>
              </View>

              <View>
                <Text style={styles.formText}>LE MIE INFORMAZIONI</Text>

                <TextInput style={styles.inputCamp} placeholder="Nome" />
                <TextInput style={styles.inputCamp} placeholder="Email " onChangeText={this.handleEmail} />
                <TextInput style={styles.inputCamp} placeholder="Password" onChangeText={this.handlePassword} />

                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity style={styles.greyBtn}>
                    <Text style={{ color: 'white', alignSelf: 'center' }}>Uomo</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.greyBtn}>
                    <Text style={{ color: 'white', alignSelf: 'center' }}>Donna</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.okBtn}>
                  <Text style={{ color: 'white', alignSelf: 'center' }} onPress={
                    () => this.createAccount(this.state.email, this.state.password)
                  } >CREA ACCOUNT -></Text>
                </TouchableOpacity>

              </View>

            </View>
          </ImageBackground>
          <View>
                <Text style={styles.orText}>Oppure</Text>
                <TouchableOpacity style={styles.facebookbtn}>
                  <Text style={{ color: 'white', alignSelf: 'center' }}>Registrati con Facebook</Text>
                </TouchableOpacity>
              </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  bgImage: {
    paddingRight: 30,
    paddingLeft: 30,
    paddingTop: 40,
    paddingBottom: 30,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  mainText: {
    color: 'white',
    fontWeight: "bold",
    fontSize: 25,
  },
  subText: {
    color: 'white',
    fontSize: 15,
  },
  formText: {
    color: 'white',
    fontSize: 20,
    marginBottom: 15
  },
  inputCamp: {
    backgroundColor: "white",
    padding: 15,
    margin: 7
  },
  greyBtn: {
    backgroundColor: "#3e3d3d",
    padding: 20,
    flex: 1,
    textAlign: 'center'
  },
  okBtn: {
    backgroundColor: "#3e3d3d",
    padding: 20,
    marginTop: 15,
  },
  facebookbtn: {
    backgroundColor: "#3b5998",
    padding: 20,
    flex: 1,
    textAlign: 'center'
  },
  orText:{
    color: 'grey',
    fontWeight: "bold",
    fontSize: 25,
    textAlign: 'center'
  }
});


