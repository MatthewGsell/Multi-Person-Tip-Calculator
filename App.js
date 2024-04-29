import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link, Routes } from "react-router-native";
import BillEntry from './pages/BillEntry';
import CalculatorResults from './pages/CalculatorResults';

export default function App() {
  return (
    <NativeRouter>
    <View style={styles.container}>
        <Routes>
        <Route path={"/"} element={<BillEntry />}/>
        <Route path={"calculatorresults"} element={<CalculatorResults />}/>
        </Routes>
    </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
