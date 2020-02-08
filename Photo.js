import React , {Component} from 'react';
class Photo extends Component{
  
    render() {
     return (
       <div>
          <img src={this.props.src}/>
       </div>
   )
    }
  }
  
  export default Photo ;