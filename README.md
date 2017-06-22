# Project Style 1
## Pure Javascript (some ES5, some ES6), built-in data structures, functional-style, libraries, MySQL Server
After examining the options provided by built-in JavaScript, I've concluded that some libraries are necessary to write robust code. While I wanted to be minimalist with the libraries and modules I use, my research suggests that it's hard to be concise and expressive without using some libraries.

So in using these libraries, I'm loosely using the following criteria:
* They should simplify complex tasks that require micro-managing repetitive code and annoying syntax--especially tasks that aren't built into the standard (global?) namespace of Node or browser Javascript.
* They **shouldn't** simplify DOM manipulation -- part of the reason I'm working on this at all is that I did such a bad job of managing DOM object complexity in the original files. I want to see if I can do a better job. For that reason, I'm avoiding modules like jQuery, React, and Angular. All those options would be good to learn, and I might use them in a future iteration, but not this one.

I'm also willing to use any libraries that are standard for improving performance of the application.

## Modules Used
* browserify - to bundle up modules for use in the web application files. Improves performance.
* **Some library for enums** (do only string enums exist?)
* **Some library for pattern matching** (does only string pattern matching exist? Because if so, Javascript supports regular expressions).
* Chai for assertions to use in test-driven development.
* Mocha to automate the assertion tests that I'll be using.
* Express, Body-Parser, Express-Handle bars, **ETC** ... to simplify server and database interactions.
 
