const app = {
   name: "Espião Tático",
   descrição: "Aplicativo para análise de escalação",
   receita: 800.00,
   users: 1200
};  

// Modificando o valor do objeto.
app.receita = 900.00

// Clonar objeto:
const newObject = {
    ...app,
    receita: 2300
};

console.log(newObject);