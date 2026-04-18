# 📩 SentinMail AI: Autonomous Inbox Orchestrator

SentinMail AI is a multi-agent system designed to solve "Inbox Fatigue" by providing autonomous reasoning and one-click execution across Gmail and Telegram.

## 🚀 The Agentic Flow
1. **Perceive:** Monitors Gmail API for unread threads (scheduled via n8n).
2. **Reason:** Gemini 3.1 Flash-Lite analyzes content, identifies priority, and generates a structured briefing.
3. **Act:** A custom Telegram interface allows for "Atomic Deletions"—simultaneously trashing the email and cleaning the chat.

## 🛠️ Tech Stack
- **Orchestration:** n8n (Hosted on Render)
- **AI Brain:** Google Gemini 1.5/3.1
- **Communication:** Telegram Bot API
- **Language:** JavaScript (for custom data parsing)

## 📂 Repository Contents
- `brain-workflow.json`: The main perception and reasoning logic.
- `deleter-workflow.json`: The autonomous execution agent.
- `deleter-logic.js`: Custom JS used for callback query parsing.
