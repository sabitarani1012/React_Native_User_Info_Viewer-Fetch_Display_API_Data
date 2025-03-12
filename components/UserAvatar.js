import React from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';

// UserAvatar Component - Displays user's profile picture along with their name and username
export default function UserAvatar({ user }) {
  return (
    <View style={styles.avatarContainer}>
      {/* Spacer to create a gap at the top */}
    <View style={{ height: 50 }}></View>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <TextInput
        style={styles.nameInput}
        value={`${user.first_name || 'N/A'} ${user.last_name || 'N/A'}`}
        editable={false}
      />
      <TextInput
        style={styles.usernameInput}
        value={user.username || 'N/A'}
        editable={false}
      />
    </View>
  );
}
// Styles for the UserAvatar component
const styles = StyleSheet.create({
  avatarContainer: {
    alignItems: 'center', // Center-align items
    marginBottom: 20, // Space below the avatar section
  },
  avatar: {
    width: 120, // Avatar image width
    height: 120, // Avatar image height
    borderRadius: 60, // Makes the image circular
    borderWidth: 2, // Adds a border around the avatar
    borderColor: '#3498db', // Border color (blue shade)
  },
  nameInput: {
    fontSize: 24, // Large font for name
    fontWeight: 'bold', // Bold font weight
    textAlign: 'center', // Center-aligned text
    marginTop: 10, // Space between image and name
    color: '#2c3e50', // Dark text color
  },
  usernameInput: {
    fontSize: 16, // Slightly smaller font for username
    fontWeight: 'normal', // Regular font weight
    textAlign: 'center', // Center-aligned text
    color: '#7f8c8d', // Grayish color for username
  },
});