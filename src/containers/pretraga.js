import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getWine} from '../actions';
import {bindActionCreators} from 'redux';
import List_of_wines from './list_of_wines';


class Pretraga extends Component {
    constructor(props){
        super(props)
    
        this.state = {
            keyword:''
        }
    }

    searchCars= (event) =>{
        event.preventDefault();
        this.props.getWine(this.state.keyword);
    }

    handleChange = (event) =>{
        this.setState({
            keyword:event.target.value
        })
    }

    render() {
        return (
            <div className="main_search">
                <form onSubmit={this.searchCars}>
                    <input type="text" placeholder="Name of wine" value={this.state.keyword} onChange={this.handleChange}/>
                </form>
                <List_of_wines/>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({getWine},dispatch);
}

export default connect(null,mapDispatchToProps)(Pretraga);