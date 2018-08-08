import React, { Component } from 'react';
import './style.css';
import Quest from './Quest';

class ToDoList extends Component {
  
        constructor(props) {
        super(props)
        this.state = {
            zadania: [] 
        } 
    }
    
    addQuest = (e) =>{
    e.preventDefault();        
        let quest = {
            key: Date.now(),
            title: this._inputNameTitle.value,
            content: this._inputNameContent.value,
            date: this._inputNameData.value,
        }
        
         this.setState( (prevState) => {
                return{
                    zadania: prevState.zadania.concat(quest)
                }
        })
        this._inputNameTitle.value ="";
        this._inputNameContent.value ="";
        this._inputNameData.value ="";
    }
    
     removeQuest = (key) =>{
        
        let filteredQuests = this.state.zadania.filter(title => title.key !== key);
        this.setState( () => {
            return{
            zadania:filteredQuests
            }
        })
    }
    render() {
    
      return (
      <div>
            <h1>Wpisz nowe zadanie: </h1>
            <form onSubmit={this.addQuest}>
                <input type="text" ref={(title) => {this._inputNameTitle = title}}  placeholder="Tytuł zadania"/>
                <input type="text" ref={(content) => {this._inputNameContent = content}}  placeholder="Treść zadania"/>
                <input type="text" ref={(data) => {this._inputNameData = data}}  placeholder="Termin wykonania"/>
                <input type="submit" value="dodaj"/>
            </form>
            <h1>Lista zadań do wykonania: </h1>
            <Quest lista={this.state.zadania} removeQuest={this.removeQuest}/> 
      </div>
    );
  }
}

export default ToDoList;
