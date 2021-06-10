const request = require('supertest');
const app = require('../app');

let token;
let lastProductID;

beforeAll((done) => {
  request(app)
    .post('/login')
    .send({
      email: "teste@gmail.com",
      senha: "1234",
    })
    .end((err, response) => {
      token = response.body.token;
      done();
    });
 });

//Testes::Não deve ser possível...
test('Não deve ser possível acessar um produto de id inválido', async () => {
  const response = await request(app)
    .get('/produto/9999');
  expect(response.statusCode).toBe(404);
});

test('Não deve ser possível remover um produto de id inválido', async () => {
  const response = await request(app)
    .delete('/rmvProdutos/9999');
  expect(response.statusCode).toBe(404);
});

test('Não deve ser possível alterar um produto de id inválido', async () => {
  const response = await request(app)
    .delete('/updateProdutos/9999');
  expect(response.statusCode).toBe(404);
});

test('Não deve ser possível criar um produto de tipo inválido', async () => {
  const response = await request(app)
    .post('/addProdutos')
    .set('Authorization', 'Bearer ' + token)
    .send({
      nome: "Caixa Dia das Mães",
      valor: 25.00,
      foto: "SEM LINK",
      tipo_produto_id: 8,
      usuario_id: 1
    });
  expect(response.statusCode).toBe(400)
});

//Testes::Deve ser possível...
test('Deve ser possível acessar um produto de id válido', async () => {
  const response = await request(app)
    .get('/produto/1');
  expect(response.statusCode).toBe(200);
});

test('Deve ser possível listar todos os produtos', async () => {
  const response = await request(app)
    .get('/produtos');
  expect(response.statusCode).toBe(200);
});

test('Deve ser possível criar um produto', async () => {
  const response = await request(app)
    .post('/addProdutos')
    .set('Authorization', 'Bearer ' + token)
    .send({
      nome: "Produto teste",
      valor: 25.00,
      foto: "SEM LINK",
      tipo_produto_id: 7,
      usuario_id: 1
    });
  expect(response.statusCode).toBe(201);
  
  await request(app)
    .delete(`/rmvProdutos/${response.json}}`);
});

test('Deve ser possível atualizar um produto', async () => {
  lastProductID = await request(app)
  .get('/produtos');
  
  const response = await request(app)
    .put(`/updateProdutos/${lastProductID.body[lastProductID.body.length -1].id}`)
    .send({
      nome: "Teste Alteracao 2",
      valor: 10.00,
      foto: "Ainda sem foto"
    });
  expect(response.statusCode).toBe(200);
});

test('Deve ser possível remover um produto', async () => {
  lastProductID = await request(app)
    .get('/produtos');

  const response = await request(app)
    .delete(`/rmvProdutos/${lastProductID.body[lastProductID.body.length -1].id}`);
  expect(response.statusCode).toBe(200);
});