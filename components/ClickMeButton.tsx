import React from "react";
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, GestureResponderEvent, Pressable, StyleSheet, Text, View } from 'react-native';

function ClickMeButton({ onButtonPress }) {
    return (
        <Pressable className='bg-slate-700 active:bg-slate-600 px-4 py-2 rounded-xl' onPress={onButtonPress}>
            <Text className="text-slate-400 text-lg">Click Me</Text>
        </Pressable>
    );
}

export default ClickMeButton;
