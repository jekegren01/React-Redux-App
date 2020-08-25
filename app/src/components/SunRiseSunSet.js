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

    useEffect(() => {

    }, []);

    return (
        <div>
            <input
                className="dec-input"
                type="decimal"
                name="newLatitude"
                value={newLatitude}
                onChange={handleLatChanges}
            />
            <input
                className="dec-input"
                type="decimal"
                name="newLongitude"
                value={newLongitude}
                onChange={handleLngChanges}
            />
            <button onClick={() => {props.submit(newLatitude,newLongitude)}}>Submit</button>
            <h2>
                Sunrise: {props.sunrise}
            </h2>
            <h2> 
                Sunset: {props.sunset}
            </h2>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = { submit };

export default connect(mapStateToProps, mapDispatchToProps)(SunRiseSunSet);