
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class List_of_wines extends Component {
    
    listOfWines = ({list}) =>{
        if(list){
            return list.map((item)=>{
                return(
                        <Link to={`/vinalista/${item.id}`} key={item.id} className="wine_item">
                            <div className="left">
                                <img src={`/images/vina_item/${item.image}`}/>
                            </div>
                                <div className="right">
                                    <h4>{item.naziv}</h4>
                                    <p>Type of wine: {item.vrsta}</p>
                                    <p>Alcohol percentage: {item.procenat}</p>
                                    <p>Year of harvest: {item.berba}</p>
                                </div>

                        <div className="tags">
                            <span><i className="fa fa-thumbs-up" aria-hidden="true"></i> {item.likes[0]}  </span>
                            <span><i className="fa fa-thumbs-down" aria-hidden="true"></i> {item.likes[1]}  </span>
                        </div>
                        
                        </Link>
                    
                )
            })
        }
    }

    render() {
        return (
            <div className="main_results">
                {this.listOfWines(this.props.wines)}
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        wines:state.wines
    }
}

export default connect(mapStateToProps,null)(List_of_wines);    
