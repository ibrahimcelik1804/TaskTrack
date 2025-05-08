import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, View, Alert} from 'react-native';
import Input from '../../components/ui/input';
import Btn from '../../components/ui/btn';
import {Colors} from '../../theme/Colors';
import {useNavigation} from '@react-navigation/native';
import {TODOLIST} from '../../utils/router';
import {useDispatch} from 'react-redux';
import {addTodo, updateTodo} from '../../store/actions/todoActions';
import {todoStatus} from '../../utils/constant';

type Props = {};

const UpdateTodo: React.FC = ({route}) => {
  const {todo} = route.params;
  const [title, setTitle] = useState<string>(todo.title);
  const [description, setDescription] = useState<string>(todo.description);
  const [startDate, setStartDate] = useState<string>(todo.startDate);
  const [endDate, setEndDate] = useState<string>(todo.endDate);
  const [status, setStatus] = useState<string>(todoStatus.open);
  const [id, setId] = useState<string>(todo.id);

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const handleUpdateTodo = () => {
    todo.status = status;
    console.log('todo', todo);
    dispatch(
      updateTodo({
        title,
        description,
        endDate,
        startDate,
        status,
        id,
      }),
    );
    Alert.alert('Güncelleme Başarılı', 'İş başarılı bir şekilde güncellendi', [
      {
        text: 'Tamam',
        onPress: () =>
          navigation.reset({
            index: 1,
            routes: [
              {
                name: TODOLIST,
              },
            ],
          }),
      },
    ]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Input
          value={title}
          placeholder="Başlık Giriniz"
          onChange={value => setTitle(value.nativeEvent.text)}
          label="Başlık"
        />
        <Input
          value={description}
          label="Açıklama"
          placeholder="Açıklama Giriniz"
          onChange={value => setDescription(value.nativeEvent.text)}
        />
        <Input
          value={startDate}
          label="Başlangıç Tarihi"
          placeholder="Başlangıç Tarihi Giriniz"
          onChange={value => setStartDate(value.nativeEvent.text)}
        />
        <Input
          value={endDate}
          label="Bitiş Tarihi"
          placeholder="Bitiş Tarihi Giriniz"
          onChange={value => setEndDate(value.nativeEvent.text)}
        />
        <Btn
          title="Güncelle"
          color={Colors.DARKGREEN}
          handlePress={() => {
            handleUpdateTodo();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginVertical: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  form: {
    gap: 10,
  },
});

export default UpdateTodo;
