import {
	web3Loaded
} from './actions';

export const loadWeb3 = (dispatch) => {
	const web3 = window.web3;
	dispatch(web3Loaded(web3));
	return web3;
}