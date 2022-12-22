import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import PageHome from './PageHome';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Appbar } from 'react-native-paper';
import Profil from './Profil'
import Pengikut from './Pengikut'
import Mengikuti from './Mengikuti';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     
     <PageHome />
    </View>
  );
}

function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search!</Text>
    </View>
  );
}
function GroupScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Group!</Text>
    </View>
  );
}
function ChatScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Chat!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs({ navigation }) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        headerTitle: () => (
          <View style={styles.header}>
            <View style={styles.back_header}>
              <Ionicons name="arrow-back-outline" size={30} color="black" />
            </View>
            <View style={styles.text_header}>
              <Text style={{ marginLeft: 10, fontSize: 18, }}>Home</Text>
            </View>
            <View style={styles.navbar}>
              <View style={styles.icon_navbar}>
                <Ionicons name="share-social-sharp" size={30} color="black" />

              </View>
              <View style={styles.icon_navbar}>
                <TouchableOpacity onPress={() => navigation.navigate('Profil')}>
                <MaterialCommunityIcons name="account" size={30} color="black" />
                </TouchableOpacity>

              </View>
            </View>


          </View>


        ),
        tabBarIcon: ({ color }) => (
          <Ionicons name="home" color={color} size={26} />
        ),
      }} />
      <Tab.Screen name="Search" component={SearchScreen} options={{
        headerTitle: () => (
          <View style={styles.header}>
            <View style={styles.back_header}>
              <Ionicons name="arrow-back-outline" size={24} color="black" />
            </View>
            <View style={styles.text_header}>
              <Text style={{ marginLeft: 10, fontSize: 18, }}>Search</Text>
            </View>
            <View style={styles.navbar}>
              <View style={styles.icon_navbar}>
                <Ionicons name="share-social-sharp" size={24} color="black" />

              </View>
              <View style={styles.icon_navbar}>
                <MaterialCommunityIcons name="account" size={24} color="black" />

              </View>
            </View>

          </View>

        ),
        tabBarIcon: ({ color }) => (
          <Ionicons name="md-search" color={color} size={26} />
        ),
      }} />

      <Tab.Screen name="Group" component={GroupScreen} options={{
        headerTitle: () => (
          <View style={styles.header}>
            <View style={styles.back_header}>
              <Ionicons name="arrow-back-outline" size={24} color="black" />
            </View>
            <View style={styles.text_header}>
              <Text style={{ marginLeft: 10, fontSize: 18, }}>Group</Text>
            </View>
            <View style={styles.navbar}>
              <View style={styles.icon_navbar}>
                <Ionicons name="share-social-sharp" size={24} color="black" />

              </View>
              <View style={styles.icon_navbar}>
                <MaterialCommunityIcons name="account" size={24} color="black" />

              </View>
            </View>

          </View>

        ),
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="groups" color={color} size={26} />
        ),
      }} />
      <Tab.Screen name="Chat" component={ChatScreen} options={{
        headerTitle: () => (
          <View style={styles.header}>
            <View style={styles.back_header}>
              <Ionicons name="arrow-back-outline" size={24} color="black" />
            </View>
            <View style={styles.text_header}>
              <Text style={{ marginLeft: 10, fontSize: 18, }}>Chat</Text>
            </View>
            <View style={styles.navbar}>
              <View style={styles.icon_navbar}>
                <Ionicons name="share-social-sharp" size={24} color="black" />

              </View>
              <View style={styles.icon_navbar}>
                <MaterialCommunityIcons name="account" size={24} color="black" />

              </View>
            </View>

          </View>

        ),
        tabBarIcon: ({ color }) => (
          <Ionicons name="md-chatbubbles" color={color} size={26} />
        ),
      }} />
    </Tab.Navigator>
  );
}


function ProfilScreen({navigation }) {
  return (
    <View style={styles.container}>
       <SafeAreaProvider>
<Appbar.Header style={{height:50, backgroundColor:'white'}}>
      <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
      
    </Appbar.Header>

    <Profil />
    </SafeAreaProvider>
      
    </View>
  );
}
function PengikutScreen({navigation }) {
  return (
    <View style={styles.container}>
       <SafeAreaProvider>
<Appbar.Header style={{height:50, backgroundColor:'white'}}>
      <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
      <Appbar.Content title="Pengikut" />
    </Appbar.Header>

    
    <Pengikut />
    </SafeAreaProvider>
      
    </View>
  );
}
function MengikutiScreen({navigation }) {
  return (
    <View style={styles.container}>
       <SafeAreaProvider>
<Appbar.Header style={{height:50, backgroundColor:'white'}}>
      <Appbar.BackAction onPress={() => navigation.navigate('Home')} />
      <Appbar.Content title="Mengikuti" />
    </Appbar.Header>

    
    <Mengikuti />
    </SafeAreaProvider>
      
    </View>
  );
}
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator screenOptions={{ headerShown: false }}initialRouteName="Home" >
        <Stack.Screen   name="Home" component={MyTabs} />
        <Stack.Screen name="Profil" component={ProfilScreen}/>
          <Stack.Screen   name="PageHome" component={PageHome} />
          <Stack.Screen name="Pengikut" component={PengikutScreen}/>
          <Stack.Screen name="Mengikuti" component={MengikutiScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  header: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: 'row'
  },
  navbar: {

    flexDirection: 'row',


    height: 40,
    margin: 4,

  },
  text_header: {
    width: 100,
    height: 40,
    margin: 4,
    alignItems: "center",
    marginRight: 50


  },
  back_header: {
    width: 100,
    height: 40,
    margin: 4,
    alignItems: "flex-start"


  },
  icon_navbar: {
    alignItems: 'flex-end',
    marginRight: 10

  },
});

