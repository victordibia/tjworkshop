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

// obtain user-specific config
var WORKSPACEID = config.conversationWorkspaceId;

// these are the hardware capabilities that TJ needs for this recipe
var hardware = ['microphone', 'speaker', 'camera']; //full capabilities list ['led', 'servo', 'microphone', 'speaker','camera']

// set up TJBot's configuration
var tjConfig = {
    log: {
        level: 'verbose'
    }
};

var tj = new TJBot(hardware, tjConfig, credentials);

// listen for utterances with our attentionWord and send the result to
// the Conversation service
tj.listen(function(msg) {
    tj.converse(WORKSPACEID, msg, function(response) {
        response = response.object;
        if (response.output != undefined && response.output.text.length > 0) {
            //console.log(response)
            conversation_response = response.output.text[0];
            if (conversation_response != undefined) {
                matchedIntent = response.intents[0].intent; // intent with the highest confidence
                var intentconfidence = response.intents[0].confidence;
                console.log("> intents : ", response.intents);

                if (intentconfidence > 0.5) {
                    if (matchedIntent == "see") {
                        lookAround();
                    }
                }
            }
        }


    });
})

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
