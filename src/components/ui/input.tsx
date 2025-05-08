import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {InputProps} from '../../models/ui/inputProps';
import {Colors} from '../../theme/Colors';

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  type,
  onChange,
  label,
}) => {
  return (
    <View>
      <Text style={styles.text}> {label}</Text>
      <TextInput
      placeholderTextColor={"gray"}
        style={styles.container}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    fontSize: 20,
    borderColor: Colors.ICEBLUE,
    borderWidth: 2,
    borderRadius: 5,
    marginVertical:8
  },
  text:{
    fontSize:15,
    fontWeight:"800"

  }
});

export default Input;
