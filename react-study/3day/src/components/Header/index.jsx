import React, { Component } from 'react'
class Header extends Component {

    render() {
        //React.Children : 提供了用于处理 this.props.children 不透明数据结构的实用方法。
        /*
        console.log(React.Children.count(this.props.children)) //获取子组件个数
        try{
            console.log(React.Children.only(this.props.children)) //验证children里是否只有唯一的子组件并返回它,否则这个方法会抛出错误。
        }catch(e){
            console.log(e);
        }   
        */    
        return (
            <div>
               <h2>头部</h2>
               {
                   React.Children.map(this.props.children,(element,index)=>{
                      return (
                          <>
                            {
                                element.props.name == 'new'
                                ?
                                <div style={{color:'red'}}>
                                    {element} {element.props.name}
                                </div>
                                :
                                <div>{element} {element.props.name}</div>
                            } 
                          </>   
                      )
                   })
               }
            </div>
        )
    }
}
export default Header; 