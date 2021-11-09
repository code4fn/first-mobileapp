import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button, Alert} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

function StartScreen(props){
  return (
      <View style={styles.container}>
      <Text style={styles.textHeader}>Learn React Native</Text>
      <Image style={styles.imageSize} source ={require('./assets/images/image.png')} />
      <Text style={styles.textParagraph}>A great way app to learn React Native components and other features. 
      This also a great way to start building your own mobile application using react native.</Text>
      <Text style={styles.textName}>By Albert Pangan</Text>
      <TouchableOpacity onPress={()=> props.navigation.replace('Home')} style={{backgroundColor:'#27ae60', paddingVertical:10, paddingHorizontal:120, borderRadius:8, alignItems:'center'}}>
        <Text style={styles.textButton}>Get Started</Text>
      </TouchableOpacity>
      </View>
  );
}

function Home(props){
  return (
   <View style={styles.container}>
     <ScrollView>
     <Text style={styles.textHomeHeader}>Steps in Creating your React Native App</Text>
     <Text style={styles.textHomeDetails}>1. Create a Folder for the project</Text>
     <Text style={styles.textHomeDetails}>2. Navigate to the folder and Install Expo CLI. To install type "npm install -g expo-cli" in Command Prompt.</Text>
     <Text style={styles.textHomeDetails}>3. Create React Native App using the following command "expo init (ProjectNameFolder)". </Text>
     <Text style={styles.textHomeDetails}>4. Select "Blank Project" - a minimal app clean as an empty canvas. </Text>
     <Text style={styles.textHomeDetails}>5. Navigate to the project folder by typing in the Command Prompt "cd (ProjectNameFolder)".</Text>
     <Text style={styles.textHomeDetails}>6. After that try to execute the outcome through AVD or Webpage, you can also run directly through your Mobile Phone by just typing
     "npm start".</Text>
     </ScrollView>
   </View>
  );
}

function Services(){
  return (
   <View style={styles.container}>
     <ScrollView>
     <Text style={styles.textParagraph}>Here are some services a user might acquire for using this application. This application will also help them to be a future mobile applications developers.</Text>
     <Image style={styles.imageSize2} source ={require('./assets/images/develop.png')} />
     <Text style={styles.textParagraph}>Through using this application, it is guaranteed that user will be able to develop a simple mobile application using React Native.</Text>
     <Image style={styles.imageSize2} source ={require('./assets/images/innovation.png')} />
     <Text style={styles.textParagraph}>A user also acquire to critical thinking since it is very essential skills in developing a software program or a mobile application.</Text>
     <Image style={styles.imageSize2} source ={require('./assets/images/ct.png')} />
     <Text style={styles.textParagraph}>A user also acquire analytical skills inorder to analyze, organize and think for an alternative solution in a real life problem.</Text>
     </ScrollView>
   </View>
  );
}

function About(){
  return (
   <View style={styles.container}>
     <Image style={styles.imageGif} source ={require('./assets/images/gifimg.gif')} />
     <Text style={styles.textInfo}>React Native is an open-source UI software framework created by Meta Platforms, Inc. It is used to develop applications for Android,
      Android TV, iOS, macOS, tvOS, Web, Windows and UWP by enabling developers to use the React framework along with native platform capabilities.
      React Native was initally released on March 26, 2015 and was stable released on August 19, 2021. React Native was initally released on March 26, 2015 
      and was stable released on August 19, 2021.</Text>
      <Text style={styles.textCitation}>Read more information about react native on: https://en.wikipedia.org/wiki/React_Native</Text>
      <Text style={styles.textWebsite}>Visit their official Website for installation and other purposes: https://reactnative.dev/</Text>
   </View>
  );
}

function Gallery(){
  return (
   <View style={styles.container}>
     <ScrollView>
     <Text style={styles.textHomeDetails}>Example of Codes in React Native</Text>
     <Image style={styles.imageSize3} source ={require('./assets/images/code.png')} />
     <Image style={styles.imageSize3} source ={require('./assets/images/code2.png')} />
     <Image style={styles.imageSize3} source ={require('./assets/images/code3.png')} />
     </ScrollView>
   </View>
  );
}

const MyFunction = () => Alert.alert('Message Sent!'); 

function Contact(){
  return (
   <View style={styles.container}>
     <ScrollView>
     <Text style={styles.textContact}>If you have questions or suggestions through the application you can send me a message through my email qampangan@tip.edu.ph. It would also be great if you will sent any feedbacks 
       about your experiences using this application for me to optimize and improve more in developing this application. 
       I will read your messages and reply to your questions or suggestions as soon as possible. You can also contact me through this app. 
     </Text>
     <Text style={styles.textContactLabel}>Name</Text>
     <TextInput style={styles.inputDesign}/>
      <Text style={styles.textContactLabel}>Email</Text>
      <TextInput style={styles.inputDesign}/>
      <Text style={styles.textContactLabel}>Reply</Text>
      <TextInput style={styles.inputDesign2}/>
      <Button title="submit" onPress={MyFunction}/>
      </ScrollView>
   </View>
  );
}
const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();
function DrawerRoutes() {
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home Page" component={Home} />
        <Drawer.Screen name="Services" component={Services} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Gallery" component={Gallery} />
        <Drawer.Screen name="Contact" component={Contact} />
      </Drawer.Navigator>
  );
}

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="Home" component={DrawerRoutes} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    alignItems: 'center',
  },

  inputDesign: {
    width:"90%",
    height:30,
    marginLeft:20,
    backgroundColor:'#fff',
    marginBottom:20,
    fontStyle:'italic'
  }, 

  inputDesign2: {
    width:"90%",
    height:120,
    marginLeft: 20,
    backgroundColor:'#fff',
    marginBottom:20,
    fontStyle:'italic'
  }, 

  textContactLabel:{
    alignItems:'center',
    marginLeft:20,
    fontSize:20,
    color:'#fff'
  },

  textContact:{
    alignItems:'center',
    margin:15,
    fontSize:20,
    color:'#fff'
  },

  textHomeDetails:{
    alignItems:'center',
    margin:15,
    fontSize:20,
    color: '#fff'
  },

  textHomeHeader: {
    fontSize:30,
    margin:15,
    color: '#fff'
  },

  textHeader: {
    fontSize:30,
    margin:40,
    padding: 10,
    color: '#fff'
  },

  textWebsite:{
    fontSize:15,
    alignItems: 'center',
    margin: 20,
    fontStyle:'italic',
    color:'#fff',
  },

  imageGif:{
    width: 250,
    height: 150,
    resizeMode: 'contain',
    alignItems:'center'
  },

  imageSize3: {
    width:400,
    height:400,
    resizeMode:'contain',
    alignItems:'center'
  },

  imageSize2: {
    width:200,
    height:200,
    resizeMode:'contain',
    alignItems:'center',
    margin: 15,
  },

  imageSize: {
    width:300,
    height:300,
    resizeMode:'contain',
    alignItems:'center'
  },

  textParagraph: { 
    fontSize:16,
    margin:20,
    color:'#fff',
    alignItems:'center'
  },

  textCitation: { 
    fontSize:15,
    fontStyle:'italic',
    color:'#fff',
  },

  textInfo: { 
    fontSize:15,
    color:'#fff',
    alignItems:'center',
    justifyContent:'center',
    margin:15,
  },

  textName: {
    fontSize:15,
    fontStyle:'italic',
    color:'#fff',
    margin:10
  },

  textButton:{
    color:"#fff",
    fontSize: 18
  }
});
