import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

// NavigationButtons Component - Handles navigation between users
export default function NavigationButtons({ currentIndex, totalUsers, handleUserNavigation }) {
  return (
    <View style={styles.buttonContainer}>
      {/* Previous Button - Disabled if currentIndex is 0 (first user) */}
      <Pressable
        onPress={() => handleUserNavigation('prev')}
        disabled={currentIndex === 0}
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: currentIndex === 0 ? 'white' : 'lightblue', // Change color when disabled
            opacity: pressed ? 0.7 : 1, // Reduce opacity when pressed
          },
        ]}
      >
        <Text style={styles.buttonText}>←</Text>
      </Pressable>

      {/* Display current user index out of total users */}
      <Text style={styles.counterText}>
        User {currentIndex + 1} / {totalUsers}
      </Text>

      {/* Next Button - Disabled if currentIndex is the last user */}
      <Pressable
        onPress={() => handleUserNavigation('next')}
        disabled={currentIndex === totalUsers - 1}
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: currentIndex === totalUsers - 1 ? 'white' : 'lightblue', // Change color when disabled
            opacity: pressed ? 0.7 : 1, // Reduce opacity when pressed
          },
        ]}
      >
        <Text style={styles.buttonText}>→</Text>
      </Pressable>
    </View>
  );
}

// Styles for the NavigationButtons component
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row', // Arrange buttons in a row
    justifyContent: 'space-between', // Space out buttons and text
    alignItems: 'center', // Align items vertically
    marginTop: 20, // Add some spacing from the top
  },
  button: {
    width: 60, // Set width of button
    height: 60, // Set height of button
    borderRadius: 30, // Make it a circular button
    justifyContent: 'center', // Center text inside button
    alignItems: 'center', // Center text inside button
    borderWidth: 2, // Add border width
    borderColor: 'white', // Set border color
  },
  buttonText: {
    fontSize: 25, // Set text size
    color: 'black', // Set text color
  },
  counterText: {
    fontSize: 20, // Set font size for user counter
    color: 'black', // Set text color
  },
});
 