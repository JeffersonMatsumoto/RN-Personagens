import React, { Component } from "react";
import { Image, Text, StyleSheet, View, FlatList, ScrollView } from "react-native";
import api from "../services/api";
// import { url } from "inspector";

class Personagens extends Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Image source={require("../assets/img/lista-personagens.png")}
                style={styles.tabNavigatorIcon} />
        )
    };

    constructor(props) {
        super(props);
        this.state = {
            listaPersonagens: []
        };
    }

    componentDidMount() {
        // realizar a chamada a api
        this.buscarPersonagens();
    }

    buscarPersonagens = async () => {
        const resposta = await api.get("/personagens");
        const dadosDaApi = resposta.data;
        this.setState({ listaPersonagens: dadosDaApi });
    };


    render() {
        return (
            <ScrollView >
                <View style={{ backgroundColor: '#A9AFE1', minHeight: '100%' }}>
                    <Text
                        // style={styles.tituloText}
                        style={{ borderWidth: 2, padding: 5, borderColor: 'white', textAlign: 'center', fontSize: 25, margin: 50, color: 'white' }}
                    >
                        Lista de personagens
                    </Text>

                    <View>
                        <FlatList
                            data={this.state.listaPersonagens}
                            keyExtractor={item => item.nome}
                            renderItem={this.renderizaItem}
                        />
                    </View>

                </View>
            </ScrollView>
        );
    }

    renderizaItem = ({ item }) => (
        <View>
            <View style={{ flexDirection: 'row', marginBottom: 30, marginHorizontal: 10, padding: 20, backgroundColor: 'white', borderBottomWidth: 10, borderColor: '#707070' }}>
                
                <Image
                    style={{ borderWidth: 2, borderColor: 'gray', width: 100, height: 100 }}
                    source={{ uri: item.urlImagem }}
                />
                <View style={{ marginLeft: '5%', flexDirection: 'column', alignSelf: 'center'}}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontWeight: 'bold' }}> Nome: </Text>
                        <Text>  {item.nome} </Text>
                    </View>
                    <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                        <Text style={{ fontWeight: 'bold' }}> Título: </Text>
                        <Text>  {item.lancamento} </Text>
                    </View>
                </View>
                {/* <Text>{item.urlImagem}</Text> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    tabNavigatorIcon: {
        width: 35,
        height: 35,
        marginTop: 10,
        tintColor: "white"
    }
})

export default Personagens;