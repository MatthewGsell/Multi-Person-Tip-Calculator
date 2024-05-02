import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CalculatorResults({ bill, tip, people }) {
  const [individualBill, setIndividualBill] = useState(0);
  const [individualTip, setIndividualTip] = useState(0);
  const [individualTotal, setIndividualTotal] = useState(0);

  useEffect(() => {
    const preroundedbill = bill / people;
    const preroundedtip = (preroundedbill / 100) * tip;
    console.log(preroundedtip);
    const roundedbill = Math.ceil(preroundedbill * 100) / 100;
    const roundedtip = Math.ceil(preroundedtip * 100) / 100;
    setIndividualBill(roundedbill.toFixed(2));
    setIndividualTip(roundedtip.toFixed(2));
    setIndividualTotal((roundedbill + roundedtip).toFixed(2));
  }, []);

  return (
    <View style={styles.resultscontainer}>
      <Text style={styles.title}>Calculator Results</Text>
      <Text style={styles.title}>{people} person party</Text>
      <Text>Total Amount Per Person</Text>
      <Text>{individualTotal}</Text>
      <Text>Bill Per Person</Text>
      <Text>{individualBill}</Text>
      <Text>Tip per Person</Text>
      <Text>{individualTip}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  resultscontainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: "larger",
    fontWeight: "bolder",
    color: "blue",
    margin: "50px",
  },
});
