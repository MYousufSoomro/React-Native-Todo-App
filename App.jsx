import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollViewComponent,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const App = () => {
  const [text, onChangeText] = React.useState('');
  const [todos, setTodos] = React.useState([]);

  const addTodo = () => {
    // console.log(text)
    setTodos([...todos, text]);
    onChangeText('');
  };
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Enter todo here..."
        value={text}
      />
      <Button title="Add" onPress={addTodo} />
      <View style={styles.container}>
        {todos.map((todos, index) => {
          return (
            <Text key={index} style={styles.item}>
              {todos}
            </Text>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default App;
