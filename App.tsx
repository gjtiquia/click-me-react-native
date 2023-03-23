import ClickMeButton from './components/ClickMeButton';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { GestureResponderEvent, Platform, Text, View } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';

export default function App() {
  const [count, setCount] = useState(0);

  // Init Android NavBar
  useEffect(() => {
    if (Platform.OS !== "android") return;

    NavigationBar.setBorderColorAsync("transparent");
    NavigationBar.setBackgroundColorAsync("rgb(30,41,59)") // Same as bg-slate-800
  }, []);

  const onButtonPress = (event: GestureResponderEvent) => {
    setCount(currentCount => currentCount + 1);
  };

  return (
    <View className='flex-1 items-center justify-center bg-slate-800 gap-8'>
      <StatusBar style={"auto"} hidden={true} />

      <Text className='text-4xl text-slate-50 font-bold'>Click Me</Text>
      <Text className='text-8xl text-slate-50 font-bold'>{count}</Text>
      <View>
        <ClickMeButton onButtonPress={onButtonPress} />
      </View>
    </View>
  );
}
