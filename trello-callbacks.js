function getBoard(callback) {
  console.log('Fetching board...');
  return setTimeout(function () {
    let board = {
      id: "def453ed",
      name: "Thanos"
    };
    console.log('Received board');
    callback(board);
  }, 1000);
}

function getLists(boardId, callback) {
  console.log(`Fetching lists for board id ${boardId}...`);
  return setTimeout(function () {
    let lists = {
      def453ed: [
        {
          id: "qwsa221",
          name: "Mind"
        },
        {
          id: "jwkh245",
          name: "Space"
        },
        {
          id: "azxs123",
          name: "Soul"
        },
        {
          id: "cffv432",
          name: "Time"
        },
        {
          id: "ghnb768",
          name: "Power"
        },
        {
          id: "isks839",
          name: "Reality"
        }
      ]
    };
    console.log(`Received lists for board id ${boardId}`);
    callback(lists[boardId]);
  }, 1000);
}

function getCards(listId, callback) {
  console.log(`Fetching cards for list id ${listId}...`);
  return setTimeout(function () {
    let cards = {
      qwsa221: [
        {
          id: "1",
          description: `Having acquired the Power Stone, one of the six Infinity Stones,from the planet Xandar`
        },
        {
          id: "2",
          description: `Having acquired the Power Stone, one of the six Infinity Stones,from the planet Xandar`
        },
        {
          id: "3",
          description: `Having acquired the Power Stone, one of the six Infinity Stones,from the planet Xandar`
        }
      ],
      jwkh245: [
        {
          id: "1",
          description: `intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.`
        },
        {
          id: "2",
          description: `intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.`
        },
        {
          id: "3",
          description: `intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.`
        },
        {
          id: "4",
          description: `intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.`
        }
      ],
      azxs123: [
        {
          id: "1",
          description: `intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.`
        },
        {
          id: "2",
          description: `intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.`
        }
      ],
      cffv432: [
        {
          id: "1",
          description: `intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.`
        },
        {
          id: "2",
          description: `intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.`
        }
      ],
      ghnb768: [
        {
          id: "1",
          description: `intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.`
        },
        {
          id: "2",
          description: `intercept a spaceship carrying the surviving Asgardians. As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Heimdall and Loki.`
        }
      ]
    };
    console.log(`Received cards for list id ${listId}`);
    callback(cards[listId]);
  }, 1000);
}

// Task 1 board -> lists -> cards for list qwsa221
// Task 2 board -> lists -> cards for list qwsa221 and cards for list jwkh245 simultaneously
// Task 3 board -> lists -> cards for all lists simultaneously


//------------------------task1--------
function callback3(obj) {
  console.log(obj);
}

function callback2(obj) {
  console.log(obj[0].id);
  getCards(obj[0].id, callback3)

}
function callback1(obj) {
  console.log(obj.id);
  getLists(obj.id, callback2)

}
//getBoard(callback1);

//--------------task 2----------------------------

function callback2Task2(obj) {
  getCards(obj[0].id, callback3)
  getCards(obj[1].id, callback3)
}

function callback1Task2(obj) {
  getLists(obj.id, callback2Task2)
}
//getBoard(callback1Task2)



//---------------task3-------------

function callback2Task3(obj) {
  for (card of obj) {
    console.log(card.id);
    getCards(card.id, callback3)
  }
}
function callback1Task3(obj) {
  getLists(obj.id, callback2Task3)
}

//getBoard(callback1Task3)
