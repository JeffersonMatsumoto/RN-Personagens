import React, { Component } from "react";

import { Text, Image, StyleSheet, View, FlatList, ScrollView } from "react-native";

// https://stackoverflow.com/questions/38830568/how-to-show-svg-file-on-react-native
import Svg, { Rect, Circle } from 'react-native-svg';
// https://github.com/vault-development/react-native-svg-uri
import SvgUri from 'react-native-svg-uri';

class Desenvolvedor extends Component {


    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require("../assets/img/sobre-mim.png")}
                style={styles.tabNavigatorIcon}
            />
        )
    };

    render() {
        return (
            <ScrollView>
                <View style={{ backgroundColor: '#e1a8a8', minHeight: '100%', minWidth: '100%' }}>

                    <Text
                        // style={styles.tituloText}
                        style={{ borderWidth: 2, padding: 5, borderColor: 'white', textAlign: 'center', fontSize: 21, marginHorizontal: 50, marginTop: 50, marginBottom: 25, color: 'white' }}
                    >
                        Informações do desenvolvedor
                    </Text>

                    {/* <View style={{ width: '100%', height: '100%' }}> */}
                    <Image
                        source={require("../assets/img/garoto.png")}
                        style={{ width: 150, height: 150, alignSelf: 'center' }}
                    />
                    {/* </View> */}

                    <View style={{ flexDirection: 'row', padding: 30, borderBottomWidth: 2, borderTopWidth: 2, borderColor: '#a3a3a3' }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>
                            NOME:
                    </Text>
                        <Text style={styles.textInformation}>Jefferson</Text>
                    </View>

                    <View style={{ flexDirection: 'row', padding: 30, borderColor: '#a3a3a3' }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>
                            CURSO:
                    </Text>
                        <Text style={styles.textInformation}>Desenvolvimento de sistemas</Text>
                    </View>

                    <View style={{ flexDirection: 'row', padding: 30, borderBottomWidth: 2, borderTopWidth: 2, borderColor: '#a3a3a3' }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>
                            ESCOLA:
                    </Text>
                        <Text style={styles.textInformation}>Senai de informática</Text>
                    </View>

                    <View style={{ width: '100%', justifyContent: 'center', flexDirection: 'row', margin: 10}}>
                        <View style={{  padding: 10 }}>
                            <Image style={{  width: 40 , height: 40 }} source={require("../assets/img/facebook.png")}></Image>
                        </View>
                        <View style={{  padding: 10 }}>
                            <Image style={{  width: 40 , height: 40 }} source={require("../assets/img/github.png")}></Image>
                        </View>
                        <View style={{  padding: 10 }}>
                            <Image style={{ width: 40 , height: 40 }} source={require("../assets/img/twitter.png")}></Image>
                        </View>
                    </View>

                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    tabNavigatorIcon: {
        width: 45,
        height: 45,
        marginTop: 10,
        tintColor: "white"
    },
    textInformation: {
        fontSize: 15,
        fontWeight: '100',
        marginLeft: 7,
        textAlignVertical: 'center'
    }
})

export default Desenvolvedor;