const prompt = require('prompt-sync')();
const naipe = require("./naipe.js")
const db = [];
let nextID = 1;

const model = (carta, id = nextID++) => {
    if(
        carta.nome != undefined,
        carta.nome != "",
        naipe.show(carta.idNaipe)        
    ){
       return {
        id,
        nome: carta.nome,
        Naipe: carta.idNaipe
       }
    }
}

const store = body => {
    const novo = model(body);
    if(novo){
        db.push(novo);
        return 200
    }
    return 400
}

const index = () => db;

const show = id => db.find(el => el.id == id);

const update = (id, body) => {
    const index = db.findIndex(el => el.id == id);
    const novo = model(body, parseInt(id));
    if(novo && index != -1){
        db[index] = novo;
        return 200;
    }

    return 400;
}

const destroy = id => {
    const index = findIndex(el => el.id == id)
    if(index != -1){
        db.splice(index,1);
    }
}


module.exports = {
    model,
    store,
    show,
    index,
    destroy
}