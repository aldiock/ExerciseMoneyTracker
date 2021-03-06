import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Logo} from '../../assets';

//PAKE REPLACE SPYA DPE SCREEN DI DESTROY
//KALO NAVIGATE DIA AKAN TIMPAH DPE SCREEN
const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 3000);
  }, []);

  return (
    <View style={styles.halaman}>
      <Logo />
      <Text style={styles.text}>Money Tracker</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  halaman: {
    backgroundColor: '#02CF8E',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
  },
});
