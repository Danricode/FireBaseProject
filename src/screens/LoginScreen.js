import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState, useContext} from 'react';
import {AuthContext} from '../navigation/AuthProvider';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';

export default function LoginScreen({navigation}) {
  const {login} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>L O G I N</Text>
      <FormInput
        value={email}
        placeholderText="Email"
        onChangeText={userEmail => setEmail(userEmail)}
        autoCapitalize="none"
        keyboardType="email-address"
        autoCorrect={false}
      />
      <FormInput
        value={password}
        placeholderText="Password"
        onChangeText={userPassword => setPassword(userPassword)}
        secureTextEntry={true}
      />
      <FormButton buttonTitle="Login" onPress={() => login(email, password)} />
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>
          New user? <Text style={styles.join}>Join here</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  navButton: {
    marginTop: 15,
    color: 'black',
  },
  navButtonText: {
    fontSize: 20,
    color: 'grey',
  },
  join: {
    color: 'black',
  },
});
