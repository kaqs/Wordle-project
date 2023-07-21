import {compareGuess} from "../wordleUtils";

test('When secretWord is RANGE and guess is RAZOR, it should return the background colors', () => {
    expect(compareGuess("RANGE", "RAZOR", 0)).toEqual({"00" : "green", "01" : "green", "02" : "grey", "03" : "grey", "04" : "grey",});
});

test('When secretWord is SWEET and guess is WHERE, it should return the background colors', () => {
    expect(compareGuess("SWEET", "WHERE", 0)).toEqual({"00" : "yellow", "01" : "grey", "02" : "green", "03" : "grey", "04" : "yellow",});
});

test('When secretWord is WRITE and guess is WRITE, it should return the background colors', () => {
    expect(compareGuess("WRITE", "WRITE", 0)).toEqual({"00" : "green", "01" : "green", "02" : "green", "03" : "green", "04" : "green",});
});

test('When secretWord is COLOR and guess is WATER, it should return the background colors', () => {
    expect(compareGuess("COLOR", "WATER", 0)).toEqual({"00" : "grey", "01" : "grey", "02" : "grey", "03" : "grey", "04" : "green",});
});

test('When secretWord is COLOR and guess is CHOSE, it should return the background colors', () => {
    expect(compareGuess("COLOR", "CHOSE", 0)).toEqual({"00" : "green", "01" : "grey", "02" : "yellow", "03" : "grey", "04" : "grey",});
});

test('When secretWord is COLOR and guess is CRAZY, it should return the background colors', () => {
    expect(compareGuess("COLOR", "CRAZY", 0)).toEqual({"00" : "green", "01" : "yellow", "02" : "grey", "03" : "grey", "04" : "grey",});
});

test('When secretWord is COLOR and guess is COWLS, it should return the background colors', () => {
    expect(compareGuess("COLOR", "COWLS", 0)).toEqual({"00" : "green", "01" : "green", "02" : "grey", "03" : "yellow", "04" : "grey",});
});

test('When secretWord is COLOR and guess is COLOR, it should return the background colors', () => {
    expect(compareGuess("COLOR", "COLOR", 0)).toEqual({"00" : "green", "01" : "green", "02" : "green", "03" : "green", "04" : "green",});
});

test('When secretWord is SLICE and guess is SMELL, it should return the background colors', () => {
    expect(compareGuess("SLICE", "SMELL", 0)).toEqual({"00" : "green", "01" : "grey", "02" : "yellow", "03" : "yellow", "04" : "grey",});
});
