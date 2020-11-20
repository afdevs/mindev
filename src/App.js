import React, {Component} from 'react';
import {TweenMax } from 'gsap';

import Navigation from './components/layouts/Navigation';
import BannerHome from './components/BannerHome';
import About from './components/About';
import Offers from './components/Offers';
import Stacks from './components/Stacks';
import Engagement from './components/Engagement';
import Contact from './components/Contact';
import Footer from './components/layouts/Footer';

/* PAGES */
import EnterpriseSolution from './components/pages/EnterpriseSolution/EnterpriseSolution';
import WebSolution from './components/pages/WebSolution/WebSolution';
import BannerSolution from './components/pages/WebSolution/BannerWebSolution';
import BannerEnterpriseSolution from './components/pages/EnterpriseSolution/BannerEnterpriseSolution';

import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';

export default class App extends Component{
  
  state={
    pageOpen: "home"
  }
  componentDidMount(){
    
    TweenMax.to(document.getElementsByClassName("App"), 0, {css: {visibility: "visible"}});
  }


  setPageOpen = (pageOpened) =>{
    this.setState({
      pageOpen: pageOpened
    });
  }

  render(){    
    return (
      <Router>
        <div className="App" id="appContainer">
          <header className={"header slider "+this.state.pageOpen}>
            <Navigation/>
            <Route exact path="/" component={BannerHome} />          
            <Route exact path="/web-solution" render= {propos =>(
                <React.Fragment>
                  <BannerSolution pageOpen={this.setPageOpen} />
                </React.Fragment>
            )} />
            <Route exact path="/enterprise-solution" render= {propos =>(
                <React.Fragment>
                  <BannerEnterpriseSolution pageOpen={this.setPageOpen} />
                </React.Fragment>
            )} />          
          </header>
          <Route exact path="/web-solution" component={
                  WebSolution}/>

          <Route exact path="/enterprise-solution" component={
                  EnterpriseSolution} />

          <Route exact path="/" render={props=>(
            <React.Fragment>
                <About />
                <Offers /> 
                <Stacks/>                
                <Engagement />
            </React.Fragment>
          )} />

          {/* <Switch>
            <About />
            <Route path="/offers" component={Offers}/>
            <Stacks/>              
            <Route path="/engagementAndValue" component={Engagement}/>
          </Switch>
           */}
          <Contact />
          <Footer />
        </div>
      </Router>
    );
  }
}