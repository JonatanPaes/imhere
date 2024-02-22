import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { Participant } from '../../components/Participant'
import { styles } from './styles'

export function Home() {
  const participants = [
    'Jonatán',
    'Juninho',
    'John Doe',
    'Sofia',
    'Aisha',
    'Mikhail',
    'Ling',
    'Amelia',
    'Diego',
    'Fatima',
    'Igor',
    'Chloe',
    'Yuki',
    'Rashid',
    'Elena'
  ]

  function handleParticipantAdd() {}

  function handleParticipantRemove(name: string) {
    console.log(name)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.participantContainer}>
          {participants.map((participant) => (
            <Participant
              key={participant}
              name={participant}
              onRemove={() => handleParticipantRemove(participant)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  )
}
