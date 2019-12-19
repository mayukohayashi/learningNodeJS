const fs = require('fs')

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url ===　'/') {
    res.write('<html>')
    res.write('<head><title>LEARNING NODE.JS</title></head>')
    res.write(
      '<body><form action="/create-user" method="POST"><input type="text" name="user name"><button type="submit"></button></form></body>'
    )
    res.write('</html>')
    return res.end()
  }

  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const user = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, err => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }

  if (url === '/users') {
    res.write('<ul><li>User1</li></ul>')
  }
}