import {
	web3Loaded,
	web3AccountLoaded,
	tokenLoaded,
	exchangeLoaded
} from './actions';
import Token from '../abis/Token.json';
import Exchange from '../abis/Exchange.json';

export const loadAndDispatchWeb3 = (dispatch) => {
	const web3 = window.web3;
	dispatch(web3Loaded(web3));
	return web3;
}

export const loadAccount = async (web3, dispatch) => {
	const accounts = await web3.eth.getAccounts();
	const account = accounts[0];
	dispatch(web3AccountLoaded(account));
	return account;
}

export const loadToken = async (web3, networkId, dispatch) => {
	try {
		const token = new web3.eth.Contract(Token.abi, Token.networks[networkId].address);
		dispatch(tokenLoaded(token));
		return token;
	} catch (error) {
		console.log('Contract not deployed to the current network. Please select another network with Metamask.');
		return null;
	}
}

export const loadExchange = async (web3, networkId, dispatch) => {
	try {
		const exchange = new web3.eth.Contract(Exchange.abi, Exchange.networks[networkId].address);
		dispatch(exchangeLoaded(exchange));
		return exchange;
	} catch (error) {
		console.log('Contract not deployed to the current network. Please select another network with Metamask.');
		return null;
	}
}