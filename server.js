const http = require('http')
const app = require('express')()
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.set('clientPath',  __dirname +  'client');

const emails=[]

function startServer(porta) {
    const httpServer = http.createServer(app).listen(porta, function() {
        console.log('Servidor escutando na porta: ' + this.address().port)
    })
    return httpServer
}

module.exports.startServer = startServer

app.get('/', async function(req, res) {
    res.sendFile(__dirname + '/client/promocao.html')
});

app.post('/api/emails', async function(req, res) {
    console.log('post email',req.body);
    const email = req.body.email
    
    if (!isEmailValido(email)) return res.send({mensagem: "email inválido, favor tentar novamente"})
    if (isEmailJaExiste(email)) return res.send({mensagem: "email já cadastrado"})
    
    emails.push(req.body.email)
    res.send({mensagem: "email cadastrado com sucesso"})
});

function isEmailJaExiste(email) {
    return !!emails.find(emailCadastrado=>emailCadastrado == email)
}

function isEmailValido(email) {
    return email.search('@') == -1 ? false : true
}
