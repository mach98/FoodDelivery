import React, {useState} from 'react';

import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';

import {icons, FONTS} from '../constants';

export default function renderHeader() {
  //Dummy Data
  const initialCurrentLocation = {
    streetName: 'Akowonjo',
    gps: {
      latitude: 6.6020577,
      longitude: 3.3030725,
    },
  };

  const [currentLocation, setCurrentLocation] = useState(
    initialCurrentLocation,
  );
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          width: 50,
          paddingLeft: SIZES.padding * 2,
          justifyContent: 'center',
        }}>
        <Image
          source={icons.nearby}
          resizeMode="contain"
          style={{width: 30, height: 30}}
        />
      </TouchableOpacity>

      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View
          style={{
            width: '70%',
            height: '100%',
            backgroundColor: COLORS.lightGray3,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: SIZES.radius,
          }}>
          <Text style={{...FONTS.h3}}>{currentLocation.streetName}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          width: 50,
          paddingRight: SIZES.padding * 2,
          justifyContent: 'center',
        }}>
        <Image
          source={icons.basket}
          resizeMode="contain"
          style={{width: 30, height: 30}}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
  },
});
