import styles from "@/constants/appStyles";
import { Button } from "@react-navigation/elements";
import { Link, router, useLocalSearchParams } from 'expo-router';

import { ScrollView, Text, View } from 'react-native';
export default function Profile() {
    const{name, age} = useLocalSearchParams();
  return (
    <ScrollView style = {styles.container}>

         <Button style = {styles.button} onPress={()=>{router.push({pathname:"/(tabs)/profile", params:{name: 
                "emmanuel" } })}} > Click me</Button>
    <View >
      <Text style= {styles.heading}>Name:{name}</Text>
      <Text style= {styles.heading}>Age:{age}</Text>
     
 </View>
 <View> </View>
<Link href ="/(tabs)/sensor">
        <Text> Go to Sensor Page</Text>
        </Link>
    
    </ScrollView>

  )
};

