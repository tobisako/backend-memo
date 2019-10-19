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
```
  body  
    {  
      "name": "software engineering"
    }
```
  => get: localhost:3000/api/courses/2

post
http://localhost:3000/api/courses  
```
  body
    {
      "name": "information systems"
    }
```
  => increase item  

localhost:3000/api/posts/2019/09  


## json-server1
https://qiita.com/tobisako/items/c1c3cac119716d1a643f  
npm install -s json-server  
node index.js  

http://localhost:5000/
http://localhost:5000/cbquest0
http://localhost:5000/cbquest1
　：


## RESTAPI1
npm install -s express
node app.js
http://localhost:3000/api/v1/users


