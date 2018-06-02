import React from 'react';
import { Grid, Row, Col, Well, Thumbnail, Button} from 'react-bootstrap';

class PopulatePairings extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Grid>
          <Row key=''>
            <div display="block">
               <Col xs={3} md={3}>
                  <Thumbnail src={`http://image.tmdb.org/t/p/original/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg`}/>
                </Col>
               <Col xs={3} md={3}>
                  <div className="pairing-info">
                    <h4>Deadpool 2</h4>
                    <p>paired with:</p>
                    <h4>Villa Maria Cellar Selection Sauvignon Blanc 2017</h4>
                    <h1>&#x1f44d;   &#x1f44e;</h1>
                  </div>
                </Col>
                <Col xs={3} md={3}>
                  <Thumbnail src={"https://dx5vpyka4lqst.cloudfront.net/products/974527/images/thumb.png"}/>
                </Col>
            </div>
            <p></p>
            <div display="block">
               <Col xs={3} md={3}>
                  <Thumbnail src={`http://image.tmdb.org/t/p/original/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg`}/>
                </Col>
               <Col xs={3} md={3}>
                  <div className="pairing-info">
                    <h4>Jurassic World: Fallen Kingdom</h4>
                    <p>paired with:</p>
                    <h4>Casarsa Merlot Delle Venzie IGT</h4>
                    <h1>&#x1f44d;   &#x1f44e;</h1>
                  </div>
                </Col>
                <Col xs={3} md={3}>
                  <Thumbnail src={"https://dx5vpyka4lqst.cloudfront.net/products/351791/images/thumb.png"}/>
                </Col>
            </div>
          </Row>
      </Grid>
    )
  }
}

export default PopulatePairings;

