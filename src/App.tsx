import './styles/App.scss';
import cardsLogo from './assets/cards3.svg'

function App() {

    return (
        <div className="App">
            <header>
                <div className='left-sec'>
                    <div className="menu-open"/>
                    <div className="card-prime">
                        <img src= {cardsLogo}/>
                        <h1>New era of crypto games</h1>
                    </div>
                </div>
                <div className='center-sec'>
                    <div className='smart-sc'>
                        <div className='smart-b'/>
                        <h1> Smart Chain</h1>
                    </div>
                    <div className='money'>
                        <div className='w-t'>
                            <div className='wallet'/>
                            <h1 style={{ marginLeft: "7px"}}> 5.621 BNB </h1>
                        </div>
                        <div className='string'/>
                        <h1> 0xB2...31</h1>
                    </div>
                </div>
                <div className='right-sec'>
                    <div className='user-name'>
                        <h1> ID #3241</h1>
                        <div className='user-pr'>
                            <div className='user-q'/>
                        </div>
                    </div>
                    <div className='search'/>
                </div>
            </header>
            
            {/* <div className='drid'>
                <div className='drid-ic'>
                    <div className='circle-d-3'>
                        <div className='circle-d-2'>
                            <div className='circle-d-1'>
                                
                                  
                                        
                            </div>
                        </div>
                    </div> 
                </div>
            </div> */}
            <footer>
                <div className='pre-footer'>
                    <h1>Navigation of the site</h1>
                </div>
                <div className='footer-section'>
                    <div className='l-c'>
                        <div className='left-footer'>
                            <h1> Be in touch with us:</h1>
                            <div className='footer-line'/>
                            <div className='left-footer-ic'>
                                <div className='dis-f'/>
                                <div className='telega-f'/>
                            </div>
                        </div>
                    </div>
                    <div className='c-c'>
                        <div className='footer-position'>
                            <div className='line-f'>
                                <div className='word-ic'/>
                                <h1> Dashboard</h1> 
                            </div>
                        </div>
                        <div className='footer-position'>
                            <div className='line-f'>
                                <div className='stat-ic'/>
                                <h1> Stats</h1> 
                            </div>
                        </div>
                        <div className='footer-position'>
                            <div className='line-f'>
                                <div className='partner-ic'/>
                                <h1> Partner bonus</h1> 
                            </div>
                        </div>
                        <div className='footer-position'>
                            <div className='line-f'>
                                <div className='info-ic'/>
                                <h1> Info</h1> 
                            </div>
                        </div>
                        <div className='footer-position'>
                            <div className='line-f'>
                                <div className='telega-ic'/>
                                <h1> Telegram bot</h1> 
                            </div>
                        </div>
                        <div className='footer-position'>
                            <div className='line-f'>
                                <div className='promo-ic'/>
                                <h1> Promo</h1> 
                            </div>
                        </div>
                        <div className='footer-position'>
                            <div className='line-f'>
                                <div className='news-ic'/>
                                <h1> News</h1> 
                            </div>
                        </div>
                    </div>
                    <div className='r-c'>
                        <div className='chatik'>
                            <div className='chat-ic'/>
                            <h1> Chat with us</h1>
                        </div>
                        
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;