import React, { Component } from 'react';
import './App.css';
import TweetsList from './components/Tweets/TweetsList';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import TweetDetail from './components/Tweets/TweetDetail';
import TweetForm from './components/Tweets/TweetForm';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Twitter Clone!</h2>
        </div>
        <div className="App-intro">

          <Router>
            
            <div>
              <Route path="/" exact={true} component={TweetsList} />
              <Route path="/login" exact={true} component={Login} />
              <Route 
                path="/tweet/new" 
                exact={true} 
                component={TweetForm}
              />
              <Route 
                path="/tweet/edit/:tweetId" 
                exact={true} 
                render= { ( {match} ) => {
                    return <TweetForm _id={match.params.tweetId} />
                  } 
                }
              />
              <Route 
                path="/tweet/detail/:tweetId" 
                exact={true} 
                render= { ( {match} ) => {
                    return <TweetDetail _id={match.params.tweetId} />
                  } 
                }
              />
            </div>

          </Router>

        </div>
      </div>
    );
  }
}

export default App;
