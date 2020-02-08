import React , {Component} from 'react';
import Photo from './Photo.js'
import Title from './Title.js'
import Image from './photo.png'
class Wrapper extends Component{
  
    render() {
     return (
       <div>
          <Photo src= {Image} />

<Title style={{

    color:'red'

}}>My Name here</Title>

<Title small>My job here</Title>
       </div>
   )
    }
  }
  
  export default Wrapper ;