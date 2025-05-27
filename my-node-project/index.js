    // index.js
     const http = require('http');

         const server = http.createServer((req, res) => {
               res.writeHead(200, { 'Content-Type': 'text/plain' });
                     res.end('Hello, Node.js!');
                         });

                             const port = 3333;
                                 server.listen(port, () => {
                                       console.log(`Server running on port ${port}`);
                                           });
