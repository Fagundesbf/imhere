import { View, Text, TextInput, TouchableOpacity, ScrollView, FlatList, Alert } from "react-native";

import { styles } from "./styles";
import { Participant } from "../../components/Participant"

export default function Home() {

  const participants = [
    "Fábio",
    "Nicole",
    "Luana",
    "Bianca",
    "Alice",
    "Michele",
    "Bruno",
    "Elivelton",
    "Amanda",
    "Fernanda",
    "otavio",
    "Joào"
  ];
  
  function handleParticipantAdd() {
      if(participants.includes('Fábio')){
          return Alert.alert(
            "Participante existe!", 
            "Já existe um participante na lista com esse nome."
          )
      }
  }

  function handleParticipantRemove(name: string){
    Alert.alert(
      "Remover",
      `Remover o participante ${name}?`,
       [
        {
         text:"Sim",
         onPress: () => { Alert.alert("Deletado!")}
        },
        {
          text:"Não",
          style:"cancel"
        }
    ] 
      );
    console.log(`Participante removido ${name}`);
  }
 


  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Quarta-feira, 4 de Março de 2024</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* <ScrollView 
         showsVerticalScrollIndicator={false}>
              {
                participants.map(participant=>(
                  <Participant 
                    name={participant}
                    key={participant} 
                    onRemove={()=>handleParticipantRemove(participant)}
                    />
                ))
              }
      </ScrollView> */}


      <FlatList
           data={participants}
           keyExtractor={item => item}
           showsVerticalScrollIndicator={false}
           renderItem={({item})=>(
                <Participant 
                    name={item}
                    key={item} 
                     onRemove={()=>handleParticipantRemove(item)}
          />
          )}
          ListEmptyComponent={()=>(
             <Text style={styles.listEmptyText}>
               Niguém chegou no evento ainda? Adicione participantes a sua lista de presença!
             </Text>
            
          )}
      />

   
      
    </View>
    
  );
}
