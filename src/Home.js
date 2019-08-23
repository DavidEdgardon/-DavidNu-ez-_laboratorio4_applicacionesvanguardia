// JavaScript source code
import React from 'react';
import Detail from './Detail';

class Home extends React.Component{
	constructor(props){
		super(props);
		this.state = {title: 'Laboratoria 4'};
		this.update = this.update.bind(this);
	}

	update(){ 
		this.setState({title: 'Aplicaciones de Vanguardia' })
	}

	render(){
	const { title } = this.state
	return (
	<>
	<h1>{title}</h1>
	<Detail detailTitle='Primer Ejercicio'/>
	<button onClick={this.update}>Change</button>
	</>
	);
	}
}

export default Home;