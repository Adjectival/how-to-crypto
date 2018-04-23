import React from 'react';
import axios from 'axios';

import { Crypto } from './Crypto';

import './App.css';


class App extends React.Component {

    state = {
        coins: []
    }

    componentDidMount() {
        axios.get('https://api.coinmarketcap.com/v1/ticker/?start=0&limit=99')
            .then(res => {
                const coins = res.data;
                this.setState({ coins });
            })
    }

    render() {
        return (
        <div>
            <div className="">
            <div className="ml-3">
                <h2 className="display-5">Top 99 Crypto Currencies</h2>
                <h6>
                    Created for educational purposes only by <a href="https://github.com/Adjectival">Alexander Jacks</a>.
                </h6>
                <h6>
                    Not intended as a replacement for professional investment advice.
                </h6>
                <h4>
                    Want a crypto guide?
                    <a href="https://how-to-crypto.herokuapp.com/"> Check this out.</a>
                </h4>
                <h6 className="donate">
                    Donate ETH: 0xd74cb5c0e868B06DaEA6Bb25364dCF1f2C096855
                </h6>
            </div>
            </div>



{/* iterate thru the array list gathered from the API*/}
            <div className="card-deck">
                { this.state.coins.map(coin =>
                    <a href={"https://coinmarketcap.com/currencies/" + coin.id}>
                    <div className={"card container-fluid m-2 card-bg-img bg-" + coin.id}>
                        
                        {/* title zone */}
                        <div>
                            <span className="h3 ">#{coin.rank} </span>
                            <span className="h3 ">({coin.symbol}) </span>
                            <span className="h3">{coin.name}</span>
                        </div>

                        
                        {/* metadata zone */}
                        <ul>
                            <li className="h6">
                                Value in USD $ 
                                <span className="h4">{coin.price_usd}</span>
                            </li>
                            <li className="h6">
                                Hourly Change:
                                <span className="h6"> {coin.percent_change_1h}%</span>
                            </li>
                            <li className="h6">
                                Daily Change:
                                <span className="h6"> {coin.percent_change_24h}%</span>
                            </li>
                            <li className="h6 weekly">
                                Weekly Change:
                                <span className="h5"> {coin.percent_change_7d}%</span>
                            </li>
                        </ul>
                    </div>
                    </a>
                )}
            </div>
            {/* end iteration */}

        </div>
        );
    }
}

export default App;
