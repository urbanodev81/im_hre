
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert} from 'react-native';
import {styles} from './styles'
import { Participant } from '../../components/Participant';

export function Home() {
  const participants = ['22222', '33333', '44444','55555','1111111','6666666','7777777','888888','9999999','10101010'];
  function handleParticipantAdd(){
    if(participants.includes('22222')){
      return Alert.alert("participante existe", '2222')
    }
    console.log("add button");

  }

  function handleParticipantRemove(name: string){
    console.log(`remover participante!${name}`);
    Alert.alert("Remover", `deseja remover ${name}?`,[
      {
        text: "Sim",
        onPress: () =>Alert.alert("Deltado"),
      },
      {
        text: "Não",
        style: 'cancel',
      }
    ]);
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

        {/* <ScrollView>
        {participants.map(participant => (
          <Participant
            key={participant}
            name={participant}
            onRemove={() => handleParticipantRemove({participant})}
            />
        ))}
        </ScrollView> */}
        <FlatList 
          data={participants}
          keyExtractor={item => item}
          renderItem={({item}) => (
          <Participant
              key={item}
              name={item}
              onRemove={() => handleParticipantRemove(item)}
              />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.listEmptyText}>
              Ninguém chegou, add.....
            </Text>
          )}
        />

        {/* <Participant name="assadasd" onRemove = {() => handleParticipantRemove("assadasd")} />
        <Participant name="qwewqe" onRemove = {() => handleParticipantRemove("qwewqe")} />
        <Participant name="vxcvxcvcx" onRemove = {() => handleParticipantRemove("vxcvxcvcx")} />
        <Participant name="hgkghkghk" onRemove = {() => handleParticipantRemove("hgkghkghk")} /> */}
    </View>
  );
}
