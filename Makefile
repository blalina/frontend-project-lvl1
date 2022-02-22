install: # установить зависимости
	npm ci

brain-games: #разворачивание и запуск brain-games
	node bin/brain-games.js

publish: # публикация пакета
	npm publish --dry-run

lint: # запуск линтера
	npx eslint .

brain-even: #разворачивание и запуск brain-even
	node bin/brain-even.js

brain-calc: #разворачивание и запуск brain-calc
	node bin/brain-calc.js

brain-gcd: #разворачивание и запуск brain-gcd
	node bin/brain-gcd.js

brain-progression: #разворачивание и запуск brain-progression
	node bin/brain-progression.js

brain-prime: #разворачивание и запуск brain-prime
	node bin/brain-prime.js
