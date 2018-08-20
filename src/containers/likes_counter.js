import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addLikes } from '../actions'
import { bindActionCreators } from 'redux';


class LikesCounter extends Component {
    constructor(props){
        super(props)

        this.state = {
            temp:''
        }
    }

    render() {
        return (
            <div className="addlikes-wrapper">
                <h3>How do you feel about this wine ?</h3>
                <div className="addlikes-container">
                    <div 
                    className="btn like"
                    onClick={()=>this.props.addLikes('ADD',this.props.wines.detail[0].likes,this.props.wines.detail[0].id)}>
                        <div className="hits">Like {this.props.likes}</div>
                        <div className="icon">
                            <i className="fa fa-thumbs-up"></i>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div 
                    className="btn dislike"
                    onClick={()=>this.props.addLikes('REMOVE',this.props.wines.detail[0].likes,this.props.wines.detail[0].id)}>
                        <div>Dislike {this.props.dislikes}</div>
                        <div className="icon">
                            <i className="fa fa-thumbs-down"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        wines:state.wines
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({addLikes},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(LikesCounter);