# Hexlet tests and linter status:

[![Actions Status](https://github.com/blalina/frontend-project-lvl1/workflows/hexlet-check/badge.svg)](https://github.com/blalina/frontend-project-lvl1/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability)](https://codeclimate.com/github/codeclimate/codeclimate/maintainability)
[![Node CI](https://github.com/blalina/frontend-project-lvl1/actions/workflows/nodejs.yml/badge.svg)](https://github.com/blalina/frontend-project-lvl1/actions/workflows/nodejs.yml)

# Description:

"Mind Games" is a set of five console games based on the popular mobile brain-pumping apps. Each game asks questions that need to be answered correctly. After three correct answers, the game is considered completed. Incorrect answers end the game and prompt you to play it again.

Example game:

```
brain-progression
Welcome to the Brain Game!
What number is missing in this progression?
May I have your name? Roman
Hello, Roman!
Question: 14 .. 18 20 22 24 26 28
Your answer: 16 # Пользователь вводит ответ
Correct!
Question: 5 6 7 8 9 .. 11 12
Your answer: 10 # Пользователь вводит ответ
Correct!
Question: 12 15 18 21 .. 27 30 33
Your answer: 24 # Пользователь вводит ответ
Correct!
Congratulations, Roman!
```

# Setup:

***Before you start the games, do the following:***

- Сheck for **Node.js**: enter command line `node -v`.
- Install **Node.js** package: enter command line `brew install node`.
- The npm is installed with Node.js by default. Сheck for **npm**: enter command line `npm -v`.
- Upgrade **Node.js** to the latest version: enter command line `brew upgrade node`.
- Clone this repository by **SSH key**: `git@github.com:blalina/frontend-project-lvl1.git`.
- Add and check depencies: enter command line `make install`.
- Run games: enter command line `make *game name*`.

# Game list:

1. **brain-games** - game with introduction
2. **brain-even** - check the number for parity
3. **brain-calc** - calculate expressions
4. **brain-gcd** - сalculate the greatest common divisor of the numbers
5. **brain-progression** - calculate the missing number from an arithmetic progression
6. **brain-prime** - check if the number is prime

# Games overviews:

**brain-even asciinema**
[![asciicast](https://asciinema.org/a/yrFTEkmfcAgjjgBzpRJXskV3o.svg)](https://asciinema.org/a/yrFTEkmfcAgjjgBzpRJXskV3o)

**brain-calc asciinema**
[![asciicast](https://asciinema.org/a/9jPc7clgVA3MvT1EGuMGB6X9I.svg)](https://asciinema.org/a/9jPc7clgVA3MvT1EGuMGB6X9I)

**brain-gcd asciinema**
[![asciicast](https://asciinema.org/a/KJd8cKwZSBXVlFejkqUdljuTg.svg)](https://asciinema.org/a/KJd8cKwZSBXVlFejkqUdljuTg)

**brain-progression asciinema**
[![asciicast](https://asciinema.org/a/ASSWTmJEsOMbTNR6tUhH1V5Co.svg)](https://asciinema.org/a/ASSWTmJEsOMbTNR6tUhH1V5Co)

**brain-prime asciinema**
[![asciicast](https://asciinema.org/a/oFjEp0ECy0o1lj5IB1XXPfgXF.svg)](https://asciinema.org/a/oFjEp0ECy0o1lj5IB1XXPfgXF)
