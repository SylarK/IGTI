const conexao = require('./config/customDB');
const customExpress = require('./config/customExpress');
const Tabelas = require('./infra/tabelas');

const connect = conexao.connect((err) => {
  if (err) {
    console.log('Erro ao se conectar : ', err);
  } else {
    console.log('Conectado com sucesso.');

    Tabelas.init(conexao);

    const app = customExpress();

    app.listen(3001, () => console.log('Servidor rodando na porta 3001'));
  }
});

/*
ALTER USER 'root'@'localhost' IDENTIFIED BY 'password'; 
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
*/
