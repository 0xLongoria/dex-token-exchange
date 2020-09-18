import React, { Component } from 'react';
import './App.css';
import Web3 from 'web3';
import Navbar from './Navbar';
import Content from './Content';
import { connect } from 'react-redux';
import { 
  loadAndDispatchWeb3, 
  loadAccount, 
  loadToken,
  loadExchange
} from '../store/interactions';


class App extends Component {
  
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData(this.props.dispatch);
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  }

  async loadBlockchainData(dispatch) {
    const web3 = loadAndDispatchWeb3(dispatch);
    await web3.eth.net.getNetworkType();
    const networkId = await web3.eth.net.getId();
    const accounts = await loadAccount(web3, dispatch);
    const token = loadToken(web3, networkId, dispatch);
    loadExchange(web3, networkId, dispatch);
  }

  render() {
    return (
      <div>
        <Navbar />
        <Content />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    // TODO: Fill me in
  }
}

export default connect(mapStateToProps)(App);