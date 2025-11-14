import styles from "@/constants/appStyles";
import { Button } from "@react-navigation/elements";
import { Link, router } from 'expo-router';
import { ScrollView, Text, TextInput, View } from 'react-native';
export default function index() {
  return (
    <ScrollView style = {styles.container}>
        { <Link href ="/(tabs)/profile">
        <Text> Go to Profile</Text>
        </Link> }
    <View >
        <Text style= {styles.heading}> Welcome Back</Text>
      <Text style= {styles.text}>Buy more for less</Text>
      
 <View>

    <Text style ={styles.label}>Email</Text>
    <TextInput onChange={(e) =>console.log(e.nativeEvent.text)}
    inputMode="email" style = {styles.textInput} placeholder="Enter your email here"></TextInput>
 </View>
 
 <View>
    <Button style={styles.button}
    onPress={()=>{router.push({pathname:"/(tabs)/profile", params:{name: 
        "emmanuel", age:25}})}} > Submit</Button>
 </View>
    </View>
    </ScrollView>

  )
};

