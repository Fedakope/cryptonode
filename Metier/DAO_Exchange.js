var mysql2 = require('mysql2');
const argv =require("yargs").argv;
const exchange = require("./exchange");
const asset = require("./asset");

module.exports = class DAO_Exchange
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


	Create(e) {
		this.cnn.query("INSERT INTO exchange VALUES(?,?)" ,
			[e.ID, e.Name]
			, function (error, results, fields) 
			{
				if (error) throw error;
				return results.length ;
			});
	}



	DisplayAll()
	{
		this.cnn.query(
			'SELECT * FROM  exchange',
			function(err, lignes, fields) {
				if (!err)
				{
					console.log("\n----- Liste des exchanges : -----")
					for(let ligne of lignes)
					{
						console.log("ID: " + ligne["ID"] + " - " + ligne["Name"] )
					}       
				}
			});
	}



} // accolade finale 