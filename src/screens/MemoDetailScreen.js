import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CircleButton from "../elements/CircleButton";
class MemoDatailScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.memoHeader}>
            <View>
              <Text style={styles.memoHeaderTitle}>シリコンバレーについて</Text>
              <Text style={styles.memoHeaderDate}>2020/7/7</Text>
            </View>
          </View>
        </View>

        <View style={styles.memoContent}>
          <Text>
            シリコンバレーは最高にクレイジーでクールだ。I wanna create something
            fucking new!!
          </Text>
        </View>

        <CircleButton color="white" style={styles.editButton} name={'pencil'} 
        onPress={()=>{this.props.navigation.navigate('MemoEdit');}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },
  memoHeader: {
    height: 100,
    backgroundColor: "#323232",
    justifyContent: "center",
    padding: 10,
  },
  memoHeaderTitle: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "900",
    marginBottom: 4,
  },
  memoHeaderDate: {
    fontSize: 12,
    color: "#fff",
  },

  memoContent: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: "#fff",
    flex: 1,
  },

  editButton: {
    top: 70,
  },
});
export default MemoDatailScreen;
