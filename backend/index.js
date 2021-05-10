'use strict'

const Assistant = require('actions-on-google')
const request = require('request')


exports.firstAction = (req, res) => {
    const assistant = new Assistant({request: req, response: res})
    getting_water = (assistant) => {
        const msg = 'You have received some water!';
        assistant.tell(message);
    }
    const actionMap = new Map();
    actionMap.set('getting_water', getting_water)
    assistant.handleRequest(actionMap)
    
}