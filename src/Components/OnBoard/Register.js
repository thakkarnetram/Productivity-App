/* eslint-disable react-hooks/exhaustive-deps */
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, {useEffect} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {actionCreators} from '../../Redux/index';
import {bindActionCreators} from 'redux';
import {useDispatch, useSelector} from 'react-redux';
import Snackbar from 'react-native-snackbar';
import {ROOT_URL} from '../../Config/Constants';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Register = ({navigation}) => {
  //use effect to clear values
  useEffect(() => {
    actions.updateName('');
    actions.updateUserName('');
    actions.updateEmail('');
    actions.updatePassword('');
  }, []);
  // state management
  const name = useSelector(state => state.user.name);
  const username = useSelector(state => state.user.username);
  const email = useSelector(state => state.user.email);
  const password = useSelector(state => state.user.password);
  //handle states
  const dispatch = useDispatch();
  const actions = bindActionCreators(actionCreators, dispatch);
  const nameHandler = name => {
    actions.updateName(name);
  };
  const userNameHandler = username => {
    actions.updateUserName(username);
  };
  const emailHandler = email => {
    actions.updateEmail(email);
  };
  const passwordHandler = password => {
    actions.updatePassword(password);
  };
  // navigation handler
  const navigateToLogin = () => {
    navigation.navigate('Login');
  };
  // handle creating account
  const handleCreateAccount = async (Name, Username, Email, Password) => {
    try {
      const res = await fetch(`${ROOT_URL}/auth/api/v1/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: Name,
          username: Username,
          email: Email,
          password: Password,
        }),
      });
      const data = await res.json();
      if (res.status === 201) {
        await AsyncStorage.setItem('email', email);
        await AsyncStorage.setItem('name', name);
        await AsyncStorage.setItem('username', username);
        setTimeout(() => {
          navigation.replace('RegisterSuccess'); // using replace so they don't go back to the register page if they click back
        }, 1000);
      } else if (res.status === 400 || 401) {
        console.log('Error ? :', data.message);
        Snackbar.show({
          text: data.message,
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: '#FFB800',
          textColor: 'black',
        });
      } else if (res.status === 500) {
        Snackbar.show({
          text: data.message,
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: '#FFB800',
          textColor: 'black',
        });
        navigation.navigate('RegisterFail');
      } else {
        console.log('Error3' + res.status);
      }
    } catch (error) {
      console.log('Error2' + error);
      navigation.navigate('RegisterFail'); // Navigate to 'RegisterFail' screen on any other error, including network errors
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Register</Text>
      </View>
      <View style={styles.formContainer}>
        <View>
          <Text style={styles.inputHeader}>Name</Text>
          <TextInput
            value={name}
            onChangeText={nameHandler}
            style={styles.input}
            placeholder="Your name"
            keyboardType="default"
          />
          <Text style={styles.inputHeader}>Username</Text>
          <TextInput
            value={username}
            onChangeText={userNameHandler}
            style={styles.input}
            placeholder="Pick a unqiue username"
            keyboardType="default"
          />
          <Text style={styles.inputHeader}>Email</Text>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            placeholder="Abc@gmail.com"
            value={email}
            onChangeText={emailHandler}
          />
          <Text style={styles.inputHeader}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Pick a password with atleast 6 characters"
            keyboardType="default"
            secureTextEntry={true}
            value={password}
            onChangeText={passwordHandler}
          />
        </View>
      </View>
      <View style={styles.registerContainer}>
        <TouchableOpacity
          style={styles.registerBtn}
          onPress={() => {
            handleCreateAccount(name, username, email, password);
          }}>
          <Text style={styles.registerText}>Create Account </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loggedInContainer}>
        <View style={styles.userContainer}>
          <Text style={styles.userText}>Already a user?</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.loginBtn} onPress={navigateToLogin}>
            <Text style={styles.loginText}>Log in</Text>
          </TouchableOpacity>
        </View>
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
    marginTop: wp('12%'),
    marginLeft: wp('4%'),
  },
  headerText: {
    color: '#FFB800',
    fontSize: wp('6%'),
    fontWeight: 700,
  },
  subHeaderContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: wp('3%'),
    marginLeft: wp('4%'),
  },
  subHeaderText: {
    color: '#B3B3B3',
    fontSize: wp('3.5%'),
    fontWeight: 300,
  },
  googleContainer: {
    width: wp('40%'),
    height: hp('5%'),
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: wp('5%'),
    marginLeft: wp('4%'),
  },
  googleBtn: {
    width: wp('50%'),
    height: hp('5%'),
    backgroundColor: '#DCA61B',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderColor: 'rgba(221, 199, 144, 1)',
    borderWidth: 2,
  },
  googleLogo: {
    width: wp('3%'),
    height: null,
    padding: wp('2.8%'),
  },
  formContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: wp('4%'),
    marginLeft: wp('4%'),
  },
  inputHeader: {
    color: '#B3B3B3',
    fontSize: wp('4%'),
    marginTop: wp('1%'),
    marginBottom: wp('1%'),
  },
  input: {
    width: wp('90%'),
    height: hp('6.5%'),
    backgroundColor: '#DCA61B',
    color: 'white',
    fontSize: wp('3.5%'),
    borderRadius: 15,
    borderColor: 'rgba(221, 199, 144, 1)',
    borderWidth: 2,
    marginTop: wp('2%'),
    paddingLeft: 15,
    marginBottom: wp('1%'),
  },
  registerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: wp('10%'),
    marginLeft: wp('4%'),
  },
  registerBtn: {
    backgroundColor: '#D39E16',
    width: wp('60%'),
    height: hp('6%'),
    borderRadius: 15,
    borderColor: 'rgba(221, 199, 144, 1)',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    color: 'white',
    fontSize: wp('3%'),
  },
  loggedInContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: wp('3%'),
  },
  userContainer: {},
  userText: {
    fontSize: wp('3.5%'),
    color: '#D3CACA',
  },
  loginBtn: {
    marginLeft: wp('2%'),
  },
  loginText: {
    color: '#D69D0C',
    fontSize: wp('3.5%'),
  },
});

export default Register;
