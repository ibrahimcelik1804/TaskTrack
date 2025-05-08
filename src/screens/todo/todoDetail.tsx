import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  ScrollView,
  Alert,
} from 'react-native';
import Subtitle from '../../assets/icon/Subtitle';
import Description from '../../assets/icon/Description';
import Calendar from '../../assets/icon/Calender';
import Status from '../../assets/icon/Status';
import Btn from '../../components/ui/btn';
import {Colors} from '../../theme/Colors';
import {useDispatch} from 'react-redux';
import {removeTodo, updateTodo} from '../../store/actions/todoActions';
import {todoStatus} from '../../utils/constant';
import {UPDATETODO} from '../../utils/router';

const TodoDetail: React.FC = ({route, navigation}) => {
  const {todo} = route.params;
  const dispatch = useDispatch();
  const handleRemoveTodo = () => {
    dispatch(removeTodo(todo.id));
    Alert.alert('Silme Başarılı', 'İş başarılı bir şekilde silindi', [
      {text: 'Tamam', onPress: () => navigation.goBack()},
    ]);
  };
  const handleUpdateTodo = (status: string) => {
    todo.status = status;
    // console.log('todo', todo);
    dispatch(updateTodo(todo));
    Alert.alert('Güncelleme Başarılı', 'İş başarılı bir şekilde güncellendi', [
      {text: 'Tamam', onPress: () => navigation.goBack()},
    ]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.box}>
          <Subtitle />
          <View style={styles.info}>
            <Text style={styles.title}>Title</Text>
            <Text style={styles.text}>{todo.title}</Text>
          </View>
        </View>
        <View style={styles.box}>
          <Description />
          <View style={styles.info}>
            <Text style={styles.title}>Açıklama</Text>
            <Text style={styles.text}>{todo.description}</Text>
          </View>
        </View>
        <View style={styles.box}>
          <Calendar />
          <View style={styles.info}>
            <Text style={styles.title}>Başlangıç Tarihi</Text>
            <Text style={styles.text}>{todo.startDate}</Text>
          </View>
        </View>
        <View style={styles.box}>
          <Calendar />
          <View style={styles.info}>
            <Text style={styles.title}>Bitiş Tarihi</Text>
            <Text style={styles.text}>{todo.endDate}</Text>
          </View>
        </View>
        <View style={styles.box}>
          <Status />
          <View style={styles.info}>
            <Text style={styles.title}>Durum</Text>
            <Text style={styles.text}>{todo.status}</Text>
          </View>
        </View>
        <View style={styles.group}>
          <Btn
            title="Complated"
            color={Colors.DARKGREEN}
            handlePress={() => handleUpdateTodo(todoStatus.complate)}
          />
          <Btn
            title="Developer"
            color={Colors.LAVENDERPURPLE}
            handlePress={() => handleUpdateTodo(todoStatus.development)}
          />
          <Btn
            title="Test"
            color={Colors.SOFTORANGE}
            handlePress={() => handleUpdateTodo(todoStatus.test)}
          />
          <Btn
            title="Close"
            color={Colors.ROSE}
            handlePress={() => handleUpdateTodo(todoStatus.closed)}
          />
          <Btn
            title="Sil"
            color={Colors.CORALRED}
            handlePress={() => handleRemoveTodo()}
          />
          <Btn
            title="Güncelle"
            color={Colors.SKYBLUE}
            handlePress={() => navigation.navigate(UPDATETODO, {todo})}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  box: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
    paddingVertical: 5,
    alignItems: 'center',
  },
  info: {paddingLeft: 15, gap: 6, paddingVertical: 7},
  title: {
    fontSize: 18,
    color: 'gray',
    fontWeight: '600',
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
  },
  group: {paddingHorizontal: 15, marginTop: 10, gap: 12},
});

export default TodoDetail;
