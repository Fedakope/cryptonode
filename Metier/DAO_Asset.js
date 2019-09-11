var mysql2 = require('mysql2');
const argv =require("yargs").argv;
const exchange = require("./exchange");
const asset = require("./asset");

module.exports = class DAO_Asset
{
	constructor(serveur,utilisateur,mdp,db)
	{
		this.cnn = mysql2.createConnection({
			host: serveur,
			user: utilisateur,
			password: mdp ,
			database: db
		});
	}


	Create(a) {
		this.cnn.query("INSERT INTO asset VALUES(?,?,?,?,?,?,?)" ,
			[a.ID, a.Coin ,a.Symbol, a.Quantity, a.Pu, a.Valorisation, a.Ex_name]
			, function (error, results, fields) 
			{
				if (error) throw error;
				return results.length ;
			});
	}



	DisplayAll()
	{
		this.cnn.query(
			'SELECT * FROM  asset',
			function(err, lignes, fields) {
				if (!err)
				{
					console.log("\n----- Liste des assets : -----")
					for(let ligne of lignes)
					{
						console.log("ID: " + ligne["ID"] + " - " + ligne["Coin"] + " - " + ligne["Symbol"] + " - " + ligne["Quantity"] + " - " + ligne["Pu"] + " - " + ligne["Valorisation"] + " - " + ligne["Ex_name"] )
					}       
				}
			});
	}



} // accolade finale 