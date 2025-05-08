import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, FlatList, View} from 'react-native';
import FloatActionButton from '../../components/ui/floatActionButton';

import TodoItem from '../../components/todos/TodoItem';
import {useSelector} from 'react-redux';
import {Colors} from '../../theme/Colors';
import {todoStatus} from '../../utils/constant';
import StatusBox from '../../components/todos/StatusBox';

const TodoList: React.FC = () => {
  const {todos} = useSelector(state => state.todo);
  const statusCount = [
    {
      title: 'Açık',
      color: Colors.SKYBLUE,
      count: todos.filter(todo => todo.status == todoStatus.open).length,
      status: todoStatus.open,
    },
    {
      title: 'Tamamlanan',
      color: Colors.DARKGREEN,
      count: todos.filter(todo => todo.status == todoStatus.complate).length,
      status: todoStatus.complate,
    },
    {
      title: 'Test',
      color: Colors.SOFTORANGE,
      count: todos.filter(todo => todo.status == todoStatus.test).length,
      status: todoStatus.test,
    },
    {
      title: 'Kapalı',
      color: Colors.ROSE,
      count: todos.filter(todo => todo.status == todoStatus.closed).length,
      status: todoStatus.closed,
    },
  ];

  const listHeader = () => {
    return (
      <View>
        <View style={styles.cont}>
          <FlatList
            contentContainerStyle={{}}
            numColumns={2}
            data={statusCount}
            renderItem={({item}) => <StatusBox item={item} />}
          />
        </View>
        <Text style={styles.title}>Görevlerim</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={listHeader}
        ListEmptyComponent={<Text style={styles.text}>Veri Eklenmedi</Text>}
        data={todos}
        renderItem={({item}) => <TodoItem todo={item} />}
        keyExtractor={item => item.id.toString()}
      />
      <FloatActionButton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 5,
    textAlign: 'left',
    marginLeft: 20,
  },
  cont: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,

    margin: 15,
  },
});

export default TodoList;
