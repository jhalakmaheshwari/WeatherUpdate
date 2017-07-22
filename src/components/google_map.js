/**
 * Created by Jhalak on 7/22/2017.
 */
import React, { Component } from 'react';

class GoogleMap extends Component {
    // one of our lifecycle method that gets called automatically after it is rendered on the screen
    componentDidMount(){
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }

    render(){
        // this ref="map" +> will give direct reference to this html element in this class by this.ref.map
        return <div ref="map"></div>
    }

}

export default GoogleMap;