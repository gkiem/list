import React, {useState} from 'react'

function Counter(){
    
    const [value, setValue] = useState(0);

    return(
        <div>
            <h1>Current number: {value}</h1>
            <button onClick={() => setValue(value + 1)}>Add 1</button>
            <button onClick={() => setValue(value - 1)}>Remove 1</button>
        </div>
    )
}

// CLASS VERSION
// class Counter extends React.Component {
//     constructor(props){
//       super(props);
//       this.state ={
//       value: 0
//       };
//     }
//     render(){
//       return (
//         <div><h1>
//           Current number: {this.state.value}
//           </h1>
//           <button onClick={() =>this.setState({value:this.state.value+1})}>
//             Add 1
//             </button>
//           </div>
//       )
//     }
//   }

export default Counter
