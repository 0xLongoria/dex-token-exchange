pragma solidity ^0.5.0;

contract Exchange {
	// Variables
	address public feeAccount; // the account that receives exchange fees
	
	constructor (address _feeAccount) public {
		feeAccount = _feeAccount;
	}
}

// TODO:
// [ ] Set the fee account
// [ ] Deposit Ether
// [ ] Withdraw Ether
// [ ] Deposit tokens
// [ ] Withdraw tokens
// [ ] Check balances
// [ ] Make order
// [ ] Cancel order
// [ ] Fill order
// [ ] Charge fees
