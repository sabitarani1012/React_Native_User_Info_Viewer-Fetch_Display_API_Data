import React from 'react';
import { View, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen'; // Importing the HomeScreen component

// Main App Component
export default function App() {
  return (
    <View style={styles.container}>
      {/* Rendering the HomeScreen component inside the main App */}
      <HomeScreen />
    </View>
  );
}

// Styles for the App component
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container takes the full height of the screen
    backgroundColor: '#f5f5f5', // Light gray background color
    padding: 20, // Adds padding around the screen
  },
});
