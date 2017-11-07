/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var TJBot = require('tjbot');
var config = require('./config');

// obtain our credentials from config.js
var credentials = config.credentials;

// these are the hardware capabilities that our TJ needs for this recipe
var hardware = ['microphone', 'camera', 'speaker']; //full capabilities list ['led', 'servo', 'microphone', 'speaker','camera']

// set up TJBot's configuration
var tjConfig = config.tjConfig

// instantiate our TJBot!
var tj = new TJBot(hardware, tjConfig, credentials);
/*
For more informaiton on how to configure the tjbot library (set language, microphone deviceid, speaker device id, etc)
Please visit the tjbot library page - https://github.com/ibmtjbot/tjbotlib/#usage
 */


// listen for speech
tj.listen(function(msg) {
    var containsSee = msg.indexOf("see") >= 0;
    if (containsSee) {
        lookAround()
    }
});

// function to take a quick look around
function lookAround() {
    var objectDescription = ""
    tj.see().then(function(objects) {
        objects.forEach(function(each) {
            if (each.score >= 0.4) {
                objectDescription = objectDescription + ", " + each.class
            }
        })
        tj.speak("The objects I see are: " + objectDescription)
    });
}
