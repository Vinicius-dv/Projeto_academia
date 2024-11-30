const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express()
const port = process.env.PORT || 3000;

const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
  };
  
  app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'paulomaluko99@gmail.com', 
      pass: 'vgfe cjfs vjjl jhws'
    }
});


app.post('/contato',(req,res)=>{
    const {nome,email,message} = req.body

    const mailOptions ={
        from: 'paulomaluko99@gmail.com',
        to:'viniciushenrrique1830@gmail.com',
        subject:'Novo contato - Formulario',
        text:`Nome: ${nome}\nEmail:${email}\nMensagem:${message}`
    }

    transporter.sendMail(mailOptions,(error,info)=>{
        if (error) {
            console.log(error);
            return res.status(500).json({ success: false, message: 'Erro ao enviar o e-mail.' });
        }
        res.status(200).json({ success: true, message: 'Mensagem enviada com sucesso!' });
    })
})


app.get('/', (req, res) => {
    res.send('Servidor de contato funcionando');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});