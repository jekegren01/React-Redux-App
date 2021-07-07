import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { submit } from '../actions';

const SunRiseSunSet = props => {
    const [newLatitude, setNewLatitude] = useState('');
    const [newLongitude, setNewLongitude] = useState('');

    const handleLatChanges = (e) => {
        setNewLatitude(e.target.value);
    };

    const handleLngChanges = (e) => {
        setNewLongitude(e.target.value);
    };
    
    let utcrise = `${props.sunrise}`;
    let localSunrise = utcrise.toString();
    // 

    if (props.isFetching) {
        return <h2>...loading</h2>
    }


    // useEffect(() => {
    //     props.submit();
    // }, [props.submit]);

    return (
        <div className="container">
            <input
                className="dec-input"
                type="decimal"
                name="newLatitude"
                value={newLatitude}
                onChange={handleLatChanges}
                placeholder='latitude in decimal'
            />
            <input
                className="dec-input"
                type="decimal"
                name="newLongitude"
                value={newLongitude}
                onChange={handleLngChanges}
                placeholder='longitude in decimal'
            />
            <button onClick={() => {props.submit(newLatitude,newLongitude)}}>Submit</button>
            <h2>
                Sunrise: {localSunrise}
            </h2>
            <h2> 
                Sunset: {props.sunset}
            </h2>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        lat: state.lat,
        lng: state.lng,
        sunrise: state.sunrise,
        sunset: state.sunset
    }
};

const mapDispatchToProps = { submit };

export default connect(mapStateToProps, mapDispatchToProps)(SunRiseSunSet);