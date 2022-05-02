# react-books-app

:mag: Book Search App - Поиск книг с использованием Google Books API

## Поиск книг

Это приложение позволяет искать книги в google books, сортировать их по категориям и новизне/релевантности.
Для каждой книги есть своя страница, где находится вся информация по авторам, жанрам, описанию данной книги.

## Features
1. Cache requests
2. Search-History
3. Adaptive

## Запуск

[Нажмите здесь, чтобы увидеть демо](https://keeeparis.github.io/react-books-app/)

## Локальный запуск

Клонируйте репозиторий

```
git clone <REPO-URL> <папка-назначения>
```

### Используйте DOCKER

```
docker-compose up -d
```

Потом откройте `localhost:3000/react-books-app`

### Либо используйте локальную установку зависимостей

Development mode

```
npm i
npm run dev
```

Production mode

```
npm run build
```

Тесты

```
npm run test
```

## Стек технологий

- React
- Redux-Toolkit
- React-router-dom
- React-transition-group
- i18next/react-i18next
- Eslint/prettier
- Jest
- React-testing-library
- Vite
