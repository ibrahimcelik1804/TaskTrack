import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import Input from '../ui/input';
import Btn from '../ui/btn';
import {Colors} from '../../theme/Colors';

const TodoList: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<string[]>([]);
  const addTodo = () => {
    if (todo.trim() !== '') {
      setTodos([...todos, todo]);
      setTodo('');
    }
  };
  const removeTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Todo Ekleyiniz..."
        value={todo}
        onChange={text => {
          console.log(text);
          setTodo(text);
        }}
      />
      <Btn title="Ekle" color={Colors.SKYBLUE} handlePress={addTodo} />
      <FlatList
        data={todos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <View style={styles.list}>
            <View>
              <Text style={styles.label}>{item}</Text>
              <Text>index: {index}</Text>
            </View>

            <View style={styles.btn}>
              <Btn
                title="Sil"
                color={Colors.CORALRED}
                handlePress={() => removeTodo(index)}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {},
  container: {
    flex: 1,
    gap: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#ccc',
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
});
export default TodoList;
