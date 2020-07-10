import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import CircleButton from "../elements/CircleButton";
import { TouchableHighlight } from "react-native-gesture-handler";

class MemoEditScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.memoEditInput} multiline />
        <CircleButton name={"check"} onPress={()=>{this.props.navigation.goBack()}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  memoEditInput: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 32,
    paddingLeft: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    fontSize: 16,
  },
});
export default MemoEditScreen;
