import React,{useState} from "react";
import { ImageBackground, ScrollView, StyleSheet, Text, View,TouchableOpacity, } from "react-native";
import { Center,Image,Stack,Heading,HStack,VStack, Box, Divider,NativeBaseProvider,Avatar,Icon,Button as Btn_NB} from 'native-base';
import { SafeAreaProvider } from "react-native-safe-area-context";
import {  Button, Card, Title, Paragraph, ProgressBar, MD3Colors,Avatar as AvatarReactPaper } from 'react-native-paper';
import { AntDesign,Ionicons, MaterialIcons, MaterialCommunityIcons,PaperProvider, Entypo, FontAwesome} from '@expo/vector-icons';
import { Modal, Portal,  Provider } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { useNavigation } from '@react-navigation/native';

const LeftContent = props => <HStack justifyContent="center" space={2}>
<Avatar bg="green.500" source={{
uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
}} style={{marginTop:-100,marginLeft:-30, width:90,height:90}} >
</Avatar>

</HStack>;


const image = { uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" };
const Story = props => <HStack justifyContent="flex-start" flexDirection='row' space={2}>
<Avatar bg="green.500" source={{
uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
}} >
</Avatar>
<View flexDirection='column'>
    <Title style={{fontWeight:'600'}}>Julia Mareta</Title>
    <View flexDirection='row'>
    <Text>19 menit yang lalu | </Text>
    <Btn_NB style={{marginTop:-11,marginLeft:-10}} variant="link">Idea</Btn_NB>
    </View>
</View>

</HStack>;


const PageHome = () => {
    const navigation = useNavigation(); 
const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: '#05B1A1',marginTop:-100,paddingTop:20, marginLeft:60,marginRight:10,width:250,alignItems:'center'};
 return (
    <SafeAreaProvider>
    <ScrollView>
        
    <View style={styles.container}>
    
    <NativeBaseProvider>
    <ImageBackground source={image}  style={styles.image}>
      
    </ImageBackground>
    <View >
  
        <TouchableOpacity activeOpacity={0.7} style={styles.touchableOpacityStyle} onPress={showModal}>
        
        <AvatarReactPaper.Icon  size={50} icon="camera" style={styles.floatingButtonStyle}/>
        </TouchableOpacity>
  </View>
    <View style={styles.card}>
        <Card style={styles.card}>
        <Card.Title style={{marginLeft:20,}} title="Skylar Vaccano" subtitle="✩✩✩✩✩" left={LeftContent} />
    <Card.Content>
    <View style={styles.text_header}>
    <Text style={{fontSize:15,fontWeight:'400'}}>Penulis | Politisi</Text>
    <Paragraph style={{textAlign:'center',fontWeight:'800'}}>"Hidup itu sederhana, kita yang membuatnya sulit."</Paragraph>
    </View>
     
    </Card.Content>
    <Card.Actions>
      <HStack space={2}>
      <Btn_NB style={{backgroundColor:'#05B1A1'}}>Postingan</Btn_NB>
      <Btn_NB style={{backgroundColor:'#05B1A1'}}  onPress={() => navigation.navigate('Pengikut')}>Pengikut</Btn_NB>
      <Btn_NB style={{backgroundColor:'#05B1A1'}}onPress={() => navigation.navigate('Mengikuti')}>Mengikuti</Btn_NB>
      </HStack>
    </Card.Actions>
        </Card>
        
        
      </View>
      <Card style={{ backgroundColor: '#ecf0f1', width: 350,  marginTop: 10 }} >
                            <Card.Content>
                            <HStack justifyContent="flex-start" flexDirection='row' space={2}>
                            <Ionicons name="ribbon-sharp" size={60} color="black" />
<View flexDirection='column'>
    <Title style={{fontWeight:'600'}}>Total Poin Anda</Title>
    <View flexDirection='row'>
    <Text>230 Klaim Reward </Text>
    
    </View>
    
</View>
<Btn_NB  variant="link" rightIcon={<Icon as={AntDesign} name="right"  size={30} />} style={{width:50,marginLeft:60}}/>

</HStack>
                            </Card.Content>
                        </Card>
      <View style={styles.progres}>
        <Text>Lengkapi Profil Anda 2/3</Text>
        <ProgressBar progress={0.7} color="brown" />
        </View>
        <View style={styles.menu_icon}>
        <Btn_NB  leftIcon={<Icon as={Ionicons} name="menu-outline" size={30} />} style={{width:50}}/>
        <Btn_NB variant="outline" leftIcon={<Icon as={MaterialCommunityIcons} name="lightbulb-on-outline" size={30} />} style={{width:50}}/>
        <Btn_NB variant="outline" leftIcon={<Icon as={MaterialIcons} name="article" size={30} />} style={{width:50}}/>
        <Btn_NB variant="outline" leftIcon={<Icon as={Entypo} name="bar-graph" size={30} />} style={{width:50}}/>
        <Btn_NB variant="outline" leftIcon={<Icon as={FontAwesome} name="users" size={30} />} style={{width:50}}/>
        </View>
        <Card style={{backgroundColor: 'white'}} >
    <Card.Content>
      <Story />
      <Paragraph>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, Selengkapnya...</Paragraph>
    </Card.Content>
  </Card>
  <View>
  
        <TouchableOpacity activeOpacity={0.7} style={styles.touchableOpacityStyle} onPress={showModal}>
        
        <AvatarReactPaper.Icon  size={50} icon="feather" style={styles.floatingButtonStyle2}/>
        </TouchableOpacity>
  </View>
  <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
        <HStack space={20} >
        <TouchableOpacity>
        <MaterialCommunityIcons name="camera-wireless" size={50} color="white" />
        <Text style={{color:'white',}}>camera</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <FontAwesome name="picture-o" size={50} color="white" />
        <Text style={{color:'white',}}>Galery</Text>
        </TouchableOpacity>
       
        </HStack>
        <Divider style={{marginTop:10,marginBottom:10}} width={245}/>
        <Title style={{color:'white',marginBottom:10}}>Hapus Gambar Banner</Title>
        <Btn_NB  style={{width:250,backgroundColor:'white'}} onPress={hideModal}><Text>Batal</Text></Btn_NB>
        </Modal>
      </Portal>
     
      {/* <Button style={{marginTop: 30}} onPress={showModal}>
        Show
      </Button> */}
    </Provider>
   
    </NativeBaseProvider>
  </View>
    </ScrollView>
 </SafeAreaProvider>
 )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height:200,
    width:500
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
   
    marginTop:-30
    
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
   
    
    
  },
  menu_icon: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection:'row',
    padding: 10,
 
    
    
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
    borderRadius:100,
  color:'white',
    backgroundColor:'#05B1A1',
    marginTop:-50
  },
  floatingButtonStyle2: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    borderRadius:100,
  color:'white',
    backgroundColor:'#05B1A1',
    
  },
});

export default () => {
    return (
      <NativeBaseProvider>
        <Center flex={1} >
          <PageHome />
          
        </Center>
      </NativeBaseProvider>
    );
  };