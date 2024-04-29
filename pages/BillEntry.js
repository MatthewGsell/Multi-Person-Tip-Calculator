import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigate } from 'react-router-native';

export default function BillEntry() {
    const navigate = useNavigate()
  return (
    <View style={styles.billentrycontainer}>
      <Text>Bill Entry</Text>
      <StatusBar style="auto" />
    <Pressable onPress={() => {
        navigate("/calculatorresults")
    }}><Text>Get Results</Text></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  billentrycontainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
