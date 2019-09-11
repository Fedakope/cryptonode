module.exports = class Asset
{
	constructor(id,coin,symbol, quantity, pu, valorisation, ex_name)
	{
		this.ID;
		this.Coin = coin;
		this.Symbol = symbol ;
		this.Quantity = quantity;
		this.Pu = pu;
		this.Valorisation = valorisation;
		this.Ex_name = ex_name;
	}
}