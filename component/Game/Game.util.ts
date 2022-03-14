export const placeholders = [
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*'],
    ['*', '*', '*', '*', '*']
];

export const isLetter = (key: string) => ['A','B','C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'].includes(key.toUpperCase());

export const getGuessKey = (index: number) => `guess${index + 1}`;

export const updateCompletedGuesses = (prevGuessCompletion, guessIndex: number, guess: string) => ({
    ...prevGuessCompletion,
    [getGuessKey(guessIndex)]: guess
});

export const getGuess = (guessIndex: number, index: number, guess: string, completedGuesses) => {
    if (guessIndex === index) {
        return guess;
    } else if (guessIndex > index) {
        return completedGuesses[getGuessKey(index)];
    } else {
        return null;
    }
}

export const getVictoryMessage = (guesses: number) => {
    switch (guesses) {
        case 1: {
            return 'Miraculous'
        }
        case 2: {
            return 'Crushed it'
        }
        case 3: {
            return 'Impressive'
        }
        case 4: {
            return 'Nice'
        }
        case 5: {
            return 'There it is'
        }
        case 6: {
            return 'Phew'
        }
    }
}