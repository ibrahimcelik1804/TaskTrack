import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TodoList from '../screens/todo/todoList';
import AddTodo from '../screens/todo/addTodo';
import {ADDTODO, TODODETAIL, TODOLIST, UPDATETODO} from '../utils/router';
import TodoDetail from '../screens/todo/todoDetail';
import UpdateTodo from '../screens/todo/UpdateTodo';

const Stack = createNativeStackNavigator();

const RootNavigation: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={TODOLIST} component={TodoList} />
      <Stack.Screen name={ADDTODO} component={AddTodo} />
      <Stack.Screen name={TODODETAIL} component={TodoDetail} />
      <Stack.Screen name={UPDATETODO} component={UpdateTodo} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
