import React,{Component} from 'react';
import {Text} from 'react-native';

export default class Judul extends Component {
	render(){
		return(
			<Text style={stylee.judul}>{this.props.title}</Text>
			)
}

}
const stylee = {
	judul:{
		color:'#ffa502',
		fontSize: 50,
		fontWeight:'bold',	
		

	}
}

