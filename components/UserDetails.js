import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function UserDetails({ user }) {
  return (
    <View>
      <SectionTitle title="Basic Details" />
      <View style={{ borderBottomWidth: 2, borderBottomColor: 'gray', width: '100%', marginTop: -25, marginBottom: 10 }} />
      <View style={styles.row}>
        <DetailRow label="ID:" value={<Text>{user.id || 'N/A'}</Text>} style={{ flex: 1 }} />
        <DetailRow label="Username:" value={<Text>{user.username || 'N/A'}</Text>} style={{ flex: 2, marginLeft: 10 }} />
      </View>
      <View style={styles.row}>
        <DetailRow label="First Name:" value={<Text>{user.first_name || 'N/A'}</Text>} style={{ flex: 1 }} />
        <DetailRow label="Last Name:" value={<Text>{user.last_name || 'N/A'}</Text>} style={{ flex: 1, marginLeft: 10 }} />
      </View>
      <DetailRow label="Email:" value={<Text>{user.email || 'N/A'}</Text>} />
      <DetailRow label="Phone Number:" value={<Text>{user.phone_number || 'N/A'}</Text>} />
      <DetailRow label="Social Insurance Number:" value={<Text>{user.social_insurance_number || 'N/A'}</Text>} />
      <View style={styles.row}>
        <DetailRow label="DOB (YYYY-MM-DD):" value={<Text>{user.date_of_birth || 'N/A'}</Text>} style={{ flex: 1 }} />
        <DetailRow label="Gender:" value={<Text>{user.gender || 'N/A'}</Text>} style={{ flex: 1, marginLeft: 10 }} />
      </View>
      <SectionTitle title="Employment" />
      <View style={{ borderBottomWidth: 2, borderBottomColor: 'gray', width: '100%', marginTop: -25, marginBottom: 10 }} />
      <DetailRow label="Title:" value={<Text>{user.employment?.title || 'N/A'}</Text>} />
      <DetailRow label="Key Skill:" value={<Text>{user.employment?.key_skill || 'N/A'}</Text>} />
      <SectionTitle title="Address" />
      <View style={{ borderBottomWidth: 2, borderBottomColor: 'gray', width: '100%', marginTop: -25, marginBottom: 10 }} />
      <DetailRow label="Street Address:" value={<Text>{user.address?.street_address || 'N/A'}</Text>} />
      <View style={styles.row}>
        <DetailRow label="City:" value={<Text>{user.address?.city || 'N/A'}</Text>} style={{ flex: 1 }} />
        <DetailRow label="State:" value={<Text>{user.address?.state || 'N/A'}</Text>} style={{ flex: 1, marginLeft: 10 }} />
      </View>
      <View style={styles.row}>
        <DetailRow label="Country:" value={<Text>{user.address?.country || 'N/A'}</Text>} style={{ flex: 1 }} />
        <DetailRow label="ZIP Code:" value={<Text>{user.address?.zip_code || 'N/A'}</Text>} style={{ flex: 1, marginLeft: 10 }} />
      </View>
      <SectionTitle title="Credit Card Detail" />
      <View style={{ borderBottomWidth: 2, borderBottomColor: 'gray', width: '100%', marginTop: -25, marginBottom: 10 }} />
      <DetailRow label="Credit Card Number:" value={<Text>{user.credit_card?.cc_number || 'N/A'}</Text>} />
      <SectionTitle title="Subscription Details" />
      <View style={{ borderBottomWidth: 2, borderBottomColor: 'gray', width: '100%', marginTop: -25, marginBottom: 10 }} />
      <View style={styles.row}>
        <DetailRow label="Plan:" value={<Text>{user.subscription?.plan || 'N/A'}</Text>} style={{ flex: 1 }} />
        <DetailRow label="Status:" value={<Text>{user.subscription?.status || 'N/A'}</Text>} style={{ flex: 1, marginLeft: 10 }} />
      </View>
      <View style={styles.row}>
        <DetailRow label="Payment Method:" value={<Text>{user.subscription?.payment_method || 'N/A'}</Text>} style={{ flex: 1 }} />
        <DetailRow label="Term:" value={<Text>{user.subscription?.term || 'N/A'}</Text>} style={{ flex: 1, marginLeft: 10 }} />
      </View>
    </View>
  );
}

function SectionTitle({ title }) {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.dashedLine} />
    </View>
  );
}

function DetailRow({ label, value, style }) {
  return (
    <View style={[styles.detailRow, style]}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.input}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginVertical: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'left',
    marginBottom: 5,
  },
  dashedLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#bdc3c7',
    borderStyle: 'dashed',
    width: '100%',
    marginTop: 5,
  },
  detailRow: {
    flexDirection: 'column',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    color: '#34495e',
    marginBottom: 5,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ecf0f1',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
});
