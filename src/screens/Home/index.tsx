import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'

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

      <FlatList
        data={participants}
        contentContainerStyle={{ gap: 10 }}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant key={item} name={item} onRemove={() => handleParticipantRemove(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença
          </Text>
        )}
      />
    </View>
  )
}
