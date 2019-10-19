# backend-memo

## nodemon1
https://qiita.com/markusveeyola/items/878cfa5c3c7982ceb54d
npm install -g nodemon
nodemon app.js

use Postman

get
http://localhost:3000/
http://localhost:3000/api/courses
http://localhost:3000/api/courses/1

put
localhost:3000/api/courses/2
  body
    {
      "name": "software engineering"
    }
  => get: localhost:3000/api/courses/2

post
http://localhost:3000/api/courses
  body
    {
      "name": "information systems"
    }
  => increase item

localhost:3000/api/posts/2019/09

