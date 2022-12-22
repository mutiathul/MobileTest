import * as React from 'react';
import {View,Text} from 'react-native';
import { List,Divider, Title} from 'react-native-paper';
import { MaterialCommunityIcons, AntDesign, Entypo, Feather } from "@expo/vector-icons";
import { Icon, Center, HStack, NativeBaseProvider } from "native-base";
const Profil = () => (
  <View>
    <View>
    <Title style={{color:'#05B1A1', padding:10, marginBottom:-20}}>Pekerjaan</Title>
<List.Item
    title={()=><View><Text style={{fontWeight:'400',fontSize:18,lineHeight:25}}>Grapich Design {'\n'}Opinia{'\n'}(2008-Sekarang)</Text></View>}
  //  description = {()=><View><Text>ddsdds</Text></View>}
    left={() => <List.Icon icon="bag-suitcase" />}
  />
    </View>
  <Divider />
  <View>
    <Title style={{color:'#05B1A1', padding:10, marginBottom:-20}}>Pendidikan</Title>
<List.Item
    title={()=><View><Text style={{fontWeight:'400',fontSize:18,lineHeight:25}}>Design Engineering {'\n'}Politeknik Manufaktur negeri Bandung{'\n'}(2011-2013)</Text></View>}
  //  description = {()=><View><Text>ddsdds</Text></View>}
    left={() => <List.Icon icon="school" />}
  />
    </View>
  <Divider />
  <View>
    <Title style={{color:'#05B1A1', padding:10, marginBottom:-20}}>Tempat Tinggal</Title>
<List.Item
    title={()=><View><Text style={{fontWeight:'400',fontSize:18,lineHeight:25}}>Bekasi {'\n'}(2011-2013)</Text></View>}
  //  description = {()=><View><Text>ddsdds</Text></View>}
    left={() => <List.Icon icon="google-maps" />}
  />
    </View>
  <Divider />
  <View>
    <Title style={{color:'#05B1A1', padding:10, marginBottom:-20}}>Hobi</Title>
<List.Item
    title={()=><View><Text style={{fontWeight:'400',fontSize:18,lineHeight:25}}>Musik</Text></View>}
  //  description = {()=><View><Text>ddsdds</Text></View>}
    left={() => <List.Icon icon="fountain-pen"  />}
  />
    </View>
  <Divider />
  <View>
    <Title style={{color:'#05B1A1', padding:10, marginBottom:-20}}>Website :</Title>
<List.Item
    title={()=><View><Text style={{fontWeight:'400',fontSize:18,lineHeight:25}}>www.gdsagdsagdsa.com</Text></View>}
  //  description = {()=><View><Text>ddsdds</Text></View>}
    left={() => <List.Icon icon="web"  />}
  />
    </View>
  <Divider />
  
  </View>
  
);

export default Profil;