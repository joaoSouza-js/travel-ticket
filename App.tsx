import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { Home } from "@/app/home";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [fontHasLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_800ExtraBold,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (fontHasLoaded === false) return;

  return (
    <SafeAreaProvider>
      <StatusBar
        style="light"
        translucent
        backgroundColor="transparent"
      />
      <Home />
    </SafeAreaProvider>
  );
}
