import React, { Component } from "react";
import CountryCard from "./components/CountryCard";
import { Grid, Segment } from "semantic-ui-react";

class CountryContainer extends Component {
  state = {};
  render() {
    return (
      <Segment>
        <Grid columns={4} relaxed="very">
          <Grid.Column>
            <CountryCard />
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default CountryContainer;
