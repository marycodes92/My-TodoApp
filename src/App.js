/* eslint-disable array-callback-return */
import React from 'react';
import './App.css';
import Lists from './Lists'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash);
library.add(faEdit);

class Title extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items: [],
      currentText: {
        text: "",
        key: "",
      },
    }
    this.inputHandler = this.inputHandler.bind(this);
    this.addText = this.addText.bind(this);
    this.trashItem = this.trashItem.bind(this);
    this.update = this.update.bind(this);
  }
  
  inputHandler(a){
    this.setState({
      currentText:{
        text: a.target.value,
        key: Date.now()
      }
    });
  } 

  addText(a){
    a.preventDefault();
    const newText = this.state.currentText; 
    if(newText){
      console.log(newText.text);
      // eslint-disable-next-line no-use-before-define
      const newInput = [...this.state.items, newText];
      console.log(newInput)
      this.setState({
        items: newInput,
        currentText:{
          text: "",
          key: ""
        }
      })
    }
  }

  trashItem(key){
    const selectItem = this.state.items.filter((item) => 
    item.key!==key)
    this.setState({
      items: selectItem
    })
  }

  update(text, key){
    const newTodo = this.state.items
    newTodo.map(item =>{
      if(item.key === key){
        item.text = text
      }
    })
    this.setState({
      newTodo: newTodo
    })
  }

  render(){
    return (
      <div className="todo">
        <header>
          <form className="to-do-form" onSubmit={this.addText}>
            <input type="text" placeholder="Enter todo text" 
            value={this.state.currentText.text} 
            onChange={this.inputHandler}/>
        <button type="submit">+</button>
          </form>
        </header>
        <Lists inputs = {this.state.items} trashItem= {this.trashItem} update= {this.update}></Lists>
      </div>
    );
  }
}
export default Title;
