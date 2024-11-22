import { CirclePlusIcon } from 'lucide-react-native'
import { TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { useState } from 'react'

type FormProps = {
  onCreate: (taskDescription: string) => void
}

export function Form({ onCreate }: FormProps) {
  const [newTask, setNewTask] = useState('')

  function handleNewTask(description: string) {
    setNewTask(description)
  }

  function handleCreateTask() {
    onCreate(newTask)
    setNewTask('')
  }

  return (
    <View style={styles.form}>
      <TextInput
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        style={styles.input}
        onChangeText={handleNewTask}
        value={newTask}
        enterKeyHint="send"
        returnKeyType="send"
        onSubmitEditing={() => {
          handleCreateTask()
        }}
      />

      <TouchableOpacity style={styles.button} onPress={handleCreateTask}>
        <CirclePlusIcon style={styles.buttonIcon} />
      </TouchableOpacity>
    </View>
  )
}
