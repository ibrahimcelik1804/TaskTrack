import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, View} from 'react-native';
import Button from '../ui/Button';
import { Colors } from '../../theme/Colors';
import { fullname, total } from '../../utils/founction';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    if (count < 100) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', marginHorizontal: 40}}>
      <View style={styles.header}>
        <Text style={styles.title}>name: {fullname("ertuğrul","yağız")}</Text>
        <Text style={styles.title}>Total: {total(count)}</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.kulak}></View>
        <View style={styles.kulak2}></View>
        <View style={styles.box}>
          <Button title="-" color={Colors.LIGHTGREEN} handlePress={decrement} />
          <Text style={styles.text}>{count}</Text>
          <Button title="+" color={Colors.CORALRED} handlePress={increment} />
        </View>
        <Button title="␛" color={Colors.DARKGRAY} handlePress={reset} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {fontSize: 18, color: 'white',textTransform:"capitalize"},
  kulak: {
    position: 'absolute',
    height: 50,
    width: 30,
    backgroundColor: Colors.LIMEYELLOW,
    top: -10,
    left: -35,
    borderRadius: 20,
  },
  kulak2: {
    position: 'absolute',
    height: 50,
    width: 30,
    backgroundColor: Colors.LIMEYELLOW,
    top: -10,
    right: -35,
    borderRadius: 20,
  },
  header: {
    alignItems: 'center',
    borderWidth: 8,
    borderColor: '#594100',
    justifyContent: 'center',
    padding: 20,
    borderTopRightRadius: 250,
    borderTopLeftRadius: 250,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: '#594100',
  },

  container: {
    alignItems: 'center',
    borderWidth: 8,
    borderColor: Colors.LAVENDERPURPLE,
    justifyContent: 'center',
    padding: 50,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    borderBottomRightRadius: 250,
    borderBottomLeftRadius: 250,
  },
  box: {
    flexDirection: 'row',

    gap: 40,
    alignItems: 'center',
  },
  text: {
    fontSize: 45,
  },
});

export default Counter;
