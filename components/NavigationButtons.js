import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function NavigationButtons({ currentIndex, totalUsers, handleUserNavigation }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={() => handleUserNavigation('prev')}
        disabled={currentIndex === 0}
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: currentIndex === 0 ? 'white' : 'lightblue',
            opacity: pressed ? 0.7 : 1,
          },
        ]}
      >
        <Text style={styles.buttonText}>←</Text>
      </Pressable>

      <Text style={styles.counterText}>
        User {currentIndex + 1} / {totalUsers}
      </Text>

      <Pressable
        onPress={() => handleUserNavigation('next')}
        disabled={currentIndex === totalUsers - 1}
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: currentIndex === totalUsers - 1 ? 'white' : 'lightblue',
            opacity: pressed ? 0.7 : 1,
          },
        ]}
      >
        <Text style={styles.buttonText}>→</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  buttonText: {
    fontSize: 25,
    color: 'black',
  },
  counterText: {
    fontSize: 20,
    color: 'black',
  },
});
