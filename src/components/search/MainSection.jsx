import React, { Component, PropTypes } from 'react';
import LocationItem from './LocationItem';
import { Checkbox, List } from 'material-ui';
import {Tabs, Tab} from 'material-ui/Tabs';

const defaultStyle = {
  width: 300,
  marginLeft: 20
};


class MainSection extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { tab: 'LIST' };
  }

  handleChange = (value) => {
   this.setState({
     tab: value,
   });
  }

  render() {

    return (
      <Tabs
       value={this.state.tab}
       onChange={this.handleChange}
       >
         <Tab label="LIST" value="LIST" >
           <div>
              {this.props.locations.map((location)=><LocationItem key={location._id} location={location}/>)}
           </div>
         </Tab>
         <Tab label="MAP" value="MAP">
           <div>
             <p>
               Empty Map View
             </p>
           </div>
         </Tab>
        </Tabs>
    );
  }
}
const styles = {
    headline: {
      fontSize: 24,
      paddingTop: 16,
      marginBottom: 12,
      fontWeight: 400,
    },
};

export default MainSection;
