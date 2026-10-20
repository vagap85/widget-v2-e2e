# Sigma Notification Widget v2.0.0 — E2E Tests

[![Playwright](https://img.shields.io/badge/Playwright-1.64+-brightgreen.svg)](https://playwright.dev)
[![Tests](https://img.shields.io/badge/Tests-12%20Passed-brightgreen.svg)](#)

E2E-тесты для NPM-пакета [`omni-notice-sigma-notification-widget@2.0.0`](https://www.npmjs.com/package/omni-notice-sigma-notification-widget/v/2.0.0) — React-виджета всплывающих уведомлений.

## 🎯 Зачем это нужно

Релиз `v2.0.0` не покрыт E2E-тестами в исходном репозитории (он не публикуется на GitHub). 
Этот проект — **независимый тестовый стенд**, который проверяет **собранный NPM-пакет** (то, что реально получают пользователи).

## 📊 Результаты тестирования

**12 passed (21.3s)** — все ключевые сценарии из документации работают.

| # | Тест | Результат |
|---|------|-----------|
| 1 | Появление и закрытие уведомления | ✅ Passed |
| 2 | Ограничение `maxVisible` (3 из 4) | ✅ Passed |
| 3 | Автозакрытие (2с) | ✅ Passed |
| 4 | Отключение автозакрытия (`autoCloseMs: 0`) | ✅ Passed |
| 5 | Статус `error` (проверка `data-status`) | ✅ Passed |
| 6 | Обновление контента через `update()` | ✅ Passed |
| 7 | Очистка через `clear()` | ✅ Passed |
| 8 | Кнопка действия (`href`) | ✅ Passed |
| 9 | Скрытие кнопки закрытия (`closeButtonEnabled: false`) | ✅ Passed |
| 10 | Закрытие по клавише Escape | ✅ Passed |
| 11 | Изоляция ошибок рендера | ✅ Passed |
| 12 | Ссылка действия (проверка `href`) | ✅ Passed |

## 🚀 Как запустить

### 1. Установка
```bash
npm install
npx playwright install chromium
2. Запуск тестов
bash
npm run test:e2e
3. Просмотр отчёта
bash
npx playwright show-report
В отчёте доступны видео каждого теста, трейсы и скриншоты.

🏗 Архитектура
text
widget-v2-e2e/
├── index.html              ← Тестовая страница
├── src/
│   └── main.tsx            ← React-приложение с кнопками сценариев
├── tests/
│   └── widget.spec.ts      ← 12 E2E-тестов
├── playwright.config.ts    ← Конфиг Playwright
├── vite.config.ts          ← Конфиг Vite
└── package.json
Как это работает
Vite запускает dev-сервер (localhost:5173).

На странице — кнопки для разных сценариев (базовое уведомление, 4 подряд, автозакрытие, Escape и т.д.).

Playwright открывает страницу, кликает по кнопкам и проверяет, что виджет работает корректно.

📝 Найденные нюансы
ARIA-роль alert: карточка не отображается визуально (работает как hidden announcer для скринридеров). Это соответствует README, но требует data-testid для E2E-проверки.

clear(): работает корректно, но требует учёта анимации (250ms).

📞 Контакты
Автор: Евгений (QA Automation)

Пакет: NPM v2.0.0