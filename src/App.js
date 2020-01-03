import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state={
    persons:[
      {name:"Nafiz",age:22,id:'asd1'},
      {name:"Fahim",age:23,id:'asd2'},
      {name:"Lio",age:33,id:'asd3'}
    ],
    showPerson : false
  }

  switchNameHandler = (newName)=>{
    
    this.setState({
      persons:[
        {name:newName,age:22},
      {name:"Nafiz",age:23},
      {name:"Nafiz",age:33}
      ]
    });    
  }
  nameChangedHandler = (event,id)=>{

    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    })

    const person = {...this.state.persons[personIndex]};
    person.name=event.target.value;
    const persons=[...this.state.persons];
    persons[personIndex]=person;
    this.setState({
      persons:persons
    });
  }
  togglePersonHandler = ()=>{
      this.setState({showPerson: !this.state.showPerson})
  }

  togglePersonHandler2 = ()=>{
    this.setState({showPerson: !this.state.showPerson})
}

deletePersonHandler = (personIndex)=>{
  // const persons = this.state.persons; // object and array are ref type in js so here it is bad practice
  const persons=[...this.state.persons];//now a new copy saved to  the perosns array
  persons.splice(personIndex,1);
  this.setState({persons:persons});
}

  render(){

    const style = {
      backgroundColor:'white',
      font: 'inherit',
      padding: '8px',
      marginTop: '8px',
      border: '2px solid blue',
      cursor:'pointer'
    }

    var persons = null;

    if(this.state.showPerson){

      persons = (

        <div>

            {/* <Person name={this.state.persons[0].name} changed={this.nameChangedHandler} click={this.switchNameHandler.bind(this,'lol')} age={this.state.persons[0].age} >My nick name</Person>
            <Person name={this.state.persons[1].name}  age={this.state.persons[1].age} ></Person>
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age} ></Person> */}

            {this.state.persons.map((person,index)=>{
              return <Person
                      name={person.name}
                      age={person.age} 
                      key={person.id}
                      changed={(event)=>this.nameChangedHandler(event,person.id)}
                        />
            })}

            

        </div>
        
      );
    }


    return (
      <div className="App">
        <button style={style} onClick={this.switchNameHandler.bind(this,'Fahim')}>Switch name</button>
        {/* <Person name={this.state.persons[0].name} changed={this.nameChangedHandler} click={this.switchNameHandler.bind(this,'lol')} age={this.state.persons[0].age} >My nick name</Person>
        <Person name={this.state.persons[1].name}  age={this.state.persons[1].age} ></Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} ></Person> */}
      
        <button style={style} onClick={this.togglePersonHandler}>Toggle show/hide</button> 
        {
          //this is code for single line js tinary operation
        }
        {
            this.state.showPerson===true ?
          <div>

        {/* <Person name={this.state.persons[0].name} changed={this.nameChangedHandler} click={this.switchNameHandler.bind(this,'lol')} age={this.state.persons[0].age} >My nick name</Person>
        <Person name={this.state.persons[1].name}  age={this.state.persons[1].age} ></Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} ></Person> */}

        </div>:null
        }

        {
          //this is code for if else js  operation
        }
         <button style={style} onClick={this.togglePersonHandler2}>Toggle show/hide with function</button> 
        {persons}
        
    </div>
  );
 }
}

export default App;
