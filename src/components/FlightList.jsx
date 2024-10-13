import React from 'react';
import '../assets/scss/FlightList.scss';
import useFetch from '../hooks/useFetch';

export default function FlightList() {
  let url = 'http://localhost:8000/flights';
  let { data, loading, error } = useFetch(url);
  console.log(data);
  return (
    <section className="blog" id="blog">
      <div className="container">
        {/* <div className="title blog-text">
          <h2>Latest Blog</h2>
          <p>recent blogs about flights</p>
        </div> */}
        {/* <div className="blog-content"> */}
        <div className="container" style={{ display: "flex", justifyContent: "center", border: "1px solid gray", borderRadius: '20px' }}>
          {/* item */}
          {data && data.aerocrs && data.aerocrs.flights && Array.isArray(data.aerocrs.flights.flight) ? (
            data.aerocrs.flights.flight.map((i, index) => (
              <div key={index} style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="blog-img" style={{ marginTop: '100px' }}>
                  <img src={i.airlineLogo} alt="" />
                  {/* <span><i className="far fa-heart"></i></span> */}
                </div>
                <div className="blog-text">
                  <h2>{i.airlineName || 'Default Title'}</h2> {/* Replace 'title' with the actual field */}
                  <div>
                    Departure Time: {new Date(i.STD).toLocaleString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </div>
                  <div>
                    Arrival Time: {new Date(i.STA).toLocaleString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </div>
                  <div>From : {i.fromcode || 'Default description'}</div> {/* Replace 'description' with the actual field */}
                  <div>To : {i.tocode}</div>
                  {/* <a href="#">Read More</a> */}
                </div>
              </div>
            ))
          ) : (
            <p>No flights available</p>
          )}
        </div>
      </div>
    </section>
  )
}
