import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import UserAvatar from '../components/UserAvatar';
import UserDetails from '../components/UserDetails';
import NavigationButtons from '../components/NavigationButtons';

export default function HomeScreen() {
  const [user, setUser] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://random-data-api.com/api/users/random_user?size=100');
      const data = await response.json();
      setUsers(data);
      setUser(data[0]);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  const handleUserNavigation = (direction) => {
    const newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;

    if (newIndex >= 0 && newIndex < users.length) {
      setCurrentIndex(newIndex);
      setUser(users[newIndex]);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {user && (
          <>
            <UserAvatar user={user} />
            <UserDetails user={user} />
          </>
        )}
      </ScrollView>

      <NavigationButtons
        currentIndex={currentIndex}
        totalUsers={users.length}
        handleUserNavigation={handleUserNavigation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
});
