import React, { Component } from 'react'

/*
    高阶组件:
    1.是一个函数
    2.参数是一个组件
    3.返回值也是一个组件
*/
//是一个高阶组件
const withFetch = (ComposeC) => { 
    return class extends Component{   
        render (){          
            return (
                <ComposeC {...this.props}/>
            )
        }
    }
}

class MyCom extends Component{
    render (){
        return (
            <div>MyCom : {this.props.data}</div>
        )
    }
}
const WitchFetch = withFetch(MyCom);

export default class Demo1 extends Component{
    render (){
        return (
            <div>
                <WitchFetch data={'你好高阶组件'} />
            </div>
        )
    }
}


