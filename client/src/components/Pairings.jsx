import React from 'react';
import { Button } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import PopulatePairings from './PopulatePairings.jsx';
//import SidebarMovies from './SidebarMovies.jsx';
import moviesData from '../data/moviesData.js';
import winesData from '../data/winesData.js';

class Pairings extends React.Component {
  constructor(props){
    super(props);
    this.state = {
     // movies : []
    }
  }

  render() {
    return(
      <Grid>
      <div>hi there</div>
        {/*<SidebarMovies movies={moviesData}/>*/}
        <PopulatePairings movies={moviesData} wines={winesData}/>
      </Grid>
      )
  }
}

export default Pairings;