import express from 'express';

const porta = 3000;
const host = '0.0.0.0'; // todas as interfaces (placas de rede) do computador hospedeiro

const app = express();
var ListaPacientes = [];


// declarar a nossa aplicação express onde está a fonte dos nossos arquivos estáticos
app.use(express.static('./público'));

app.use('/cadastrarPaciente',(req,resp) => {
    // Extraindo os dados do paciente pelo formulário HTML
    const nome = req.query.Nome;
    const sobrenome = req.query.Sobrenome;
    const email = req.query.Email;
    const tel = req.query.Telefone;
    const endereço = req.query.Endereço;
    const cidade = req.query.Cidade;
    const estado = req.query.Estado;
    const cpf = req.query.CPF;

    // Adicionando um novo paciente na lista.
    ListaPacientes.push( {
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        tel: tel,
        endereço: endereço,
        cidade: cidade,
        estado: estado,
        cpf: cpf
    });

    resp.write('<!doctype html>');
    resp.write('<html>');
    resp.write('<head>');
    resp.write('<title>Resultado Cadastro</title>');
    resp.write('<meta charset="utf-8">');
    resp.write('</head>');
    resp.write('<body>');
    resp.write(`<h1>${nome} ${sobrenome} cadastrado com sucesso!</h1>`);
    resp.write('<a href="/">Continuar cadastrando</a>');
    resp.write('<br>');
    resp.write('<a href="index.html">Voltar</a>');
    resp.write('</body>');
    resp.write('</html>');
    resp.end();
});

app.use('/listarPacientes', (req, resp) => {
    resp.write('<!doctype html>');
    resp.write('<html>');
    resp.write('<head>');
    resp.write('<title>Resultado Cadastro</title>');
    resp.write('<meta charset="utf-8">');
    resp.write('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">');
    resp.write('</head>');
    resp.write('<body>');
    resp.write('<h1>Lista de Pacientes</h1>');
    resp.write('<table class="table table-striped">');
    resp.write('<tr>');
    resp.write('<th>Nome</th>');
    resp.write('<th>Sobrenome</th>');
    resp.write('<th>E-mail</th>');
    resp.write('<th>Telefone</th>');
    resp.write('<th>Endereço</th>');
    resp.write('<th>Cidade</th>');
    resp.write('<th>Estado</th>');
    resp.write('<th>CPF</th>');
    resp.write('</tr>');
    for (let i = 0; i < ListaPacientes.length; i++) {
        resp.write('<tr>');
        resp.write(`<td>${ListaPacientes[i].nome}</td>`);
        resp.write(`<td>${ListaPacientes[i].sobrenome}</td>`);
        resp.write(`<td>${ListaPacientes[i].email}</td>`);
        resp.write(`<td>${ListaPacientes[i].tel}</td>`);
        resp.write(`<td>${ListaPacientes[i].endereço}</td>`);
        resp.write(`<td>${ListaPacientes[i].cidade}</td>`);
        resp.write(`<td>${ListaPacientes[i].estado}</td>`);
        resp.write(`<td>${ListaPacientes[i].cpf}</td>`);
        resp.write('</tr>');
    }
    resp.write('</table>');
    resp.write('<a href="index.html">Voltar</a>');
    resp.write('</body>');
    resp.write('<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>');
    resp.write('<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>');
    resp.write('<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>');
    resp.write('</html>');
    resp.end();
});

app.listen(porta, host, () => {
    console.log(`Servidor executando na porta http://${host}:${porta}`);
});
