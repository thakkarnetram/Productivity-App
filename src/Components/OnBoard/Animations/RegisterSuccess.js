import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import LottieView from 'lottie-react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const RegisterSuccess = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login'); // using replace so they dont go back to the success page if they click back
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Registered Successfully </Text>
      </View>
      <View style={styles.animationContainer}>
        <LottieView
          source={require('../../../Assets/Animations/success.json')}
          style={styles.animation}
          autoPlay={true}
          loop={false}
        />
      </View>
      <View style={styles.redirectContainer}>
        <Text style={styles.redirectText}>Redirecting to Login </Text>
        <LottieView
          style={styles.animation2}
          autoPlay={true}
          loop={true}
          source={require('../../../Assets/Animations/loading.json')}
        />
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: wp('30%'),
  },
  headerText: {
    color: '#FFB800',
    fontSize: wp('5%'),
  },
  animationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('50%'),
  },
  animation: {
    width: wp('70%'),
    height: hp('70%'),
  },
  redirectContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('20%'),
  },
  animation2: {
    width: wp('20%'),
    height: hp('20%'),
  },
  redirectText: {
    color: '#FFB800',
    fontSize: wp('3.5%'),
  },
});

export default RegisterSuccess;
