import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Header, Button } from 'react-native-elements';

class Registration extends Component {
  handleInputChange(input, value) {
    this.setState({ [input]: value });
  }

  handleFormSubmission() {
    this.setState({formSubmitted: true});
  }

  render() {
    return (
      <View>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'REGISTRATION', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <FormLabel>Name</FormLabel>
        <FormInput ref="registration" textInputRef='name' onChangeText={value => this.handleInputChange('name', value)}/>
        <FormValidationMessage>{this.state && !this.state.name ? "Name is required" : ""}</FormValidationMessage>
        <FormLabel>Email</FormLabel>
        <FormInput onChangeText={value => this.handleInputChange('email', value)}/>
        <FormValidationMessage>{this.state && !this.state.email ? "Email is required" : ""}</FormValidationMessage>
        <FormLabel>Password</FormLabel>
        <FormInput onChangeText={value => this.handleInputChange('password', value)}/>
        <FormValidationMessage>{this.state && !this.state.password ? "Password is required" : ""}</FormValidationMessage>
        <FormLabel>Confirm Password</FormLabel>
        <FormInput onChangeText={value => this.handleInputChange('confirm_password', value)}/>
        <FormValidationMessage>{this.state && !this.state.confirm_password ? "Confirm Password is required" : ""}</FormValidationMessage>
        <Button
          large
          icon={{name: 'envira', type: 'font-awesome'}}
          onPress={() => this.handleFormSubmission()}
          title='SUBMIT' />
      </View>
    );
  }
}

Registration.propTypes = {};

export default Registration;
