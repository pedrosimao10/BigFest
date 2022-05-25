$(document).ready(function ($) {
    function AppViewModel() {
        var self = this;

        //não consegui que funcionasse com um ficheiro json
        //comentários e classificação não sei se serão uteis aqui
        //categoria para pesquisa?
    
        self.artistas = ko.observableArray([
            empresas =[
                {nome:"FestaOutdoors",email:"empresa@mas.pt",sede:"Rua com nome, N.º 24, Cidade",tel:"912345678", especialidade:"concertos",
                    equip: [
                        {tipo:"coluna", preco: 20, categoria: "audio&Com", quantidade: 0, disponibilidade:true, img:"images/microfone-shure-sm-48-lc.jpg", descricao:"Ut urna turpis, tempor sit amet massa vitae, pulvinar porttitor magna."},
                        {tipo:"micro", preco: 10, categoria: "audio&Com", quantidade: 10, disponibilidade:true, img:"images/microfone-shure-sm-48-lc.jpg", descricao:"Ut urna turpis, tempor sit amet massa vitae, pulvinar porttitor magna."},
                        {tipo:"projetor", preco: 30, categoria: "luz", quantidade: 4, disponibilidade:false, img:"images/microfone-shure-sm-48-lc.jpg", descricao:"Ut urna turpis, tempor sit amet massa vitae, pulvinar porttitor magna."}
                    ],
                    pack:[
                        {equip:"coluna,micro,projetor", nome:"pack", preco:100, disponibilidade: true, img:"images/microfone-shure-sm-48-lc.jpg", descricao:"Ut urna turpis, tempor sit amet massa vitae, pulvinar porttitor magna."}
                    ],
                    servico:[
                        {nome: "servico", preco: 200, dimensao: 200, disponibilidade: true, img:"images/microfone-shure-sm-48-lc.jpg", descricao:"Ut urna turpis, tempor sit amet massa vitae, pulvinar porttitor magna."}
                    ],
                    sobre:"Ut urna turpis, tempor sit amet massa vitae, pulvinar porttitor magna. Pellentesque dolor lorem, blandit ac congue non, mattis a mi. Vestibulum id accumsan neque. Aenean turpis dui, consectetur in ornare quis, sollicitudin vel mauris. Aliquam eros elit, blandit et tortor non, ornare tincidunt ante. </br> Sed quis quam ullamcorper, tincidunt eros vel, malesuada purus. Mauris risus erat, faucibus in aliquam ut, posuere posuere metus. Phasellus eget sem tempus, egestas nisl dapibus, aliquet elit."
                },
                {nome:"BigSound",email:"bigsound@teste.pt",sede:"Rua com nome, N.º 24, Cidade",tel:"912345678", especialidade:"animação de rua",
                    equip: [
                        {tipo:"coluna", preco: 20, categoria: "audio&Com", quantidade: 2, disponibilidade:true, img:"images/microfone-shure-sm-48-lc.jpg", descricao:"Ut urna turpis, tempor sit amet massa vitae, pulvinar porttitor magna."},
                        {tipo:"micro", preco: 20, categoria: "audio&Com", quantidade: 0, disponibilidade:false, img:"images/microfone-shure-sm-48-lc.jpg", descricao:"Ut urna turpis, tempor sit amet massa vitae, pulvinar porttitor magna."},
                        {tipo:"projetor", preco: 20, categoria: "luz", quantidade: 7, disponibilidade:true, img:"images/microfone-shure-sm-48-lc.jpg", descricao:"Ut urna turpis, tempor sit amet massa vitae, pulvinar porttitor magna."}
                    ],
                    pack:[
                        {equip:"coluna,micro,projetor", nome:"pack", preco:100, disponibilidade: false, img:"images/microfone-shure-sm-48-lc.jpg", descricao:"Ut urna turpis, tempor sit amet massa vitae, pulvinar porttitor magna."}
                    ],
                    servico:[
                        {nome: "servico", preco: 200, dimensao: 200, disponibilidade: true, img:"images/microfone-shure-sm-48-lc.jpg", descricao:"Ut urna turpis, tempor sit amet massa vitae, pulvinar porttitor magna."}
                    ],
                    sobre:"Ut urna turpis, tempor sit amet massa vitae, pulvinar porttitor magna. Pellentesque dolor lorem, blandit ac congue non, mattis a mi. Vestibulum id accumsan neque. Aenean turpis dui, consectetur in ornare quis, sollicitudin vel mauris. Aliquam eros elit, blandit et tortor non, ornare tincidunt ante. </br> Sed quis quam ullamcorper, tincidunt eros vel, malesuada purus. Mauris risus erat, faucibus in aliquam ut, posuere posuere metus. Phasellus eget sem tempus, egestas nisl dapibus, aliquet elit."
                }
            ]
        ]);
    }

    ko.applyBindings(new AppViewModel());
});