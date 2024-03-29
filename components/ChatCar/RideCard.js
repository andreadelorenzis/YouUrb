import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import ProfilePicture from '../User/ProfilePicture';
import Roadmap from './Roadmap';
import { formatDate } from '../../utils/Validation';

function RideCard({ ride, onPress, expand, style }) {
  return (
    <Pressable style={[styles.container, style, expand && styles.expanded]} onPress={onPress}>
      <View style={styles.header}>
        <Roadmap departure={ride.departureCity} destination={ride.destinationCity} />
      </View>
      <Text style={styles.textInfo}>
        <Text style={{ color: Colors.textSecondary }}>Partenza il </Text>
        <Text style={{ fontWeight: 'bold' }}>{formatDate(ride.date)}</Text>
      </Text>
      <Text style={styles.textInfo}>
        <Text style={{ color: Colors.textSecondary }}>Destinazione </Text>
        <Text style={{ fontWeight: 'bold' }}>{ride.destinationCity}</Text>
      </Text>
      <Text style={styles.textInfo}>
        <Text style={{ color: Colors.textSecondary }}>Posti </Text>
        <Text style={{ fontWeight: 'bold' }}>{ride.occupiedSeats}/{ride.totalSeats}</Text>
      </Text>
      <View style={styles.footer}>
        <ProfilePicture
          source={ride.user.imageUri}
          text={ride.user.name}
          style={{ marginTop: 10 }}
        />
        <Text style={styles.price}>{ride.price}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 10,
    padding: 20,
    width: 250,
    height: 210,
    marginRight: 20,
    marginBottom: 20
  },
  expanded: {
    flex: 1,
    marginRight: 5,
    width: '100%',
    maxWidth: 400,
    marginLeft: 5
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  textInfo: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default RideCard;
