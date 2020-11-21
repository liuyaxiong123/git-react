import React, { Component } from 'react'

class Sunzi extends Component {
    constructor (){
        super()
        this.box = React.createRef();
    }
    componentDidMount (){
        //console.log(document.getElementById('box'))
        //console.log(this.refs.box); 老API
        console.log(this.box.current); //新API
    }
    render() {
        return (
            <div>
                {/* <div id='box' ref='box'>孙子组件</div> */}
                <div ref={this.box}>孙子组件</div>
            </div>   
        )
    }
}
export default Sunzi;