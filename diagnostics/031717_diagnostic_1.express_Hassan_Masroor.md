# Diagnostic Unit 2.1

### Question 1: What is the Request/Response Cycle?  How does it work?
  The request/response cycle is the basis of the client/server model. A client sends
  a request to the server who answers in turn with a response. HTTP mandates a consistent
  'protocol' that is adhered to within the client server model. The head of the request
  contains HTTP + the version (1.1), followed by the context/text and so on.
  The server receives the request and responds accordingly. HTTP response head includes
  HTTP1.1 (status code) and a plain english version of the status code.
  The body of the response is what is eventually rendered to the page.

### Question 2: What are the differences between a GET request and a POST request?
  Get requests are used to access data from a server, usually just to load a page.
  A POST request is used to push data from the client in the body of the request to the server.
  In the CRUD model, get corresponds to read while post corresponds to create.

### Question 3: What does `npm init` do?
  'npm init' initializes a project and creates a package.json file including the standard information
  required. Significantly this file allows for a programmer to list dependencies such that whenever moved
  to a different machine or outsourced elsewhere, the same or different programmer only has to run 'npm install'
  to install all of the modules listed as dependencies in the package.json file. This allows for smooth and light
  transitions between projects without having to install all the large packages/modules which are the
  dependencies in the node_modules folder.

### Question 4: What does CRUD stand for?  What are the HTTP verbs that are associated with each function?
  |C| create| POST |
  |R| read  | GET  |
  |U| update| PUT  |
  |D| delete|DELETE|

  I tried to make a table with md format, I don't know if it will render correctly or not.

### Question 5: If we have a form where we want to create new data, what type of `method` do we use in our form?  
  The POST method.

### Question 6: If the following form was submitted, what would `action="myScript.js"` do?

```
<form method="POST" action="myScript.js?_method=PUT">
  <input type="text" value="name"/>
  <button type="submit">Submit</button>
</form>
```
  Assuming the method-override express module has been installed and required, the form would
  override the POST method and use a PUT method according to whatever the .put callback function in the myScript.js file
  says.

### Question 7: Write an express route that handles a POST request to the url `/menus` and redirects to the `/homepage`
  ```javascript
    var express = require('express');
    var app = express();

    app.post('/menus', function(req, res) {
      //no info is given about the actual content of the post form, so can't really conclude anything about the req.body
      app.redirect('/homepage');
    });


    app.listen(3000);

  ```

### Question 8: In the following express route, write how you would grab the values of `:id` and `:song_id` in javascript.

```javascript
  app.get("/artist/:id/song/:song_id", function(req, res){
    //hmm...
    var index     = req.params.id;
    var songIndex = req.params.song_id;
  });
```

### Question 9: What is MVC? How have we been using it so far?
  MVC is the 'model-view-controller' paradigm. We've been using it to compartmentalize our code such that
  we can have a clear division between our data (models), graphical output as html (views), and our handling of
  both on the server side (controller). This compartmentalization ensures that the code we produce is scalable and any
  changes in one aspect will not be ruined by others. This also particularly allows us to alter data and have the changes
  reflected in our views.

## Bonus Question

### Question 10: Write an express route that handles a GET request to the url `/products` and sends back the JSON object {error: "Bad Request"}

  ```javascript
    app.get('/products', function(req, res) {
      res.status(404).send({error: "Bad Request"});
    });
  ```
