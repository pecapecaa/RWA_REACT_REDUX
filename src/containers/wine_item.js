import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {wineDetail} from '../actions';
import LikesCounter from '../containers/likes_counter';

class Wine_item extends Component {

    renderDetail= ({detail}) => {
        if(detail)
        {
          return detail.map((item)=>{
            return (
              <div key={item.id} className="wine_detail">
                 <img src={`/images/vina_item/${item.image}`}/>
                 <div className="content">
                    <h1>Name: {item.naziv}</h1>
                    <h4>Type of wine: {item.vrsta}</h4>
                    <h5>
                        Alcohol percentage: {item.procenat} <br/>
                        Year of harvest: {item.berba} <br/>
                        Price: {item.cena} <br/>
                    </h5>
                    <p>
                        {item.detalji}
                    </p>
                 </div>
                 <div>
                      <LikesCounter articleId={item.id} likes={item.likes[0]} dislikes={item.likes[1]}/>
                 </div>
              </div>
            )
          })
        }
    }

    componentDidMount(){
        this.props.wineDetail(this.props.match.params.id)
      }
    

    render() {
        return (
            <div className="wine_detail">
               {this.renderDetail(this.props.wines)}
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
    return bindActionCreators({wineDetail},dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(Wine_item);