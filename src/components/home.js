import React,{ Component } from 'react';

// COMPONENTS
import Featured from './featured';
import Subscriptions from './subscriptions';
import Blocks from './blocks';


const URL_HOME = 'http://localhost:3005/home';

class Home extends Component {
    constructor(props){
        super(props)

        this.state = {
            home:''
        }
    }

    componentDidMount() {
        fetch(URL_HOME, { method: 'GET'})
        .then(response => response.json())
        .then(json => {
            this.setState({home:json})
        })
    }


    render(){
        return(
            <div>
                <Featured slides={this.state.home.slider}/>
                <Subscriptions/>
                <div className="photo_gallery">
                    <h4>Photo Gallery:</h4>
                </div>
                <Blocks blocks={this.state.home.blocks}/>
                
            </div>
   
        )
    }
}


export default Home;