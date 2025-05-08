import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../theme/Colors';
import {ButtonProps} from '../../models/ui/buttonProps';

const Button: React.FC<ButtonProps> = ({title, color, handlePress}) => {
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
    borderRadius: 40,
    width: 80,
    height: 80,
    justifyContent: 'center',
  },
  label: {
    fontSize: 40,
    color: Colors.WHITE,
    padding: 10,
    fontWeight: '900',
    textAlign: 'center',
  },
});

export default Button;
