import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import DrawerIcon from '../DrawerIcon/DrawerIcon';
import { useNavigation } from '@react-navigation/native';

class LogIn extends React.Component {
    state={
        email:"",
        password:"",
        isEmailValid: true,
        isLoged: false,
      }

      validateEmail = email => {
        return email.includes('@');
      };

      loginHandler = () => {
        const isValid = this.validateEmail(this.state.email);
        this.setState({isEmailValid: isValid});
        if (isValid) {
          //todo:zrobic logowanie w firebase
          this.props.navigation.goBack({...this.props})
        }
      }

      signingUpHandler = () => {
        const isValid = this.validateEmail(this.state.email);
        this.setState({isEmailValid: isValid});
        if (isValid) {
          //todo:zrobic logowanie w firebase
          this.setState({isLoged: isValid});
        }
      }

  render(){
    return (
        <View style={{height:'100%'}}>
       <DrawerIcon />
       <View style={styles.container} > 
        <Text style={styles.title}>Welcome! Log in!</Text>
        <View style={styles.inputView} >
            <TextInput  
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
         </View>
         {!this.state.isEmailValid ? <Text style={{color: 'red', marginBottom:10}}>Email is incorrect!</Text> : null}
         <View style={styles.inputView} >
            <TextInput  
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
         </View>
        <TouchableOpacity style={styles.btn} onPress={() => this.state.isLoged ? this.props.navigation.goBack({...this.props}) : null}>
          <Text style={styles.loginText} onClick={this.signingUpHandler}>Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.loginText} onClick={this.loginHandler}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      </View>
    );
  }
}


export default function(props) {
    const navigation = useNavigation();
  
    return <LogIn {...props} navigation={navigation} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontWeight:"bold",
    textAlign: "center",
    fontSize:30,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"70%",
    backgroundColor:"#465881",
    borderRadius:20,
    height:50,
    marginBottom:10,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  btn:{
    width:"50%",
    backgroundColor:"#fb5b5a",
    borderRadius:20,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
    marginBottom:10
  },
});