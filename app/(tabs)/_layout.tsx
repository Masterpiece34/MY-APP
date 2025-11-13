import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        // Sets the title AND icon color when the tab is selected/active
        tabBarActiveTintColor: 'orange', 
        // Sets the title AND icon color when the tab is not selected
        tabBarInactiveTintColor: '000000', // Light gray color
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name='home' color={color} />,
        }}
        
        
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name='person' color={color} />,
        }}
        
        
      />

      <Tabs.Screen
        name="sensor"
        options={{
          title: 'Sensor',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name='sensors' color={color} />,
        }}
        
        
      />
     
    </Tabs>
  );
}
