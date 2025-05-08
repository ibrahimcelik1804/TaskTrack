import React from 'react';
import {Datepicker} from '@ui-kitten/components';
import {StyleSheet, Text} from 'react-native';
import {DatePickerProps} from '../../models/ui/datePickerProps';
import {Colors} from '../../theme/Colors';

const CustomDatePicker: React.FC<DatePickerProps> = props => {
  const {onSelectDate, label, size, date} = props;
  return (
    <>
      {props.label && <Text style={styles.text}>{props.label}</Text>}
      <Datepicker
        style={styles.container} // Ana stil
        controlStyle={styles.cont} // Kontrol stil
        date={props.date ?? new Date()}
        onSelect={nextDate => onSelectDate(nextDate)}
      />
    </>
  );
};

export default CustomDatePicker;

const styles = StyleSheet.create({
  cont: {backgroundColor: 'transparent'},
  container: {
    color: 'black',
    justifyContent: 'center',
    height: 55,
    borderColor: Colors.ICEBLUE,
    borderWidth: 2,
    borderRadius: 5,
    marginVertical: 8,
    // Burada textColor değişikliği yapmak için
    fontFamily: 'Arial', // Eğer font veya diğer stil eklemeleri istiyorsanız
  },
  text: {
    fontSize: 15,
    fontWeight: '800',
  },
});
