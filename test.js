const {deepStrictEqual} = require('assert');
const database = require('./database');

const DEFAULT_ITEM_CADASTRAR = {id:1, nome:"IRuller",classe:"Guerreiro",passiva:"Força Extrema"}
const DEFAULT_ITEM_ATUALIZAR = {id:1, nome:"Gandolf",classe:"Mago",passiva:"Gandolf, o cinzento"}


describe('Casos de testes (CRUD) de personagens', () => {

  // before(async () => {

  //   await database.cadastrar(DEFAULT_ITEM_CADASTRAR);

  // })

  it('Deve listar varios personagem', async () =>{

   const esperado = DEFAULT_ITEM_CADASTRAR;
   const [resultado] = await database.listar(esperado.id);

   deepStrictEqual(resultado, esperado);

  })

  it('Deve cadastrar um personagem', async () =>{

    
    const esperado = DEFAULT_ITEM_CADASTRAR;
    await database.cadastrar(DEFAULT_ITEM_CADASTRAR);
    const [atual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id);
        
    deepStrictEqual(atual, esperado);

  })

  it('Deve remover um personagem pelo id', async () => {

    const esperado = true;
    const resultado = await database.remover(DEFAULT_ITEM_CADASTRAR.id);

    deepStrictEqual(resultado, esperado);

  })

  it('Deve atualizar um personagem pelo id', async () => {

    const esperado = {
      ...DEFAULT_ITEM_ATUALIZAR,
      nome:'Gandolf',
      classe:'Mago',
      passiva:'Gandolf, o branco'
    }

    const novoPersonagem = {
      nome:'Gandolf',
      classe:'Mago',
      passiva:'Gandolf, o branco'
    }

    await database.atualizar(DEFAULT_ITEM_ATUALIZAR.id, novoPersonagem);

    const [resultado] = await database.listar(DEFAULT_ITEM_ATUALIZAR.id);

    deepStrictEqual(resultado, esperado);

  })

})