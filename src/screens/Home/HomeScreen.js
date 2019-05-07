import React, { Component } from 'react';
import backgroundImg from '../../assets/img/background-white.png';
import './home.css';
var $ = require("jquery");

const baseUrl = process.env.PUBLIC_URL;

class HomeScreen extends Component {

    componentWillMount() {
        $().ready(() => {
            $('body').css({
                backgroundColor: 'black'
            })
            $("#welcome-container").css({
                transition: '1s',
                top: '0px',
                opacity: 1
            })
        })
    }

    render() {

        return (
            <div id='welcome-container'>
                <div className='row background-img-container'>
                    <div className='col-12'>
                        <img src={backgroundImg} alt='background' className="background-img" />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-7 col-sm-10 col-lg-5 welcome-txt-container'>
                        <span className='welcome-txt'>Watch Algerian TV Channels Online</span>
                    </div>
                    <div className='col-12'></div>
                    <div className='col-12 text-center'>
                        <a onClick={this.goToChannelsPage} className='btn-watch'>Watch Now</a>
                    </div>
                </div>
            </div>

        );
    }

    goToChannelsPage = () => {
        $("#welcome-container").css({
            transition: '1s',
            top: '-500px',
            opacity: 0
        })
        $("body").css({
            transition: '1s',
            backgroundColor: 'white'
        })
        setTimeout(() => {
            this.props.history.push( './channels' )
        }, 700)
    }
}

export default HomeScreen;

