function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

// prints the output of shout(string) to the console
function logShout(string) {
    console.log(shout(string));
}

//prints the output of whisper(string) to the console
function logWhisper(string) {
    console.log(whisper(string));
}

function sayHiToHeadphonedRoommate(string) {
    if (string === whisper(string))
        return "I can't hear you!";
    else if (string === shout(string))
        return "YES INDEED!";
    else (string = "Let's have dinner together!")
        return "I would love to!";
}