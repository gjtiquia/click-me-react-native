import ClickMeButton from './components/ClickMeButton';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { GestureResponderEvent, Text, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState(0);

  const onButtonPress = (event: GestureResponderEvent) => {
    setCount(currentCount => currentCount + 1);
  };

  return (
    <View className='flex-1 items-center justify-center bg-slate-800 gap-8'>
      <StatusBar style="auto" />
      <Text className='text-4xl text-slate-50 font-bold'>Click Me</Text>
      <Text className='text-8xl text-slate-50 font-bold'>{count}</Text>
      <View>
        <ClickMeButton onButtonPress={onButtonPress} />
      </View>
    </View>
  );
}
