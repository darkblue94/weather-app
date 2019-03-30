import React from "react";

//stateless functioncal component
const Weather= (props) =>(
// explicitly returning the div element
            <div className="weather__info">
                {
                    props.city && props.country &&  <p className="weather__key">Location: 
                    <span className="weather__value"> {props.city},{props.country} </span>
                    </p>
                }
                {
                    props.temperature && <p className="weather__key">Temperature: 
                    <span className="weather__value"> {props.temperature} </span>
                    </p>
                }
                {
                    props.description && <p className="weather__key">Conditions:
                    <span className="weather__value"> {props.description} </span>
                    </p>
                }
                {
                    props.humidity && <p className="weather__key">Humidity:
                    <span className="weather__value"> {props.humidity} </span>
                    </p>
                }
                {
                    props.error && <h1 className="weather__error"> {props.error} </h1>
                }
            </div>
        );
export default Weather;