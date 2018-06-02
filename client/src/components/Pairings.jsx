import React from 'react';
import { Button } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import PopulatePairings from './PopulatePairings.jsx';
import pairings from '../data/pairings.js';
import $ from 'jquery';

class Pairings extends React.Component {
  constructor(props){
    super(props);
    this.state = {
     movies : []
    }
  }

  render() {
    return(
      <Grid>
        <PopulatePairings pairings={pairings}/>
      </Grid>
      )
  }
}

export default Pairings;