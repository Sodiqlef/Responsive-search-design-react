import React, {Component} from "react"
import Card from "./components/card/card";
import Input from "./components/search-box/input";
import './App.css';



class App extends Component {
  constructor(){
    super();

    this.state = {
      students: [],
    searchField: ''}
  }

componentDidMount() {
  fetch('http://jsonaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({students: users}))
}
  render(){
    const {students, searchField} = this.state
    const filteredStudent = students.filter(student => 
      student.name.toLowerCase().includes(searchField.toLowerCase()))
      
      const onChangeHandler = (event) => {
        return this.setState({searchField: event.target.value})
      }


    return (
      <div className="App">
      <header className="App-header">
        <Input onChangeHandler={onChangeHandler}/>
        
        
        {filteredStudent.map(each => {

          return <React.Fragment><Card key={each.name}
                       image={`https://robohash.org/set_set2/bgset_bg${each.id}/${each.id}`}
                       alt={each.name}
                       name={each.name}></Card>
                       
                       </React.Fragment>
        }) }
                
      </header>
    </div>
    )
  }
}

export default App;
