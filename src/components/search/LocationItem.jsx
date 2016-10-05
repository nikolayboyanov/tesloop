import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { ListItem, IconButton, Styles } from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton';

class LocationItem extends Component {
  constructor(props, context) {
    super(props, context);
  }

  static defaultProps =   {
      location:{
        placeName: 'Luxe City Center Hotel',
        city: 'Los Angels, CA',
        address: '123 Main St',
        distance: 0.1,
      }
  }

  handleEdit () {
    this.setState({ editing: true });
  }

  renderDistance() {
    return (<p>
      Distance <span>0.1</span> mi
      </p>)
  }

  render() {
    const iframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.174569944!2d-118.69192052470684!3d34.020181256443756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos+Angeles%2C+California!5e0!3m2!1sro!2sus!4v1469025417603" width="100%" height="120" frameborder="0" style="border:0" allowfullscreen></iframe>';
    return (
      <div className="location">
         <div className="left">
            <div className="text">
               <p className="title">{this.props.location.name}</p>
               <p className="green">Closest Pick Up Point</p>
               <p>{this.props.location.city}<br/> {this.props.location.streetAddress} </p>
            </div>
            <div className="map" >
              <div dangerouslySetInnerHTML={{__html: iframe}}>
              </div>
            </div>
            <RaisedButton label={"Details about Pick Up at " + this.props.location.name} backgroundColor={'#c2c2c2'} labelColor={'#ffffff'} className="raised-button--rounded" labelStyle={{fontSize: 20}}  href=" http://www.tesloop.com/tesloop-location-culver-city"  style={style.full} />         </div>
         <div className="right">
            <RaisedButton label="Select" backgroundColor={'#906AB7'} labelColor={'#ffffff'} className="select" style={style.select} labelStyle={{fontSize: 20}} />
            {this.renderDistance()}
            <p className="uber">Uber Estimate:</p>
            <a href="#">enter Origin address</a>
         </div>
      </div>
    );
  }
}

const style = {
  select:{
    margin: 0,
    height: 50,
    fontSize: 20
  },
  full: {
    container: {
      borderRadius: 20
    },
    width: '100%',
    height: 50,
    fontSize: 20,
  }
};
LocationItem.propTypes = {
  placeName: React.PropTypes.string,
  city: React.PropTypes.string,
  address: React.PropTypes.string,
  distance: React.PropTypes.number,
};

export default LocationItem;
