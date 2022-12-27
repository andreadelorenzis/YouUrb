import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import ProfilePicture from '../User/ProfilePicture';

function RideCard({ ride, onPress }) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.header}>
        <View style={styles.line}>
          <View style={styles.dot}>
            <Text style={styles.dotText}>{ride.departure}</Text>
          </View>
          <View style={styles.lineMiddle} />
          <View style={styles.dot}>
            <Ionicons
              name="location"
              style={styles.markerIcon}
              size={30}
              color="#F42E0F"
            />
            <Text style={styles.dotText}>{ride.destination}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.textInfo}>
        <Text style={{ color: Colors.textSecondary }}>Partenza il </Text>
        <Text style={{ fontWeight: 'bold' }}>{ride.date}</Text>
      </Text>
      <Text style={styles.textInfo}>
        <Text style={{ color: Colors.textSecondary }}>Destinazione </Text>
        <Text style={{ fontWeight: 'bold' }}>{ride.destination}</Text>
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
    marginRight: 20,
    width: 250,
    height: 210,
    marginBottom: 10
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  line: {
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 16,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 4,
    backgroundColor: '#333',
    position: 'relative',
    backgroundColor: Colors.red
  },
  markerIcon: {
    position: 'absolute',
    top: -25,
    left: -10,
    width: 30
  },
  dotText: {
    position: 'absolute',
    top: 10,
    left: -25,
    width: 50,
    textAlign: 'center'
  },
  lineMiddle: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.red,
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
