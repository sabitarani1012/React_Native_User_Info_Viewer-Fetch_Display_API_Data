import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import UserAvatar from '../components/UserAvatar';
import UserDetails from '../components/UserDetails';
import NavigationButtons from '../components/NavigationButtons';

// HomeScreen Component - Displays user details and navigation buttons
export default function HomeScreen() {
  // State to store the currently displayed user
  const [user, setUser] = useState(null);

  // State to track the index of the current user
  const [currentIndex, setCurrentIndex] = useState(0);

  // State to store the list of users
  const [users, setUsers] = useState([]);

  // Fetch users when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  // Function to fetch user data from the API
  const fetchUsers = async () => {
    try {
      const response = await fetch('https://random-data-api.com/api/users/random_user?size=100');
      const data = await response.json();
      setUsers(data); // Store the fetched users
      setUser(data[0]); // Set the first user as the default
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  // Function to navigate between users
  const handleUserNavigation = (direction) => {
    const newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    
    // Ensure the new index is within valid bounds
    if (newIndex >= 0 && newIndex < users.length) {
      setCurrentIndex(newIndex);
      setUser(users[newIndex]);
    }
  };

  return (
    <View style={styles.container}>
      {/* Scrollable section for user details */}
      <ScrollView style={styles.scrollContainer}>
        {user && (
          <>
            <UserAvatar user={user} /> {/* Display user's avatar */}
            <UserDetails user={user} /> {/* Display user's details */}
          </>
        )}
      </ScrollView>

      {/* Navigation buttons (fixed at the bottom) */}
      <NavigationButtons
        currentIndex={currentIndex}
        totalUsers={users.length}
        handleUserNavigation={handleUserNavigation}
      />
    </View>
  );
}

// Styles for the HomeScreen component
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container takes the full screen height
  },
  scrollContainer: {
    flex: 1, // Allows scrolling for user details
  },
});
