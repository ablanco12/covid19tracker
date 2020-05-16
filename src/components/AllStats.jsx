import React, { Component } from "react";
import { Divider, Grid, Segment } from "semantic-ui-react";

class allStats extends Component {
  state = {};
  render() {
    return (
      <Segment>
        <h1>COVID-19 Live Stats</h1>
        <Divider section />
        <Grid columns={3} relaxed="very">
          <Grid.Column>
            <h1>CASES</h1>
          </Grid.Column>
          <Grid.Column>
            <h1>DEATHS</h1>
          </Grid.Column>
          <Grid.Column>
            <h1>RECOVERED</h1>
          </Grid.Column>
        </Grid>
        <Divider section />
      </Segment>
    );
  }
}

export default allStats;
