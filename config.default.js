/*
User-specific configuration
    ** IMPORTANT NOTE ********************
    * Please ensure you do not interchange your username and password.
    * Hint: Your username is the lengthy value ~ 36 digits including a hyphen
    * Hint: Your password is the smaller value ~ 12 characters
*/


exports.sentiment_keyword = "education"; // keyword to monitor in Twitter
exports.sentiment_analysis_frequency_sec = 30; // analyze sentiment every N seconds
exports.conversationWorkspaceId = ''; // replace with the workspace identifier of your conversation

// Setup configuration parameters for the TJBot library
exports.tjConfig = {
    log: {
        level: 'verbose'
    },
    listen: {
        microphoneDeviceId: "plughw:1,0", // plugged-in USB card 1, device 0; see arecord -l for a list of recording devices
        inactivityTimeout: -1, // -1 to never timeout or break the connection. Set this to a value in seconds e.g 120 to end connection after 120 seconds of silence
        language: 'en-US' // see TJBot.prototype.languages.listen
    },
    speak: {
        language: 'en-US', // see TJBot.prototype.languages.speak
        voice: undefined, // use a specific voice; if undefined, a voice is chosen based on robot.gender and speak.language
        speakerDeviceId: "plughw:0,0" // plugged-in USB card 1, device 0; see aplay -l for a list of playback devices
    },
    see: {
        confidenceThreshold: {
            object: 0.5, // only list image tags with confidence > 0.5
            text: 0.1 // only list text tags with confidence > 0.1
        },
        camera: {
            height: 720,
            width: 960,
            verticalFlip: false, // flips the image vertically, may need to set to 'true' if the camera is installed upside-down
            horizontalFlip: false // flips the image horizontally, should not need to be overridden
        }
    }
};

// Create the credentials object for export
exports.credentials = {};


// Watson Conversation
// https://www.ibm.com/watson/developercloud/conversation.html
exports.credentials.conversation = {
    password: '',
    username: ''
};



// Watson Text to Speech
// https://www.ibm.com/watson/developercloud/text-to-speech.html
exports.credentials.text_to_speech = {
    password: '',
    username: ''
};


// Watson Speech to Text
// https://www.ibm.com/watson/developercloud/speech-to-text.html
exports.credentials.speech_to_text = {
    password: '',
    username: ''
};


// Watson Vision Recognition
// https://www.ibm.com/watson/developercloud/text-to-speech.html
exports.credentials.visual_recognition = {
    api_key: '',
    version: '2016-05-19'
}


// Watson Tone Analyzer
// https://www.ibm.com/watson/developercloud/tone-analyzer.html
exports.credentials.tone_analyzer = {
    password: '',
    username: ''
};

// Twitter
exports.credentials.twitter = {
    consumer_key: '',
    consumer_secret: '',
    access_token_key: '',
    access_token_secret: ''
};
