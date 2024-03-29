import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


function MainPage() {
  const [hats, setHats] = useState([]);

  const getHats = async () => {
    const hatUrl = 'http://localhost:8090/api/locations';
    const hatResponse = await fetch(hatUrl);

    if (hatResponse.ok) {
      const data = await hatResponse.json();
      const hats = data.hats;
      setHats(hats);
    }
  }

  useEffect ( () => {
    getHats();
  }, [
    setHats,
  ]
  )

  return (
    <div className="px-4 py-5 my-5 text-center"  style={{backgroundColor: "#fafafa"}}>
      <h1 className="display-5 fw-bold">WARDROBIFY!</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
            Need to keep track of your shoes and hats? We have
            the solution for you!
        </p>
      </div>
      <br></br>
      <div></div>
      <h3 className="display-5 fw-bold" style={{fontSize: "30px"}}>Hats</h3>
      <div className="row pb-5 mb-4">
        {hats.map(hat => {
          return (
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0"  key={hat.href}>
              <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                <img
                      src={hat.picture_url}
                      alt="hat"
                      className="img-fluid d-block mx-auto mb-3"
                  />
                <h4><Link to="/hats" className="text-dark">{ hat.style_name }</Link></h4>
                <p className="small text">{ hat.fabric }</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  );
      }

export default MainPage;
