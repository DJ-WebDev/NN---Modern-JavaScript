                  Document Object Model

JavaScript and the DOM 

JavaScript was designed to make a browser more interactive:

- Add content, change and delete in the browser
- Change CSS styles
-react to user events
-create Popups

The Document Object Model is at the heart of any kind of webpage manipulation

What is it?
The document object is something that is created by the browser when an HTML document loads inside of it.
the document object contains many different properties and methods that we can use
We can Interact with the HTML document from our JavaScript code
So whenever we want to add or remove content or change things
We can do that via the Document Object

We can see the Document Object in action via the console in Chrome:

Type document in the console and press enter.
You will see the document object created

We can access the different properties and methds insisde the document 

Some Example methods:

document   (view Document Object)
document.  (lists all propertys and methods of the document)
document.location  (returns information about href location)
document.getElementById (loads of different get methods)

We can use these properties and methods to interact with the HTML
the DOM also describes how a page visually looks
Think of the document as a heirarchal tree of nodes

//-------------------------------------------------------------

Think of the document as a heirarchal tree of nodes
Each element is a node in the DOM
The very top is the ROOT NODE

                         Document Object Model
                                 
                                  HTML (root node)
                               Head    Body
                 (element node)title     h1 div div
                            (text^node)      p   p
                                                 (^textnode ^)

We use the Dom to reach into these elements and traverse and select different elements