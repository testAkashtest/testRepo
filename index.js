var state = "base";

/**
 * Call to method initializing game and keep making a play request every .5 seconds.
 */
sendInitRequest().then(function() {
  placeGameRequest();
  // setInterval(sendPlayRequest, 500);
});

/**
 * async method : Sends a Request to Server and wait for the response.
 * wager : Object containing data to be sent to the server
 */
async function sendPlayRequest () {
    let wager = {
        bet: 5,
        state: state,
        // cheat :  "stop:10,5,48,71,23|bonus:true-1000,200,50"
      };
      
      let connectURL = 'http://localhost:3000/play';
      let response = await fetch(connectURL, {
        method: 'post',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(wager)
      });
      
      let result = await response.json();
      console.log("res play ", result);
      state = result.nextCommand;

      placeGameRequest();
}

/**
 * async method : Sends a Request to Server and wait for the response.
 * wager : Object containing data to be sent to the server
 */
async function sendPickRequest () {
  let wager = {
      bet: 5,
      state: state
    };
    
    let connectURL = 'http://localhost:3000/pick';
    let response = await fetch(connectURL, {
      method: 'post',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(wager)
    });
    
    let result = await response.json();
    console.log("res play ", result);
    state = result.nextCommand;

    placeGameRequest();
}

/**
 * async method : Sends a freespin Request to Server and wait for the response.
 * wager : Object containing data to be sent to the server
 */
async function sendFreespinRequest () {
  let wager = {
      bet: 5,
      state: state
    };
    
    let connectURL = 'http://localhost:3000/play';
    let response = await fetch(connectURL, {
      method: 'post',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(wager)
    });
    
    let result = await response.json();
    console.log("res Freespin ", result);
    state = result.nextCommand;

    placeGameRequest();
}