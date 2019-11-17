import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "", taboflist: [] ,complete:false};
    
  }

  handelInputChange = e => {
    this.setState({ text: e.target.value })
    
  };


  addInputChange= () =>{
// let arr=this.state.taboflist
// let a=arr.concat(this.state.text )
// this.setState({taboflist:a,text:''})
this.setState({
  taboflist: this.state.taboflist.concat({text : this.state.text, complete : this.state.complete}), text:''})
// taboflist : [...this.state.taboflist, this.state.text]
}
completed = (element) => {
  this.setState({
    taboflist: this.state.taboflist.map(el => el.text === element.text ? {...element, complete: !element.complete} : el)

})}
delete = (id) => {
  this.setState({ taboflist:this.state.taboflist.filter((el ,c)=> id!== c)
  })
 
}
  render() {
    const { text } = this.state;
    return (
      <div>
        <div className="bluebox"> 
          <h1>TO-DO APP!</h1>
          <h6>Add new To-Do</h6>
          <input
            type="text"
            id="texto"
            placeholder="Enter new task"
            value={this.state.text}
            onChange={this.handelInputChange}
          />
          <br />
          <button id="add" onClick={this.addInputChange}>Add</button>
        </div>
        <div className="let">
          <h1 className="titre">Let's get some work done!</h1>
        </div>
        
        {this.state.taboflist.map((el,i) =>  <div> 
          
          <h2 className={el.complete ? 'through' : undefined}>{el.text} </h2>
          <button onClick={()=> this.completed(el)}>{el.complete ? 'Undo' : 'Complete'}</button>
          <button onClick={()=> this.delete(i)}>delete</button>
        </div>)}
      </div>
    );
  }
}
export default Todo;
 