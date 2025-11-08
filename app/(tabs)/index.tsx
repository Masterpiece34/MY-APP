import { Image, Pressable, SafeAreaView, ScrollView, Text, TextInput } from 'react-native';

export default function Homescreen () {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style= {{color:"black", fontSize: 40}}>
          Hello 
        </Text>
        
        <Image 
      source={require ("@/assets/images/react-logo.png")}
      style={{width:200, height: 200}}
        />
        <Pressable>
        <TextInput style={{borderWidth:1, borderColor:"black"}}></TextInput>
        </Pressable>
      </ScrollView>
      </SafeAreaView>
  );
}