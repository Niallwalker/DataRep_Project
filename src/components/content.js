import React from "react";
import ReactPlayer from "react-player";
import { Carousel, CardColumns, Card } from "react-bootstrap";

export class Content extends React.Component {
  render() {
    return (
      <center>
        <div class="title">
          <h1>Formula 1</h1>
          <h3>
            A tribute application made in react dedicated to one of the finest
            sports in the world
          </h3>
        </div>
        <div class="carobg">
          <Carousel style={{ width: "55%" }}>
            <Carousel.Item interval={1000} style={{ width: "100%" }}>
              <img
                className="d-block w-100"
                src="https://cdn1.formulaspy.com/v3/wp-content/uploads/2019/07/28160223/2455LB1D5131.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <div class="textbg">
                  <h3>Watch it from Start to finish</h3>
                  <p>See the lights go out and the flag drop</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500} style={{ width: "100%" }}>
              <img
                className="d-block w-100"
                src="https://motorsport-magazine.s3.eu-west-1.amazonaws.com/wp-content/uploads/2019/09/24161403/monza_podium.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <div class="textbg">
                  <h3>Taste The Champagne</h3>
                  <p>
                    Get up close and personal with the worlds finest drivers
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={0} style={{ width: "100%" }}>
              <img
                className="d-block w-100"
                src="https://thelagostoday.com/wp-content/uploads/2020/11/lew-1-1024x683.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <div class="textbg">
                  <h3>Feel It All</h3>
                  <p>
                    Feel the speed, hear the sounds and experience the best
                    sport on this earth.
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <br></br>
        <div class="intro">
          <h1>What you can see and do</h1>
          <h3>
            In this app you can view all of the teams and drivers, edit their
            names, date of births and profile pictures. You can also do the same
            for teams also. You can also delete old teams and replace them with
            new ones either.
          </h3>
        
        <br></br>
        <ReactPlayer 
        url="https://www.youtube.com/watch?v=rboKp0xZ5kQ&ab_channel=DaveEdwards" 
        controls={true}
        width="90%"
    />
   </div>
  
        <br></br>
        <div class="intro">
          <h1>Fast Facts</h1>
          <CardColumns>
            <Card border="danger" >
              <Card.Img variant="top" src="https://www.formula1.com/content/fom-website/en/teams/Ferrari/Year_by_Year/_jcr_content/featureContent/image.img.jpg/1575214803343.jpg" />
              <Card.Body>
                <Card.Title>F1's most successful team</Card.Title>
                <Card.Text>
                  Scuderia Ferrari are F1's most successful team.
                  They have competed in over 1000 races, They have won 
                  238 races and won 15 drivers titles and 16 constructors titles.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="p-3" border="danger">
              <blockquote className="blockquote mb-0 card-body">
                <p>
                “I didn’t have statistics in my mind when I was racing. It was always a consequence – a nice consequence. 
                I enjoyed it, but it wasn’t the reason I was racing.”
                </p>
                <footer className="blockquote-footer">
                  <small className="text-muted">
                    Michael Schumacher
                    <cite title="Source Title"></cite>
                  </small>
                </footer>
              </blockquote>
            </Card>
            <Card className="text-right" border="danger">
              <blockquote className="blockquote mb-0 card-body">
                <p>
                "I have no idols. I admire work, dedication and competence."
                </p>
                <footer className="blockquote-footer">
                  <small className="text-muted">
                    Aryton Senna
                
                  </small>
                </footer>
              </blockquote>
            </Card>
            <Card border="danger" >
              <Card.Img variant="top" src="https://pbs.twimg.com/media/DrwttfcWsAEkXko.jpg" />
              <Card.Body>
                <Card.Title>An F1 Driver loses 4KGs per race</Card.Title>
                <Card.Text>
                The unbearable temperature in the cockpit and the constant movement of a drivers arms, 
                legs and other parts all constitutes the main reason why drivers tend to lose up to 4 KGS in a single race. 
                </Card.Text>
              </Card.Body>
            </Card>
            <Card bg="danger" text="white" className="text-center p-3">
              <blockquote className="blockquote mb-0 card-body">
                <p>
                "Really, you should always discuss the defeats because you
                 can learn much more from failure than from success."
                </p>
                <footer className="blockquote-footer" text="white">
                  <small className="text-white">
                    Niki Lauda
                    
                  </small>
                </footer>
              </blockquote>
            </Card>
            <Card className="text-center" border="danger" >
           
              <Card.Img src="https://www.formula1.com/content/dam/fom-website/manual/Misc/2020/Testing2020/Day1/GettyImages-1201880467.jpg" />
           
              <Card.Body>
                <Card.Title>F1 Cars Are not cheap</Card.Title>
                <Card.Text>
                While the companies don't always mention the exact price, the estimated cost of a vehicle is about $7 million. This estimated cost does not include the cost of essential components.
                With them included, an average F1 car could set the team back over €15 million.
                </Card.Text>
  
              </Card.Body>
            </Card>
        
            <Card border="danger" >
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/4/42/R%C3%A4ikk%C3%B6nen_Ferrari_SF71H_Testing_Barcelona_%28cropped%29.jpg" />
              <Card.Body>
                <Card.Title>Halo Device</Card.Title>
                <Card.Text>
                  The controversial Halo Device was introduced in 2018
                  Designed to take the impact of something as heavy as a bus
                  The Halo showed its worht in recent evenst saving the lives of 
                  Charles Leclerc at the 2018 Belgian Grand Prix and Recently Romain
                  Grosjean's in his horrific crash at the 2020 Bahrain Grand Prix
                </Card.Text>
              </Card.Body>
            </Card>
          </CardColumns>
      
        <br></br>
        </div>
        <br></br>
      </center>
    );
  }
}

/* created Content class to show of Content in app
created components folder and placed Content file in it 

added a carousel with a slide show of some of F1's finest moments
and I added in a new font which is included in the fonts folder and App.css

added card column full of facts and quotes from historic champions in the sport
so that people can learn amnd read abpout their favourite drivers and teams
I also added in a react player with the F1 intro video clip

Date: 28/12/20
*/
