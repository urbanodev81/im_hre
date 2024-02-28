
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import {styles} from './styles'
import { Participant } from '../../components/Participant';

export function Home() {

  function handleParticipantAdd(){
    console.log("add button");
  }

  return (
    <View style={styles.container}>
      <Text key='1' style={styles.eventName}>Open up App.tsx to stdddart working on your app!33</Text>
      <Text key='2' style={{ 
        color:'red',
        fontSize: 16
       }}>Open up App.tsx to start wssorking on your</Text>
       <Text style={styles.eventDate}>
        é hoje
       </Text>
       <View style={styles.form}>
        <TextInput
        style={styles.input}
        placeholder='Nome do participante'
        placeholderTextColor="#6B6B6B" />
        <TouchableOpacity onPress={handleParticipantAdd}
          style={styles.button}>
            <Text style={styles.buttonText}>
              +
            </Text>
          </TouchableOpacity>
        </View>
        <Participant />
    </View>
  );
}
