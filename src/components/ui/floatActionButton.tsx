import {StyleSheet, TouchableOpacity} from 'react-native';
import Float from '../../assets/icon/Float';
import {useNavigation} from '@react-navigation/native';
import{ ADDTODO }from '../../utils/router';

const FloatActionButton: React.FC = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(ADDTODO)}
      style={styles.container}>
      <Float />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FloatActionButton;
