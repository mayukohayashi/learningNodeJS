const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url ===　'/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>LEARNING NODE.JS</title></head>');
    res.write('<div>hello welcome</div>')
    res.write(
      '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit"></button></form></body>'
    );
    res.write('</html>');

    return res.end()
  }


  if (url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>LEARNING NODE.JS</title></head>');
    res.write('<ul><li>User 1</li></ul>')
    res.write('</html>');
    return res.end();
  }

  if (url === '/create-user') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parseBody = Buffer.concat(body).toString();
      console.log(parseBody.split('=')[1]);
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
  }
})

server.listen(3000);
