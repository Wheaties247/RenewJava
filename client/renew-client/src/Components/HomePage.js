import React, {Component} from 'react';
import wheel from '../images/wheel.png'

class HomePage extends Component{


render(){
  return(
    <div className = 'homePage'>
    <img src={wheel}  className='wheel ' width= '400px' height= '400px' />
    <h1 className='animation' >One person's trash is another's treasure</h1>
    <h1 className = 'siteName'>Renew</h1>

    </div>
    )


}


}

export default HomePage;