import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

// UserDetails Component - Displays various sections of user details including personal, employment, address, and subscription details
export default function UserDetails({ user }) {
  return (
    <View>
      {/* Basic Details Section */}
      <SectionTitle title="Basic Details" />
      {/* Divider line below the section title */}
      <View style={{ borderBottomWidth: 2, borderBottomColor: 'gray', width: '100%', marginTop: -25, marginBottom: 10 }} />

      {/* Row for ID and Username */}
      <View style={styles.row}>
        <DetailRow label="ID:" value={user.id?.toString() || 'N/A'} style={{ flex: 1 }} />
        <DetailRow label="Username:" value={user.username || 'N/A'} style={{ flex: 2, marginLeft: 10 }} />
      </View>

      {/* Row for First Name and Last Name */}
      <View style={styles.row}>
        <DetailRow label="First Name:" value={user.first_name || 'N/A'} style={{ flex: 1 }} />
        <DetailRow label="Last Name:" value={user.last_name || 'N/A'} style={{ flex: 1, marginLeft: 10 }} />
      </View>

      {/* Individual details */}
      <DetailRow label="Email:" value={user.email || 'N/A'} />
      <DetailRow label="Phone Number:" value={user.phone_number || 'N/A'} />
      <DetailRow label="Social Insurance Number:" value={user.social_insurance_number || 'N/A'} />

      {/* Row for Date of Birth and Gender */}
      <View style={styles.row}>
        <DetailRow label="DOB (YYYY-MM-DD):" value={user.date_of_birth || 'N/A'} style={{ flex: 1 }} />
        <DetailRow label="Gender:" value={user.gender || 'N/A'} style={{ flex: 1, marginLeft: 10 }} />
      </View>

      {/* Employment Section */}
      <SectionTitle title="Employment" />
      <View style={{ borderBottomWidth: 2, borderBottomColor: 'gray', width: '100%', marginTop: -25, marginBottom: 10 }} />
      <DetailRow label="Title:" value={user.employment?.title || 'N/A'} />
      <DetailRow label="Key Skill:" value={user.employment?.key_skill || 'N/A'} />

      {/* Address Section */}
      <SectionTitle title="Address" />
      <View style={{ borderBottomWidth: 2, borderBottomColor: 'gray', width: '100%', marginTop: -25, marginBottom: 10 }} />
      <DetailRow label="Street Address:" value={user.address?.street_address || 'N/A'} />

      {/* Row for City and State */}
      <View style={styles.row}>
        <DetailRow label="City:" value={user.address?.city || 'N/A'} style={{ flex: 1 }} />
        <DetailRow label="State:" value={user.address?.state || 'N/A'} style={{ flex: 1, marginLeft: 10 }} />
      </View>

      {/* Row for Country and ZIP Code */}
      <View style={styles.row}>
        <DetailRow label="Country:" value={user.address?.country || 'N/A'} style={{ flex: 1 }} />
        <DetailRow label="ZIP Code:" value={user.address?.zip_code || 'N/A'} style={{ flex: 1, marginLeft: 10 }} />
      </View>

      {/* Credit Card Detail Section */}
      <SectionTitle title="Credit Card Detail" />
      <View style={{ borderBottomWidth: 2, borderBottomColor: 'gray', width: '100%', marginTop: -25, marginBottom: 10 }} />
      <DetailRow label="Credit Card Number:" value={user.credit_card?.cc_number || 'N/A'} />

      {/* Subscription Details Section */}
      <SectionTitle title="Subscription Details" />
      <View style={{ borderBottomWidth: 2, borderBottomColor: 'gray', width: '100%', marginTop: -25, marginBottom: 10 }} />

      {/* Row for Plan and Status */}
      <View style={styles.row}>
        <DetailRow label="Plan:" value={user.subscription?.plan || 'N/A'} style={{ flex: 1 }} />
        <DetailRow label="Status:" value={user.subscription?.status || 'N/A'} style={{ flex: 1, marginLeft: 10 }} />
      </View>

      {/* Row for Payment Method and Term */}
      <View style={styles.row}>
        <DetailRow label="Payment Method:" value={user.subscription?.payment_method || 'N/A'} style={{ flex: 1 }} />
        <DetailRow label="Term:" value={user.subscription?.term || 'N/A'} style={{ flex: 1, marginLeft: 10 }} />
      </View>
    </View>
  );
}

// Helper Component: Section Title with Divider
function SectionTitle({ title }) {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.dashedLine} />
    </View>
  );
}

// Helper Component: Detail Row
function DetailRow({ label, value, style }) {
  return (
    <View style={[styles.detailRow, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} value={value} editable={false} />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  sectionContainer: {
    marginVertical: 15, // Add vertical spacing
  },
  sectionTitle: {
    fontSize: 20, // Set font size for section titles
    fontWeight: 'bold', // Bold text
    color: '#2c3e50', // Dark text color
    textAlign: 'left', // Align text to the left
    marginBottom: 5, // Add space below the title
  },
  dashedLine: {
    borderBottomWidth: 1, // Define bottom border width
    borderBottomColor: '#bdc3c7', // Light gray border color
    borderStyle: 'dashed', // Dashed line effect
    width: '100%', // Full width
    marginTop: 5, // Space above the line
  },
  detailRow: {
    flexDirection: 'column', // Stack elements vertically
    marginBottom: 10, // Space between detail rows
  },
  row: {
    flexDirection: 'row', // Align elements in a row
    justifyContent: 'space-between', // Space items evenly
    marginBottom: 10, // Space below each row
  },
  label: {
    fontWeight: 'bold', // Bold text for labels
    color: '#34495e', // Dark gray color
    marginBottom: 5, // Space below labels
  },
  input: {
    flex: 1, // Take up available space
    borderWidth: 1, // Add border
    borderColor: '#ecf0f1', // Light gray border
    padding: 10, // Padding for input field
    borderRadius: 5, // Rounded corners
    backgroundColor: '#ffffff', // White background
  },
});
