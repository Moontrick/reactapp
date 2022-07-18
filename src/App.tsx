import React,{useState, Fragment} from 'react';
import './styles/App.scss';
import cardsLogo from './assets/cards3.svg'
import profileLogo from './assets/images/profile-icon.svg'
import walletIcon from './assets/images/wallet-icon.svg'
import peopleIcon from './assets/images/people-icon.svg'
import likeIcon from './assets/images/like-icon.svg'
import path from './assets/images/Path.svg'
import graphPoint from './assets/images/graph-point.svg'
import buttonShow from './assets/images/button-show.svg'
import cardDollar from './assets/images/card-dollar.svg'
import cardTools from './assets/images/card-tools.svg'
import cardTrade from './assets/images/card-trade.svg'
import cardTime from './assets/images/card-time.svg'
import cardProgress from './assets/images/card-progress.svg'
import linkCopy from './assets/images/link-copy.svg'
import linkShare from './assets/images/link-share.svg'



function App() {


    const [val, setVal] = useState({ min: 0, max: 100 });


    
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

          <div className='center'>
            <div className='profile'>
                <div className='profile-icon'>
                    <img src={profileLogo} />
                </div>
                <div className="profile-id">
                    <div className="id1">ID 363024</div>
                    <div className="id2">ID 363024</div>
                    <div className="id3">ID 363024</div>
                </div>
                <div className='wallet-id'>
                    <img src={walletIcon} style={{ marginRight: "5px" }} />
                    <div>0xB35d53...9914</div>
                </div>
                <div className='arrows-menu'>
                    <img className="path" src={path}></img>
                    <div className='arrow-people'>
                        <div className='arrow-icon'>
                            <img src={peopleIcon}></img>
                        </div>
                        <div className='arrow-under-text'>
                            5.5k
                        </div>
                    </div>
                    <div className='horizontal-line'></div>
                    <div className='arrow-people'>
                        <div className='arrow-icon'>
                            <img src={likeIcon}></img>
                        </div>
                        <div className='arrow-under-text'>
                            103k
                        </div>
                    </div>
                    <img className='path' src={path} style={{ transform: "rotate(180deg)" }}></img>
                </div>
                <div className='score-graph'>
                    <div className='graph'>
                        <img src={graphPoint} />
                    </div>
                    <div className='profit-block'>
                        <div className='profit'>
                            Your profit:
                        </div>
                        <div className="profile-id">
                            <div className="id2">56.054 BNB</div>
                            <div className="id1">56.054 BNB</div>
                            <div className="id3">56.054 BNB</div>
                        </div>
                        <div className='button-show'>
                            <img src={buttonShow}></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className='r-c-s'>
            <div className='dashboard'>
                    <div className='dashboard-title'>
                        <div className="id2">Dashboard</div>
                        <div className="id1">Dashboard</div>
                        <div className="id3">Dashboard</div>
                    </div>
                    <div className = "personal-link">
                        <div className = "pesonal-link-content">
                            <div className = "personal-link-title">My personal link:</div>
                            <div className='link-lower-panel'>
                                <div className='link-line'>
                                    <div className='link-purple-line'></div>
                                    <div className='link-text'>BSG.IO/Id1245</div>
                                </div>
                                <img className='link-img1' src = {linkCopy}></img>
                                <img className='link-img2' src = {linkShare}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='number-cards'>
                    <div className='card'>
                        <div className='card-all'>
                            <div className = "card-content">
                                <div className='card-text'>
                                    Money in project
                                </div>
                                <div className='card-under-line'></div>
                                <div className='card-count-block'>
                                    <div className="card-count">
                                        <div className="id2">$129,850</div>
                                        <div className="id1">$129,850</div>
                                        <div className="id3">$129,850</div>
                                    </div>
                                    <div className = "card-percent">+15%</div>
                                </div>                        
                            </div>
                            <img className = "card1-img" src = {cardDollar}></img>
                        </div>
                        <div className='card-under-line-selected'></div>
                    </div>
                    <div className='card'>
                        <div className='card-all'>
                            <div className = "card-content">
                                <div className='card-text'>
                                    People here
                                </div>
                                <div className='card-under-line2'></div>
                                <div className='card-count-block'>
                                    <div className="card-count">
                                        <div className="id2">25,000</div>
                                        <div className="id1">25,000</div>
                                        <div className="id3">25,000</div>
                                    </div>
                                </div>                        
                            </div>
                            <img className='card2-img' src = {cardTools}></img>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-all'>
                            <div className = "card-content">
                                <div className='card-text'>
                                    Money back
                                </div>
                                <div className='card-under-line2'></div>
                                <div className='card-count-block'>
                                    <div className="card-count">
                                        <div className="id2">25,000</div>
                                        <div className="id1">25,000</div>
                                        <div className="id3">25,000</div>
                                    </div>
                                    <div className = "card-percent2">-21%</div>
                                </div>                        
                            </div>
                            <img className = "card3-img" src = {cardTrade}></img>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-all' style = {{flexDirection:"column"}}>
                            <div className = "card4-content">
                                <div className = "card4-first">
                                    <div className='card-text'>
                                        Time of end
                                    </div>
                                    <div className='card-under-line2'></div>
                                </div>
                                <img className = "card4-img" src = {cardTime}></img>                      
                            </div>
                            <div className='card-count-block2'>
                                    <div className="card-count2">72%</div>
                                    <img src={cardProgress}></img>
                            </div>  
                        </div>
                    </div>

                </div>
                    <h1 id='car-information'>Here all your cars and main information</h1>
                    <div className='left-right-c-s'>
                        <div className='left-up-bl'>
                            <div className='left-up-bl-up'>
                                <h1 id='left-up-bl-up-h1'>Binance Smart Game</h1>
                                <div className='left-up-bl-up-active'>
                                    <h1> Active</h1>
                                </div>
                            </div>
                            <div style={{marginLeft: "15px"}} className="card-count">
                                <div className="id2">$129,850</div>
                                <div className="id1">$129,850</div>
                                <div className="id3">$129,850</div>
                            </div>
                            <div className='left-up-bl-check'>
                                <div className='left-up-bl-check-up'>
                                    <div className='left-up-bl-check-up-block-enable'>
                                        <div className='check-box'/>
                                    </div>
                                    <div className='left-up-bl-check-up-block-plus'>
                                        <div className='plus-box'/>
                                    </div>
                                    <div className='left-up-bl-check-up-block'/>
                                    <div className='left-up-bl-check-up-block'/>
                                    <div className='left-up-bl-check-up-block'/>
                                    <div className='left-up-bl-check-up-block'/>
                                </div>
                                <div className='left-up-bl-check-down'>
                                    <div className='left-up-bl-check-up-block'/>
                                    <div className='left-up-bl-check-up-block'/>
                                    <div className='left-up-bl-check-up-block'/>
                                    <div className='left-up-bl-check-up-block'/>
                                    <div className='left-up-bl-check-up-block'/>
                                    <div className='left-up-bl-check-up-block'/>
                                </div>
                            </div>
                        </div>
                        <div className='left-down-bl-1'>
                            <div className='left-down-bl'>
                                <div className='left-down-bl-up'>
                                    <h1>Your last car for Race</h1>
                                </div>
                                <div className='left-down-bl-down'>
                                    <div className='left-down-bl-down-left'>
                                        <h1 id='left-down-bl-down-left-h1'>Staking</h1>
                                        <h1 id='left-down-bl-down-left-h2'>+15%</h1>
                                        <h1 id='left-down-bl-down-left-h3'>Race speed</h1>
                                        <h1 id='left-down-bl-down-left-h4'>+15%</h1>
                                    </div>
                                    <div className='left-down-bl-down-right'>
                                        <div className='left-down-bl-down-right-car'/>
                                    </div>
                                </div>
                            </div>
                            <div className='left-down-bl-down-line'/>
                        </div>
                    </div>
            </div>
            </div>
            



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
                        <div className='r-c-obs'>
                            <div className='chatik'>
                                <div className='chat-ic'/>
                                <h1> Chat with us</h1>                           
                            </div>
                            <div className='circle-3'>
                                <div className='circle-2'>
                                    <div className='circle-1'>
                                        <div className='drid'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;