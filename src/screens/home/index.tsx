
import { Text, TextComponent, View } from 'react-native';
import {styles} from './styles'
export function Home() {
  return (
    <View style={styles.container}>
      <Text key='1' style={styles.eventName}>Open up App.tsx to start working on your app!33</Text>
      <Text key='2' style={{ 
        color:'red',
        fontSize: 16
       }}>Open up App.tsx to start working on your</Text>
       <Text style={styles.eventDate}>
        é hoje
       </Text>
    </View>
  );
}
