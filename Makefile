install: # установить зависимости
	npm ci

brain-games: #разворачивание и запуск
	node bin/brain-games.js

publish: # публикация пакета
	npm publish --dry-run

lint: # запуск линтера
	npx eslint .