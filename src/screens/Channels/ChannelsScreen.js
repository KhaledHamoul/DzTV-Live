import React, { Component } from 'react';
import './channels.css';
var $ = require("jquery");

const channels = [
    {
        name: 'Echourouk TV',
        logo: 'echourouk-white.png',
        url: 'https://nkheyar.com'
    },
    {
        name: 'Ennahar TV',
        logo: 'ennahar-white.png',
        url: 'https://nkheyar.com'
    },
    {
        name: 'A3',
        logo: 'a3-white.png',
        url: 'https://nkheyar.com'
    },
    {
        name: 'Beur TV',
        logo: 'beurtv-white.png',
        url: 'https://nkheyar.com'
    },
    {
        name: 'Canal Algérie',
        logo: 'ca-white.png',
        url: 'https://nkheyar.com'
    },
    {
        name: 'Samira TV',
        logo: 'samira-white.png',
        url: 'https://nkheyar.com'
    },

]

function renderChannelsCards() {
    var cards = []
    var logoPath = null
    for (let i = 0; i < channels.length; i++) {
        logoPath = require('../../assets/img/channels/' + channels[i].logo )
        cards.push(
            <div className='col-xs-12 col-md-6 col-lg-4 mt-3 pt-1'>
                <div className='channel-card row'>
                    <div className='col-12'>
                        <img className='channel-logo' src={ logoPath } alt='channel name'></img>
                    </div>
                    <div className='col-12'>
                        <span className='channel-name'>{ channels[i].name }</span>
                    </div>
                </div>
            </div>
        )
    }
    return cards;
}

class ChannelScreen extends Component {

    componentWillMount() {
        $().ready(() => {
            $('#chennels-container').css({
                transition: '2s',
                top: 0,
                opacity: 1
            })
            $('.channel-card').css({
                transition: '1.5s',
                marginBottom: '30px'
            })
            $('body').css({
                transition: '1s',
                backgroundColor: 'white'
            })
        })
    }

    render() {
        return (
            <div id='chennels-container'>
                <div className='row'>
                    {
                        renderChannelsCards()
                    }
                </div>
            </div>
        );
    }
}

export default ChannelScreen;

