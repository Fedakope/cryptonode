// Require class et DAO
const exchange = require("./Metier/exchange.js");
const asset = require("./Metier/asset.js");
const dao_asset = require("./Metier/DAO_Asset");
const dao_exchange = require("./Metier/DAO_Exchange");

// Require node package
const argv =require("yargs").argv;
const mysql = require('mysql2');
const path = require("path");




// Application
const express = require("express");
const app = express();

// Require et use body-parser
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended:true
}))

// Server 
console.log(".------------------------------. \n| Bienvenue sur CryptoNode     | \n| Serveur à l'ecoute port 4404 | \n.------------------------------. \n")
app.listen(4404,()=> console.log(""));

// Connection à la base de donnée
let daoasset = new dao_asset("remotemysql.com","MsSNNXN4vq","91UwJSMPeP","MsSNNXN4vq");
let daoexchange = new dao_exchange("remotemysql.com","MsSNNXN4vq","91UwJSMPeP","MsSNNXN4vq");

// cible le dossier public pour les pages html
app.use(express.static(path.join(__dirname , 'public'))); 

 
 // ROUTES
 app.route("/exchanges")	
 .post((req,res) => {
 	console.log(JSON.stringify(req.body));
 	let name = req.body.name
 	let e = new exchange('', name, '')
 	daoexchange.Create(e)
 	res.json();
 })



// CORPS DE L'APP


// Test methode Create() pour exchange et asset
daoexchange.Create(new exchange('', 'Kraken'))
daoasset.Create(new asset('', 'Dashcoin', 'DASH', 500, 2, 1000, 'Poloniex'))

// Display exchanges and assets
daoexchange.DisplayAll();
daoasset.DisplayAll();
