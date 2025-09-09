import { Button, ButtonText } from "@/components/ui/button";
import { View } from "react-native";

async function fetchHello() {
  const response = await fetch("/api/hello");
  const data = await response.json();
  alert("Hello " + data.hello);
}

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        onPress={() => fetchHello()}
        variant="solid"
        size="md"
        action="primary"
      >
        <ButtonText>Click me</ButtonText>
      </Button>
    </View>
  );
}
