const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");


/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

const http = require('http');
const { parse } = require("path");

const server = http.createServer((req, res) => {
    let reqBody = '';
    req.on('data', (data) => {
        reqBody += data
    })

    req.on('end', () => {
        if (reqBody) {
            req.body = parseBody(reqBody)
        }
        sendFormPage(req, res)
    })
})

const PORT = 5000;

server.listen(PORT, () => console.log(`Successfully started the server on port ${PORT}`))

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };
