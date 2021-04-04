import React from 'react'

import stack from '../assets/icecreamStack.png'
import sides from '../assets/icecreamSide.png'
import avocado from '../assets/avocado.png'
import ube from '../assets/ube.png'

 const Icecream = () => {
     
    return (
        <div className="icecream-section">

            <div className="image icecream-stack">

                <img src={stack} alt="Icecream balls stacked on top of each other" />

                <div className="desc">

                    <div className="desc-summer">
                        <p>Top 10 <br/>Hottest Flavors</p>
                        <p>Summer 2021</p>
                    </div>


                </div>
                    
            </div>
            
            <div className="second-block">
               
                <div className="image icecream-ube">

                    <img src={ube} alt="Ube flavored icecream"  />  

                    <div className="desc">

                        <button>Get It</button>

                    </div>
                </div>

                <div className="image icecream-avocado">
                    
                    <img src={avocado} alt="Avocado flavored icecream"  />

                    <div className="desc">

                        <button>Get It</button>

                    </div>
                </div>
                 
                <div className="image icecream-sides">
                    <img src={sides} alt="Icecreams side by side" />

                    <div className="desc">

                        <div className="desc-phil">
                            <h1>Our Ice Cream Philosophy</h1>
                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/><br/>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                        </div>


                    </div>
                </div>

            </div>          
            
        </div>
    )
}


export default Icecream;