import React, { Component } from 'react'
import Sunzi from '../Sunzi'
import PropTypes from 'prop-types';
class Erzi extends Component {
    constructor (props){
        super()
        //console.log(props);
    }
    emitData (){
        //通过调用父组件传递的函数,中转的方式给父组件传递数据
        this.props.fn({msg:'我是你的儿子'});
    }
    render() {
        return (
            <div>
                儿子组件 {this.props.name}
                <button onClick={this.emitData.bind(this)}>点击我给爷爷组件传递数据</button>
                <Sunzi />
            </div>
        )
    }
}
//对接收的props指定默认值
Erzi.defaultProps = {
    name:'Jack'
}
//对接收的props数据验证 
Erzi.propTypes = {
    name :PropTypes.string, //规定父组件传递过来必须是string类型 并且 .isRequired 必须传
    fn : PropTypes.func, //规定数据类型
    msg : function(props, propName, componentName){
        console.log(props, propName, componentName)
        if( !/^app/.test(props[propName]) ){
            return new Error('内容要求必须以app开头')
        }   
    } // 自己定义验证规范
}
export default Erzi;
