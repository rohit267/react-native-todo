
import React, { useState } from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';


const App= () => {
  const [todos,setTodos] = useState([
    { key: 1,text:"One"},
    { key: 2,text:"Two"},
    { key: 3,text:"Three"},
  ]);
  const [newTodo, setNewTodo]=useState("");

  const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    list:{
      borderWidth: 2,
      borderColor: "grey",
      borderStyle:"solid",
      backgroundColor:"#fff",

    },
    listItem:{
      backgroundColor: '#fff',
      fontSize: 24,
      color:"black",
      marginLeft: 8,
      marginTop: 4,
      marginRight: 8,
      padding: 2,
      borderRadius: 3,
      display: 'flex',
      flexDirection: "row"
    },
    form:{
      padding:16,
      backgroundColor:"#fff"
    }
  ,
  listText:{
    width: '93%',
    fontSize: 20,
    color: '#0f0f0f'
  },
  empty:{
    backgroundColor:"#fff",
    color:"black",
    flex: 1,
    justifyContent:"center",
    alignItems:"center"
  },
  empty2:{
    color:"black",
  },
  input:{
    color:'grey'
  }
  });

  function handleSave(e){
    if(newTodo.length>0){
      let newSave={
        key: todos.length+1,
        text: newTodo
      }
      let newTodos=[...todos];
      newTodos.push(newSave);
      setTodos(newTodos);
      setNewTodo("");
    }
    
  }

  function handleCheck(key){
    const newTodos = todos.filter((todo)=>todo.text!==key);
    setTodos(newTodos);
  }

  function ListItem(props){
    return(
      <View style={styles.listItem}>
        <Text style={styles.listText} >{props.index+1}. {props.text}</Text>
        <CheckBox
          value={false}
          onValueChange={()=>handleCheck(props.text)}
          tintColors={{ true: '#F15927', false: 'black' }}
        />
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      {
      todos.length>0?
      <FlatList
        style={styles.list}
        data={todos}
        renderItem={({item,index})=><ListItem index={index} text={item.text} />}
      />
      :
      <View style={styles.empty}>
          <Text style={styles.empty2}>Please add some todos</Text>
      </View>
      
      } 
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Enter new todo"
          placeholderTextColor="grey"
          onChangeText={(text)=>setNewTodo(text)}
          value={newTodo}
        />
        <Button onPress={handleSave} title="Save" />
      </View>
    </SafeAreaView>
  );

  
};



export default App;
