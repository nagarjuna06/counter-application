import {Component} from 'react'
import './index.css'

class Counter extends Component{
    state={count:0}
    onIncrement=()=>{
        this.setState(prevState=>(
            {count:prevState.count+1}))
    }
    onDecrement=()=>{
        this.setState(prevState=>(
            {count:prevState.count-1}))
    }
    onReset=()=>{
        this.setState({count:0})
    }
    render(){
        const {count} = this.state
        return(
        <div className='counter-container'>
            <h1>Counter</h1>
            <div className='counter'>
                {count>0 ? <h1 className='positive'>{count}</h1> : count===0? <h1>{count}</h1> :<h1 className='negitive'>{count}</h1>}
            </div>
            <div className='btn-container'>
                <button className='decrement' onClick={this.onDecrement}>Decreament</button>
                <button className='reset' onClick={this.onReset}>Reset</button>
                <button className='increment' onClick={this.onIncrement}>Increament</button>
            </div>
        </div>
   ) 
}
}

export default Counter


