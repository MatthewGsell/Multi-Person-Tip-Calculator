import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CalculatorResults({ bill, tip, people }) {
  const [individualBill, setIndividualBill] = useState(0);
  const [individualTip, setIndividualTip] = useState(0);
  const [individualTotal, setIndividualTotal] = useState(0);
  return (
    <View style={styles.resultscontainer}>
      <Text>Calculator Results</Text>
      <Text>Total Amount Per Person</Text>
      <Text></Text>
      <Text>Bill Per Person</Text>
      <Text></Text>
      <Text>Tip per Person</Text>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  resultscontainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
