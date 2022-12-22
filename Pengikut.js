import React, { useState } from "react";
import { ImageBackground, ScrollView, StyleSheet, Text, View, TouchableOpacity, } from "react-native";
import { Center, Image, Stack, Heading, HStack, VStack, Box, Divider, NativeBaseProvider, Avatar, Icon, Button as Btn_NB } from 'native-base';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button, Card, Title, Paragraph, ProgressBar, MD3Colors, Avatar as AvatarReactPaper } from 'react-native-paper';
import { AntDesign, Ionicons, MaterialIcons, MaterialCommunityIcons, PaperProvider, Entypo, FontAwesome } from '@expo/vector-icons';
import { Modal, Portal, Provider } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { useNavigation } from '@react-navigation/native';



const PengikutPage = () => {
    
    return (
        <SafeAreaProvider>
            <ScrollView>

                <View >

                    <NativeBaseProvider>


                        <Card style={{ backgroundColor: '#ecf0f1', width: 350, borderRadius: 100, marginTop: 10 }} >
                            <Card.Content>
                                <HStack justifyContent="space-between" flexDirection='row' >
                                    <Avatar bg="green.500" source={{
                                        uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                    }} >
                                    </Avatar>
                                    <Text style={{ fontWeight: '600',fontSize:20,marginTop:10, }}>Julia Mareta</Text>
                                    <Btn_NB style={{ marginTop: -11, marginLeft: -10,borderRadius:50,width:100,marginTop:2 }} >Pengikut</Btn_NB>

                                </HStack>
                            </Card.Content>
                        </Card>
                        <Card style={{ backgroundColor: '#ecf0f1', width: 350, borderRadius: 100, marginTop: 10 }} >
                            <Card.Content>
                                <HStack justifyContent="space-between" flexDirection='row' >
                                    <Avatar bg="green.500" source={{
                                        uri: "https://cdnwpseller.gramedia.net/wp-content/uploads/2022/05/07090859/877766976.jpg"
                                    }} >
                                    </Avatar>
                                    <Text style={{ fontWeight: '600',fontSize:20,marginTop:10, }}>Rapik Kurnia</Text>
                                    <Btn_NB style={{ marginTop: -11, marginLeft: -10,borderRadius:50,width:100,marginTop:2 }} >Pengikut</Btn_NB>

                                </HStack>
                            </Card.Content>
                        </Card>
                        
                        <Card style={{ backgroundColor: '#ecf0f1', width: 350, borderRadius: 100, marginTop: 10 }} >
                            <Card.Content>
                                <HStack justifyContent="space-between" flexDirection='row' >
                                    <Avatar bg="green.500" source={{
                                        uri: "https://1.bp.blogspot.com/-RPGp4Eje730/YW5C9dgtRfI/AAAAAAAANWs/30vLRCpOHzErApaTkfoSqJ2Jgo28gLj5ACLcBGAsYHQ/s0/cewek-cantik-bisa-menerima-apa-adanya.webp"
                                    }} >
                                    </Avatar>
                                    <Text style={{ fontWeight: '600',fontSize:20,marginTop:10, }}>Lola Lita</Text>
                                    <Btn_NB style={{ marginTop: -11, marginLeft: -10,borderRadius:50,width:100,marginTop:2 }} >Pengikut</Btn_NB>

                                </HStack>
                            </Card.Content>
                        </Card>
                        
                        <Card style={{ backgroundColor: '#ecf0f1', width: 350, borderRadius: 100, marginTop: 10 }} >
                            <Card.Content>
                                <HStack justifyContent="space-between" flexDirection='row' >
                                    <Avatar bg="green.500" source={{
                                        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtfZzRDbzgj08fom3_LkJVpVSTorOwKPkH1XR5s5nyYomgjNleypu1wo_fJllJgYqs3Y0&usqp=CAU"
                                    }} >
                                    </Avatar>
                                    <Text style={{ fontWeight: '600',fontSize:20,marginTop:10, }}>Lisa Kirana</Text>
                                    <Btn_NB style={{ marginTop: -11, marginLeft: -10,borderRadius:50,width:100,marginTop:2 }} >Pengikut</Btn_NB>

                                </HStack>
                            </Card.Content>
                        </Card>
                        
                        <Card style={{ backgroundColor: '#ecf0f1', width: 350, borderRadius: 100, marginTop: 10 }} >
                            <Card.Content>
                                <HStack justifyContent="space-between" flexDirection='row' >
                                    <Avatar bg="green.500" source={{
                                        uri: "data:image/jpeg;base64,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"
                                    }} >
                                    </Avatar>
                                    <Text style={{ fontWeight: '600',fontSize:20,marginTop:10, }}>Charlie Calzoni</Text>
                                    <Btn_NB style={{ marginTop: -11, marginLeft: -10,borderRadius:50,width:100,marginTop:2 }} >Pengikut</Btn_NB>

                                </HStack>
                            </Card.Content>
                        </Card>
                        
                        


                    </NativeBaseProvider>
                </View>
            </ScrollView>
        </SafeAreaProvider>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center",
        height: 200,
        width: 500
    },
    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#ecf0f1',
        marginTop: -30

    },
    paragraph: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20
    },
    text_header: {

        alignItems: "center",

    },
    progres: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#ecf0f1',


    },
    menu_icon: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#ecf0f1',


    },
    touchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },
    floatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        borderRadius: 100,
        color: 'white',
        backgroundColor: '#05B1A1',
        marginTop: -50
    },
    floatingButtonStyle2: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        borderRadius: 100,
        color: 'white',
        backgroundColor: '#05B1A1',

    },
});

export default () => {
    return (
        <NativeBaseProvider>
            <Center flex={1} >
                <PengikutPage />

            </Center>
        </NativeBaseProvider>
    );
};