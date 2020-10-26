import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import * as Location from "expo-location";

import Loading from "./Loading";

const useGeoLocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  const initLocation = async () => {
    try {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setError("Permission to access location was denied")
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    initLocation()
  }, [])

  return {
    location,
    error,
  }
}
export default function App() {
  const { location } = useGeoLocation()
  console.log(location)

  return (
    <Loading />
  );
}
