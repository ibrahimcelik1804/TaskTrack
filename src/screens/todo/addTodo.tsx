import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, View, Alert} from 'react-native';
import Input from '../../components/ui/input';
import Btn from '../../components/ui/btn';
import {Colors} from '../../theme/Colors';
import {useNavigation} from '@react-navigation/native';
import {TODOLIST} from '../../utils/router';
import {useDispatch} from 'react-redux';
import {addTodo} from '../../store/actions/todoActions';
import {todoStatus} from '../../utils/constant';

type Props = {};

const AddTodo: React.FC = () => {
  const [title, setTitle] = useState<string>('React Native');
  const [description, setDescription] = useState<string>('Redux');
  const [startDate, setStartDate] = useState<string>('2 Nisan');
  const [endDate, setEndDate] = useState<string>('12 Nisan');
  const [status, setStatus] = useState<string>(todoStatus.open);
  const [id, setId] = useState<string>(
    Math.random().toString(36).substring(2, 9),
  );

  const dispatch = useDispatch();

  const navigation = useNavigation();

  const handleSaveTodo = () => {
    if (
      title.trim() === '' ||
      description.trim() === '' ||
      startDate.trim() === '' ||
      endDate.trim() === ''
    ) {
      Alert.alert('Lütden Tüm Alanları Giriniz');
      return;
    }
    dispatch(addTodo({id, title, description, status, startDate, endDate}));
    Alert.alert('Ekleme Başarılı', 'Yeni iş başarılı bir şekilde eklendi', [
      {text: 'Tamam', onPress: () => navigation.goBack()},
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
          title="Kaydet"
          color={Colors.DARKGREEN}
          handlePress={() => {
            handleSaveTodo();
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

export default AddTodo;
