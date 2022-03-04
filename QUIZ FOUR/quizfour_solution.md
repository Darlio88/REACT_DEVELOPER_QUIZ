SOLUTION TO QUIZ FOUR
FIRST PROBLEM
1. the first problem withthe code is that there is a reference Error and this occurs if fetch is being used in an environment where it is not supported such as NODEJS.
2. this is solved by importing the "node-fetch" package which provides "fetch()" compatible with Nodejs runtime
3. I solved this by first initializing a package.json file using "npm init -y"
4. I added type:module in the json file in order to enable this run wiothout errors
4. then installed "node-fetch" using "npm install node-fetch"
5. finally imported it using "import fetch from "node-fetch" in the index.js
SECOND PROBVLEM
1. the url path in the fetch function is invalid, this can be resolved by placing the correct url in the index.js 
2. simce the url is invalid, server_echo is also going to remain invalid hence the forEach function cannot be performed on an undefined value type thus returning a TypeError