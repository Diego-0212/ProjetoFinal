const express = require('express');

const router = express.Router();

router.get("/", (req, res) => {
    let obj ={
        nome:req.query.nome
    };
    
    res.render('home', obj)
});'Design Digital-APROVADO',

router.get("/rota2", (req, res) => {
    let obj ={
        mostrar: true,
        grade: ['Segunda-7:40-ás-11:20-Gestão Ágil de Projetos de Software', 'Terça-7:40-ás-11:20 Banco de Dados - Não relacional','Quarta-7:40-ás-11:20-Desenvolvimento Web III',
        'Quarta-11:20-ás-13:00-Interação Humano Computador','Quinta-7:40-ás-11:20-Álgebra Linear', 'Sexta-7:40-ás-11:20-Técnica de Programação II', ]
    };
    
    res.render('home02', obj)
});


router.get("/rota3", (req, res) => {
    let obj ={
        mostrar: true,
        historico: ['Algoritmo e Lógica de Programação-APROVADO', 'Modelagem de Banco de Dados-APROVADO','Sistemas Operacionais e Redes de Computadores-APROVADO', 
        'Engenharia de Software I -APROVADO', 'Desenvolvimento Web I-APROVADO','Design Digital-APROVADO','Engenharia de Software II -APROVADO','Banco de Dados Relacional -APROVADO', 
        'Técnica de Programação I-APROVADO','Matemática para Computação-APROVADO','Estrutura de Dados -REPROVADO ','Desenvolvimento Web II- PENDENTE' ]
    };
    
    res.render('home03', obj)
});


module.exports = router;