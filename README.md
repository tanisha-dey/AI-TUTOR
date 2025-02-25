# AI Tutor

## Overview
AI Tutor is an intelligent educational platform designed to assist students with learning through text summarization, interactive chatbot support, and quizzes. The AI Tutor helps enhance understanding and retention of topics in an engaging and personalized manner.

## Features
- **Text Summarization**: Provides concise summaries of lengthy texts to improve comprehension.
- **AI Chatbot**: Answers student queries in real-time, providing explanations and guidance.
- **Quiz Feature**: Generates quizzes to test knowledge and reinforce learning.

## Installation
### Prerequisites
Ensure you have the following installed:
- Python 3.x
- pip

### Dependencies
Install the required dependencies using:
```sh
pip install streamlit langchain openai
```

## Usage
1. Run the application:
```sh
streamlit run ai_tutor.py
```
2. Use the summarization tool to generate concise text summaries.
3. Ask questions to the chatbot for real-time assistance.
4. Take quizzes to test knowledge on various topics.

## File Structure
- `ai_tutor.py`: Main application script handling user interaction.
- `summarizer.py`: Handles text summarization logic.
- `chatbot.py`: Implements AI-driven chatbot responses.
- `quiz.py`: Manages quiz generation and evaluation.

## Technologies Used
- **Streamlit**: For an interactive user interface.
- **Langchain**: For AI-driven conversation and quiz generation.
- **OpenAI API**: For natural language processing and chatbot intelligence.
- **Python**: Core programming language.

## Future Enhancements
- Add personalized learning paths.
- Integrate voice-based interaction.
- Provide detailed quiz analytics and progress tracking.


