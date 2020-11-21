import React, { Component } from 'react'
import Erzi from '../Erzi'
import './style.scss'
class Yeye extends Component {
    constructor (){
        super()
        this.state = {
            name :'我是你爷爷',
            msg:''
        }
    }
    fn (data){
        console.log(data);
        this.setState({msg:data.msg})
    }
    render() {
        return (
            <div className='yeye'>
                爷爷组件  {this.state.msg}
                <Erzi name={this.state.name} fn={this.fn.bind(this)} msg='apple' />
            </div>
        )
    }
}
export default Yeye;