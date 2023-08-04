import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const OnBoarding = ({navigation}) => {
  const navigationToRegister = () => {
    navigation.navigate('Register');
  };
  const navigationToLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Let's Start Your </Text>
        <Text style={styles.headerText}>Productive Journey</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../Assets/onBoard.png')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.registerBtn}
          onPress={navigationToRegister}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={navigationToLogin}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  headerContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: wp('20%'),
    marginLeft: wp('5%'),
  },
  headerText: {
    color: '#FFB800',
    fontWeight: '600',
    fontSize: wp('6.5%'),
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: wp('100%'),
    height: hp('50%'),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registerBtn: {
    width: wp('40%'),
    height: hp('6%'),
    backgroundColor: '#DCA61B',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: wp('6%'),
    marginRight: wp('5%'),
    borderRadius: 10,
  },
  registerText: {
    color: 'white',
    fontSize: wp('3.5%'),
    fontWeight: 600,
  },
  loginBtn: {
    width: wp('40%'),
    height: hp('6%'),
    backgroundColor: '#D49B08',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: wp('6%'),
    borderRadius: 10,
  },
  loginText: {
    color: 'white',
    fontSize: wp('3.5%'),
    fontWeight: 600,
  },
});

export default OnBoarding;
