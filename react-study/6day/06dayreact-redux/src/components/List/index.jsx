import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '@/store/actions/list.js'
class List extends Component {
    componentDidMount (){
        //console.log(this.props);
        this.props.listActions.init();
    }
    render() {
        
        return (
            <div>
                List
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        list:state.list
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        listActions : bindActionCreators(Actions,dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);