import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import './css/Home.css';
import si1 from '../img/si1.jpg'



const Home = () => {
  return (
    <div>
      
      <Carousel className='slide'>
      <Carousel.Item>
        <img src={si1} alt=""  className='islid'/>
        <Carousel.Caption>
          <h3 className='caption'>All Open Source Software Here!</h3 >
          <Button variant="success">Click Here</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://live.staticflickr.com/65535/49897062223_68f28bb074_b.jpg" alt="" className='islid'/>
        <Carousel.Caption>
          <h3>Visual Studio Code</h3>
          <p>Best Free Code <q>IDE</q> Editer For Ever</p>
        </Carousel.Caption>
      </Carousel.Item>
        <Carousel.Item>
          <img src="https://th.bing.com/th/id/R.6df77d1eaaaa4bf1f45fb178fd9af255?rik=ijWRQEtoAIaQ1A&riu=http%3a%2f%2fwiki.shopingserver.com%2fwp-content%2fuploads%2f2019%2f05%2fLinux-Download-Free-Operating-System-1.jpg&ehk=MF8hAMaifoP15ItzDFSNe1kgu7aK5PP0gL5hDAmnJY8%3d&risl=&pid=ImgRaw&r=0" alt="" className='islid' />
          <Carousel.Caption >
            <div className="Linux"><h3>Linux</h3>
            <p>
              Best Open Source Operating system
            </p></div>
          
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    
  )
}

export default Home