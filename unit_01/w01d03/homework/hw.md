[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Data Modeling with JavaScript

Every computer program deals with managing data. How you choose to represent
these data within your program can have far-reaching implications on every other
part of your application; consequently, reversing those decision becomes more
and more costly over time, as the program becomes more complex. For this reason,
thinking carefully in advance about how you want to model your data within your
application can pay very big dividends.

## Choosing Entities/Abstractions

One of the first challenges in modeling data is deciding what data to model.
Let's consider a specific example: a laptop. Suppose that you need to represent
a laptop in an application. What attributes are most important to include in our
data model?

As it turns out, the answer to that question depends heavily on what the
application will do and how it will be used. If the application is for selling
laptops, we might be pick the following attributes.

  > A Laptop has...
  > - a sale price
  > - a brand name
  > - an amount of RAM, in GB
  > - a disc size, in GB
  > - a processor speed, in GHz
  > - a monitor size, in inches
  >
  > e.g.

  ```js
  laptop = {
    salePrice: 1000,
    brand: 'Lenovo',
    RAM: 8,
    disc: 60,
    processor: 2.5,
    monitorSize: 12
  }
  ```

However, if the application will be used for _manufacturing laptops_,
things like sale price suddenly become much less relevant; instead, a laptop in
that kind of app might have information about materials costs, % completion,
or the factory and assembly line on which the laptop was built.

Take a look at each of the app descriptions below. For each description,
create a rough data model for the app by listing at least two relevant
entities/abstractions (e.g. Laptop, above) that the app might use, and giving
them each several properties that make sense for that use case.
Please also give a short explanation (1 - 2 sentences) of why these choices make
sense for the use case of the app.

### 1. To-Do List

This app will be an app for tracking and managing tasks. Not only will it keep
track of whether tasks have been completed, it will also keep track of
how long each task took to complete. Tasks can be grouped into 'projects' to
keep them organized.

> Answer here
Directory:
>Projects
  >Tasks
    >task.startTime
    >task.endTime
    >task.elapsedTime = task.endTime - task.startTime
    >task.completion (boolean value)

Ideally, you could "start" each task, after which the current time would be recorded as a DateTime object under task.startTime.
Once completed, you would "end" the task, after which the current time would also be recorded and stored as a task.endTime variable.
The task.completion value would then be true, and some logic involved would render that task as inactive (grey, crossed out, etc).
### 2. Photo Sharing App

In this app, users can upload photos to their accounts and share them with others. These photos can be grouped into albums.

> Answer here
Directory:
>User
  >Photo Albums
    >Album1
      >photo1
        >photo1.time
        >photo1.location
        >photo1.faces
      >photo2
        >photo2.time
        >photo2.location
        >photo2.faces
      >photo3
        >photo3.time
        >photo3.location
        >photo3.faces
      etc


Database would be organized according to user, each album would be displayed alphabetically or however the user likes.
Under each album would be a collection of photos. Each photo beyond being a img file would also have certain attributes attached.
Attributes including the date/time in which the photo was taken (photo*.time), the location in which the photo was taken
(photo*.location), and faces recognized by inherent software (photo*.faces), as well as others.

### 3. Home Automation Manager

This app will be a tool for managing a home automation system; it will keep
track of the time and temperature of the house that it monitors, and use that
information to turn on and off different lights and adjust the thermostat up
and down.

> Answer here
Directory:
>Home
  >Attributes
    >Home.temp
    >Home.time
  >Peripherals
    >A/C Unit
      >Preset Schedule
    >Lights
      >Preset Schedule

The smart Home would record the temperature and time, refreshing every 10 minutes.
Based around the users preset schedule, the A/C unit and lights would function. E.g. "Lights" would be turned off after 9 am
and before 5 pm on weekdays. The A/C unit would be off after 9 am and at 4:30 pm on weekdays (in the interest of frugality).

### 4. Sneaker Store

This app will allow customers to browse a list of products (sneakers, in this
case), add those products to a cart, and save that cart as a past order once the
purchase is complete.

> Answer here
Directory:
>Store
  >Product List
    >Retail
      >Sneakers
        >add item to cart function
    >Sale
      >Sneakers
        >add item to cart function
  >User account
    >Viewing History
      >User.viewed
    >Purchase History
      >User.orders
    >Shopping Cart
      >Cart.items (items added to cart)
      >Checkout
        >add order to user.orders function

Here the Store itself contains a product list as well as a user account function.
The product list contains all items available, the user account contains all user history.
Users will be able to add items from the products available and purchase them.

## Representing Abstractions in Code

Once you've chosen the abstractions that your app will use, the next step is to
figure out how to actually represent those abstractions in code. The same
abstraction can often be represented in multiple different ways, and there may
be trade-offs in speed and simplicity that come from using one representation
vs another.

### 5. Subway System

Suppose that you're building an app that tells travelers how many stops they
need to travel to get from one station to another. Two abstractions that you
decide to use to model your application's data are Stations and Rail Lines, with
the following properties:

A Station has:
-   a name
-   a description

A Rail Line has:
-   a name
-   a set of stations that it hits

The team has decided to represent these abstractions in the following way.

```js
// Station
var exampleStation = {
  name: 'Downtown Crossing',
  description: "Downtown Crossing is a shopping district that is a small part of downtown Boston, Massachusetts, located due east of Boston Common and west of the Financial District..."
};

// Rail Line
var exampleLine = {
  name: 'Green Line',
  northStation: {
    name: 'North Station',
    description: "North Station is a major transportation hub located at Causeway and Nashua Streets in Boston, Massachusetts, United States...."
  },
  haymarket: {
    name: 'Haymarket',
    description: "Haymarket is an MBTA subway station serving the Green and Orange lines, located at the corner of Congress and New Sudbury streets in downtown Boston, Massachusetts...."
  },
  governmentCenter: {
    name: 'Government Center',
    description: "Government Center is an area in downtown Boston, centered on City Hall Plaza. Formerly the site of Scollay Square, it is now the location of Boston City Hall..."
  }
};

// Stop and line descriptions from Wikipedia (https://en.wikipedia.org)
```

What are some advantages and disadvantages of choosing these representations? Please give at least one example of each.
> Answer here
Advantage: Users can access the "green Line", and information included will be the three stops.
Disadvantage: stops are not indexed, nor is there a reference to order.


### 6. Doctor Appointment App

Consider an app for helping patients and doctors schedule appointments.

A Patient has:
-   a given name
-   a surname
-   a date of birth

A Doctor has:
-   a given name
-   a surname
-   a specialty
-   an address

An Appointment has:
-   a date
-   a time

The team has not yet decided how to represent the relationship between doctors,
patients, and appointments, so they've put together two different
alternatives.

#### Option 1

```js
var examplePatient = {
  givenName: 'John',
  surname: 'Doe',
  dateOfBirth: '1992-11-03'
};
var exampleAppointment = {
  date: '2016-12-15',
  time: '13:00',
  patient: {
    givenName: 'Jane',
    surname: 'Doe',
    dateOfBirth: '1980-06-13'
  }
};
var exampleDoctor = {
  givenName: 'Alphonse',
  surname: 'Cula',
  specialty: 'phlebotomy',
  appointments: [
    {
      date: '2015-10-31',
      time: '00:00',
      patient: {
        givenName: 'Lucy',
        surname: 'Westenra',
        dateOfBirth: '1976-06-06'
      }
    },
    {
      date: '2016-10-31',
      time: '00:00',
      patient: {
        givenName: 'Mina',
        surname: 'Murray',
        dateOfBirth: '1989-09-09'
      }
    }
  ]
};
```

#### Option 2

```js
var exampleDoctor = {
  givenName: 'John',
  surname: 'Dorian',
  specialty: 'internal medicine'
};
var examplePatient = {
  givenName: 'Jordan',
  surname: 'Sullivan',
  dateOfBirth: '1978-12-01'
};
var exampleAppointment = {
  date: '2009-04-15',
  time: '19:00',
  doctor: {
    givenName: 'Jan',
    surname: 'Itor',
    specialty: 'psychology'
  },
  patient: {
    givenName: 'Ladinia',
    surname: 'Williams',
    dateOfBirth: '1980-01-01',
  }
}
```

What are some relative advantages and disadvantages of each representation?
Under what circumstances might one representation be a better choice than the
other? Are there any circumstances in which the other representation might be
the better choice?

> Answer here
Option 1:
  Advantages: Each doctor object has his/her appointments nested within the object.
  The doctor can view his/her appointments and patient details easily.
  Disadvantage: User can't view the appointment and find the presiding physician.

Option 2:
  Advantage: Each appointment object has nested within it both the doctors and the patients involved.
  Disadvantage: Doctor/Patient objects are sparse and only include specific details.

For a patient and/or administrator, the second option would be more convenient as a patient could access an appointment and view all
necessary information.
For a doctor, the first option would be more convenient as he/she is allowed to quickly view
all appointment information from a single Doctor object.



## Tying It Together

### 7. Tic-Tac-Toe

You've been tasked with building an in-browser tic-tac-toe game.

a.  What are some possible entities that your application might use to model its
    data? Please pick at least two, with at least two properties apiece.

  > Answer here
  >board (a 3x3 grid)
  >player (x or o)
b.  How might those entities be represented in JavaScript code?

  > Answer here
  //initialize players
  var player1 = "x";
  var player2 = "o";
  //initialize gameBoard object
  var gameBoard = [
  [["-"], ["-"], ["-"]],
  [["-"], ["-"], ["-"]],
  [["-"], ["-"], ["-"]]
  ];
  //get row values
  function RowValues() {
    var rows = [gameBoard[0], gameBoard[1], gameBoard[2]];
  }
  //get column values
  function ColValues() {
    var columns = [[], [], []];
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        columns.push(gameBoard[i][j]);
      }
    }
  }

  //upon event handler selection, update gameBoard object to "x" or "o"
  //if player x chooses upper left most corner
    gameBoard[0][0] = "x"; //update value
  //check if user one by either having a row filled out or a column filled out
  //check if a row is filled out by player1 or player 2 (either is passed as param)
  function checkRows(player) {
    RowValues();
    for (row of rows) {
      if (row.every(pos => pos === player)) {
        console.log(player + "won!");
        break;
      }
    }
  }

  //check if a column is filled out by player1 or player2 (either is passed as param)
  function checkColumns(player) {
    ColValues();
    for (col of columns) {
      if (col.every(pos => pos === player)) {
        console.log(player + "won!");
        break;
      }
    }
  }

  //check diagonals
  function checkDiagonals(player) {
    //first diagonal ([0,0], [1,1], [2,2] in the gameBoard)
    var firstDiagonal = [];
    for (var i = 0; i < 3; i++) {
      firstDiagonal.push(gameBoard[i][i]);
    }
    if (firstDiagonal.every(pos => pos === player)) {
      console.log(player + "won!");
    }
    //second diagonal ([0,2], [1,1], [2,0] in the gameBoard)
    var secondDiagonal = [];
    for (var i = 0; i < 3; i++) {
      secondDiagonal.push([i][2-i]);
    }
    if (secondDiagonal.every(pos => pos === player)) {
      console.log(player + "won!");
    }
  }

c.  Justify your choices in a) and b). Why these entities? Why these
    representations?

  > Answer here
  Players initialized to either "x" or "o" make updating the gameBoard object easy.
  The gameBoard object is easily accessed and updated.
  It would make more sense to make it dynamic and scalable, and to establish a general
  "isWinnningCombination" function but that would take forever.
