import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {StatusBoxProps} from '../../models/ui/StatusBoxProps';
import Replay from '../../assets/icon/Replay';
import Cancel from '../../assets/icon/Cancel';
import Terminal from '../../assets/icon/Terminal';
import Bug from '../../assets/icon/Bug';
import Complate from '../../assets/icon/Complate';
import Report from '../../assets/icon/Report';
import {todoStatus} from '../../utils/constant';
import { Colors } from '../../theme/Colors';

const {height, width} = Dimensions.get('window');

const StatusBox: React.FC<StatusBoxProps> = ({item}) => {
  const setStatusIcon = () => {
    switch (item.status) {
      case todoStatus.open:
        return <Replay/>;
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
    <View style={[styles.container]}>
      {setStatusIcon()}
      <Text style={[styles.label]}>{item.title}</Text>
      <Text style={[styles.text,{color:item.color}]}>{item.count} Todos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.45,
    height: width * 0.35,
    backgroundColor:Colors.ICEBLUE,
    alignItems: 'center',
    gap: 0,
    margin: 7,
    borderRadius: 30,
    justifyContent:"space-around",

  },
  label: {
    fontSize: 25,
    fontWeight: '500',
  },
  text: {
    fontSize: 20,
    color: 'gray',
    fontWeight: '500',
  },
});

export default StatusBox;
