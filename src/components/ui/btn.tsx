import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {BtnProps} from '../../models/ui/btnProps';

const Btn: React.FC<BtnProps> = ({title, color, handlePress}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.container, {backgroundColor: color}]}>
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    
    borderRadius: 5,
    padding: 10,
   

  },
  label: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Btn;
