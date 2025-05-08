import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {TodoItemProps} from '../../models/ui/todoItemProps';
import {Colors} from '../../theme/Colors';
import Time from '../../assets/icon/Rime';
import TimeOff from '../../assets/icon/TimeOff';
import {todoStatus} from '../../utils/constant';
import Replay from '../../assets/icon/Replay';
import Cancel from '../../assets/icon/Cancel';
import Terminal from '../../assets/icon/Terminal';
import Bug from '../../assets/icon/Bug';
import Complate from '../../assets/icon/Complate';
import Report from '../../assets/icon/Report';
import {useNavigation} from '@react-navigation/native';
import {TODODETAIL} from '../../utils/router';

type Props = {};

const TodoItem: React.FC<TodoItemProps> = ({todo}) => {
  const navigation = useNavigation();

  const setStatusIcon = () => {
    switch (todo.status) {
      case todoStatus.open:
        return <Replay />;
      case todoStatus.closed:
        return <Cancel />;
      case todoStatus.development:
        return <Terminal />;
      case todoStatus.complate:
        return <Complate />;
      case todoStatus.test:
        return <Bug />;
      default:
        return <Report />;
    }
  };
  return (
    <Pressable
      onPress={() => navigation.navigate(TODODETAIL, {todo})}
      style={styles.container}>
      <View>{setStatusIcon()}</View>
      <View style={styles.info}>
        <Text style={styles.label}>{todo.title}</Text>
        <Text style={styles.desc}>{todo.description}</Text>
        <View style={styles.box}>
          <View style={styles.datecont}>
            <Time />
            <Text style={styles.date}>{new Date(todo.startDate).toLocaleDateString()}</Text>
          </View>
          <View style={styles.datecont}>
            <TimeOff />
            <Text style={styles.date}>{new Date(todo.endDate).toLocaleDateString()}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.ICEBLUE,
    marginVertical: 1,
    paddingHorizontal: 15,
    justifyContent: 'flex-start',
    paddingVertical:8
    
  },
  info: {marginHorizontal: 15, flex: 1},
  label: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  desc: {fontSize: 15, fontWeight: '500'},
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  datecont: {
    flexDirection: 'row',
    paddingTop: 8,
    alignItems: 'center',
  },

  date: {
    fontSize: 16,
    fontWeight: '500',
    color: 'gray',
  },
});

export default TodoItem;
