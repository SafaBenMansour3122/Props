import React , {Component} from 'react';



class Title extends Component{
  
    render() {
      if(this.props.small){
     return (
     <h6 style={this.props.style}>{this.props.children}</h6>
      
   )
    }
    else{
      return (
        <h1 style={this.props.style}>{this.props.children}</h1>
         
      )
    
  }
}
}
  
  export default Title ;