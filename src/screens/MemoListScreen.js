import React from "react";
import { StyleSheet, View, Text, SwitchIOS } from "react-native";
import MemoList from "../components/MemoList";
import CircleButton from "../elements/CircleButton";
import firebase from 'firebase';

//this.props.navigation.navigate("MemoEdit")

class MemoListScreen extends React.Component {
  handlePress() {
  const db = firebase.firestore();
  db.collection("memos")
    .add({
      body: "text memo",
      createdOn: "2020-7-15",
    })
    .then((docRef) => {
      console.log(docRef.id);
    })
    .catch((error) => {
      console.log(error);
    }); 
  }
  

  render() {
    return (
      <View style={styles.container}>
        <MemoList navigation={this.props.navigation} />
        <CircleButton name="plus" onPress={this.handlePress.bind(this)}>
          {"\uf067"}
        </CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});
export default MemoListScreen;
