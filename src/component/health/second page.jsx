import React from 'react'
import logo from "../Assets/9319774_4136934.svg";
import "./style.css"
function  Page() {
  return (
    <body>
      <h2 class="pg2-header">Our Main Services Categories</h2>

      <div class="row pricing-row">
        <div class="col-lg-4 col-md-6 pricing-column">
          <div class="card">
            <div class="card-header">
              <img src={logo} alt="" />
            </div>
            <div class="card-body">
              <h2>Chat with Docter</h2>
              <p>
                You can connect directly, quickly and easily, and there is no
                need to doubt the quality of the consultation and treatment
                offered.
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6  pricing-column">
          <div class="card">
            <div class="card-header">
              <img src={logo} alt="" />
            </div>
            <div class="card-body">
              <h2>Health Store</h2>
              <p>
                Talk about the health complaints you are experiencing and dont
                hesitate to ask about the proper treatment
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-12 pricing-column">
          <div class="card">
            <div class="card-header">
              <img src={logo} alt="" />
            </div>
            <div class="card-body">
              <h2>Visit Hospitals</h2>
              <p>
                Get priority services in hospitals with Haidoc. Which allows you
                to go to the hospital more practically and save time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Page




{/* <!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>TinDog</title>
  
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
  <script herf="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
   
  <link href="style.css" rel="stylesheet">
</head> */}
