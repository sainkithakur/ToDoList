import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Todo from "./Todo";
const App = () => {
const [inputList, setInputList] = useState("");
const [Items, setItems] = useState([]);

const itemEvent = (event) => {
  setInputList(event.target.value)
};
const listofItems = () => {
setItems((oldItems) => {
  return [...oldItems, inputList];
});
setInputList('');

};
const deleteItems = (id)=>{
  console.log('deleted')

  setItems((oldItems) => {
    return oldItems.filter((arrElem, index) => {
      return index !== id;

    })
  })
};
  return (
    <>
    <div className="main_div">
      <div className='center_div'>
      <br/>
      <div className= "container">  
      <h1> ToDO List</h1>
      
      <br/>
      <input type="text" placeholder='Add a Items'
      value={inputList} onChange={itemEvent}/>
      <button onClick={listofItems}> + </button>
      </div>
      <ol>
       {/* <li> {inputList}</li>*/}
       {Items.map((itemval,index) => {
       return <Todo key={index} id={index} text={itemval}
       onSelect = {deleteItems}
       
       />;
       })}
      </ol>
      </div>
      
    </div>
    </>
  );
}

export default App;
