import { TimeSignatures, NoteValues } from './constants';

function getBeatsPerMeasure(timeSignature) {
    return +timeSignature.split('/')[0];
}

function getNoteTypeForBeat(timeSignature) {
    return +timeSignature.split('/')[1];
}

function getNoteValuesFromTimeSignature(timeSignature) {
    const beatValue = getNoteTypeForBeat(timeSignature);
    // find the object with the matching numeric designation
    const allNotes = Object.keys(NoteValues);
    let noteMatchIndex = null
    allNotes.forEach((item, index) => {
        if (NoteValues[item].numericDesignation === beatValue) {
            noteMatchIndex = index;
        }
    })

    // what type of note gets one beat?
    // NoteValues[allNotes[test2]]

    // What is the multiplier for all other notes to determine how many beats
    // they get in the time signature?
    const multiplier = (1 / NoteValues[allNotes[noteMatchIndex]].duration);

    const ret = [];
    allNotes.forEach((item, index) => {
        let tmp = {};
        tmp.properName = NoteValues[item].properName;
        tmp.normalizedDuration = NoteValues[item].duration * multiplier;
        tmp.vfNotation = NoteValues[item].vfNotation;
        ret.push(tmp);
    });
    return ret;
}

function getAllowedNotesFromTimeSignature(timeSignature) {
    const noteValues = getNoteValuesFromTimeSignature(timeSignature);
    const bpm = getBeatsPerMeasure(timeSignature);
    return noteValues.filter(item => item.normalizedDuration <= bpm);
}

function getRandomTimeSignature() {
    return TimeSignatures[Math.floor(Math.random() * Math.floor(TimeSignatures.length))];
}

function getXRandomTimeSignatures(count) {
    const timeSignatureArray = [];
    for (let i = 0; i < count; i += 1) {
        timeSignatureArray.push(TimeSignatures[Math.floor(Math.random() * Math.floor(TimeSignatures.length))]);
    }
    return timeSignatureArray;
}

function getRandomNoteFromAllowedNotes(noteChoices) {
    return noteChoices[Math.floor(Math.random() * Math.floor(noteChoices.length))];
}

function getRandomFromAllowedNotes(noteChoices) {
    return getRandomNoteFromAllowedNotes(noteChoices);
}

function finishMeasure(beatsLeft, noteValues) {
    console.log("hit");
    const arrayOfIndexes = [];
    let beatsLeftInMeasure = beatsLeft;
    let i = 0;
    while (beatsLeftInMeasure > 0) {
        if (noteValues[i].normalizedDuration <= beatsLeftInMeasure) {
            beatsLeftInMeasure = beatsLeftInMeasure - noteValues[i].normalizedDuration;
            arrayOfIndexes.push(i);
            i = i;
        }
        else {
            i = i+1;
        }
    }
    return arrayOfIndexes;
}

export {
    getBeatsPerMeasure, 
    getNoteValuesFromTimeSignature, 
    getNoteTypeForBeat, 
    getAllowedNotesFromTimeSignature,
    getRandomTimeSignature,
    getRandomFromAllowedNotes,
    finishMeasure,
    getXRandomTimeSignatures,
};

// whole: {
//     vfNotation: 'w',
//     duration: 1,
//     numericDesignation: 1,
// },