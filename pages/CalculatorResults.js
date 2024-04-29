import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function CalculatorResults() {
  return (
    <View style={styles.calculatorresults}>
      <Text>Calculator Results</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  calculatorresults: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
