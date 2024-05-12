import React from 'react'
import { Button, SafeAreaView, StyleSheet, TextInput} from 'react-native'

const App = () => {
  const [text, onChangeText] = React.useState('');
  return (
 <SafeAreaView >
   <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder='Enter todo here...'
        value={text}
      />
      <Button
        title="Add"
        onPress={() => console.log("todo added")}
      />
 </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App