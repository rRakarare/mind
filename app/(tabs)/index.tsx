import { Button, StyleSheet, View } from 'react-native';


async function fetchHello() {
  const response = await fetch('/api/hello');
  const data = await response.json();
  alert('Hello ' + data.hello);
}

export default function HomeScreen() {

  return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Button onPress={() => fetchHello()} title="Fetch hello" />
  </View>;
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
