import React from 'react';

import './css/software.css';
import Button from 'react-bootstrap/Button';

const Software = () => {
  return (
    <div className='soft'>
        
        <div className="software">
            <div className="cont1">
                <div className='continer'>
                    <div className="firsts">
                        <div className="imgs1">
                            <img src="https://www.seekpng.com/png/detail/212-2122682_obs-studio-logo-1-logo-obs-studio.png" alt="" className="imgs1" />
                        </div><br />
                        <p>OBS</p>
                        <p>Best open sourese streaming Software <a href="#">Download</a></p>
                    </div>
                    
                </div>
                <div className='continer'>
                    <div className="firsts">
                        <div className="imgs1">
                            <img src="https://i0.wp.com/prokeypc.com/wp-content/uploads/2022/09/OpenShot-Video-Editor-Logo.jpg?fit=200%2C200&ssl=1" alt="" className="imgs1" />
                        </div><br />
                        <p>Open Shot</p>
                        <p>Best video editor for windos  <a href="#">Download</a></p>
                    </div>
                    
                </div>
                <div className='continer'>
                    <div className="firsts">
                        <div className="imgs1">
                            <img src="https://www.pngkey.com/png/detail/95-957460_gimp-logo-transparent-background.png" alt="" className="imgs1" />
                        </div><br />
                        <p>Gimp</p>
                        <p>Best Photo editer for windoes<a href="#">Download</a></p>
                    </div>
                
                    
                </div>
                <div className='continer'>
                    <div className="firsts">
                        <div className="imgs1">
                            <img src="https://download.onlyoffice.com/assets/fb/fb_icon_325x325.jpg" alt="" className="imgs1" />
                        </div><br />
                        <p>Onliy Office</p>
                        <p>Best Alternative for Microsoft office<a href="#">Download</a></p>
                    </div>
                    
                </div>
                <Button variant="success" className='button'>Explore More</Button>{' '}               
            </div>
        
           
                
           
            
            
    
        </div>
    </div>
  )
}

export default Software