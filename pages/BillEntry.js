import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import CalculatorResults from "./CalculatorResults";

export default function BillEntry() {
  const peopleref = useRef();
  const [billAmount, setBillAmount] = useState(0);
  const [tipPercent, setTipPercent] = useState(0);
  const [people, setPeople] = useState(1);
  const [renderResults, setRenderResults] = useState(false);
  if (!renderResults) {
    return (
      <View style={styles.maincontainer}>
        <View style={styles.billentrytitle}>
          <Text style={styles.titletext}>Multi Person Tip Calculator</Text>
          <Text style={styles.titletext}>Bill Entry</Text>
        </View>
        <Text>Bill Amount</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="0"
          inputMode="number"
          onFocus={(event) => {
            event.target.value = "";
            setBillAmount(0);
          }}
          onChange={(event) => {
            const inputvalue = event.target.value;
            const regExp = /[0-9.]/g;
            if (regExp.test(inputvalue.charAt(inputvalue.length - 1))) {
              const textfloat = parseFloat(event.target.value).toFixed(2);
              setBillAmount(textfloat);
            } else {
              event.target.value = "0";
            }
          }}
          onBlur={(event) => {
            event.target.value = billAmount.toString();
          }}
        ></TextInput>
        <Text>Number of people</Text>
        <TextInput
          style={styles.input}
          ref={peopleref}
          inputMode="numeric"
          placeholder="1"
          onFocus={(event) => {
            event.target.value = "";
            setPeople(1);
          }}
          onChange={(event) => {
            const inputvalue = event.target.value;
            const regExp = /[0-9]/g;
            if (regExp.test(inputvalue.charAt(inputvalue.length - 1))) {
              const textint = parseInt(event.target.value);
              if (textint > 1) {
                setPeople(textint);
              }
            } else {
              event.target.value = "1";
            }
          }}
        ></TextInput>
        <Text>Tip Percentage</Text>
        <TextInput
          style={styles.input}
          inputMode="numeric"
          placeholder="0"
          onFocus={(event) => {
            event.target.value = "";
            setTipPercent(0);
          }}
          onChange={(event) => {
            const inputvalue = event.target.value;
            const regExp = /[0-9]/g;
            if (regExp.test(inputvalue.charAt(inputvalue.length - 1))) {
              const textint = parseInt(event.target.value);
              setTipPercent(textint);
            } else {
              event.target.value = "0";
            }
          }}
        ></TextInput>
        <StatusBar style="auto" />
        <Pressable
          style={styles.resultsbutton}
          onPress={() => {
            setRenderResults(true);
          }}
        >
          <Text>Get Results</Text>
        </Pressable>
      </View>
    );
  } else {
    return (
      <View style={styles.maincontainer}>
        <CalculatorResults bill={billAmount} tip={tipPercent} people={people} />
        <Pressable
          style={styles.resultsbutton}
          onPress={() => {
            setRenderResults(false);
            setBillAmount(0);
            setPeople(1);
            setTipPercent(0);
          }}
        >
          <Text>Back</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: "100px",
  },
  input: {
    border: "2px solid black",
    borderRadius: "5px",
  },
  resultsbutton: {
    border: "1px solid grey",
    borderRadius: "5px",
    width: "80px",
    height: "30px",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "50px",
  },
  billentrytitle: {
    marginBottom: "40px",
    alignItems: "center",
    justifyContent: "center",
  },
  titletext: {
    fontSize: "larger",
    fontWeight: "bolder",
    color: "blue",
    margin: "40px",
  },
});
