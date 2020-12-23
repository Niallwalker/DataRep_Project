import React from "react";
import Carousel from "react-bootstrap/Carousel";


export class Content extends React.Component {
  render() {
    return (
      <center>
          <div class="title">
          <h1>Formula 1</h1>
          <h3>A tribute application made in react dedicated to one of the finest sports in the world</h3></div>
          <div class="carobg">
        <Carousel style={{ width: "65rem" }}>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://www.snaplap.net/wp-content/uploads/2019/07/Max-Verstappen-Red-Bull.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
            <div class="textbg"> 
              <h3>Watch it from Start to finish</h3>
              <p>Sell the lights go out and the flag drop</p></div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://motorsport-magazine.s3.eu-west-1.amazonaws.com/wp-content/uploads/2019/09/24161403/monza_podium.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
            <div class="textbg"> 
              <h3>Taste The Champagne</h3>
              <p>Get up close and personal with the worlds finest drivers</p></div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.thesun.co.uk/wp-content/uploads/2020/11/98ba8622-5f90-43b4-a415-7e657b2afd48.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
                <div class="textbg">
              <h3>Feel It All</h3>
              <p>
                Feel the speed, hear the sounds and experience the best sport on
                this earth.
              </p></div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
</div>
<br></br>
        <div class="title">
          <h1>What you can see and do</h1>
          <h3>In this app you can view all of the teams and drivers, edit their names, date of births and profile pictures.
            You can also do the same for teams also. You can also delete old teams and replace them with new ones either.</h3></div><br></br>
      </center>
      
    );
  }
}


/* created Content class to show of Content in app
created components folder and placed Content file in it 

added a carousel witha  slide show of some of F1's finest moments
and I added in a new font which is included in the fonts folder and App.css*/
