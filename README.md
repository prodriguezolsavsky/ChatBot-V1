# ChatBot-V1

Proyecto colaborativo para crear un chatbot en AWS.

## Objetivos

- Crear un chatbot utilizando Amazon Lex.
- Implementar funciones Lambda para manejar los intents.
- Utilizar DynamoDB para almacenar datos de usuario y sesiones.
- Exponer el chatbot como una API mediante API Gateway.

## Estructura del Proyecto

```plaintext
ChatBot-V1/
├── lambda_functions/
│   ├── handle_intent.py
├── dynamodb/
│   ├── setup_table.py
├── api_gateway/
│   ├── setup_api.py
├── lex_bot/
│   ├── create_bot.py
├── README.md
├── requirements.txt
└── .gitignore
├── web_app/                      # Directorio para la aplicación web frontend
│   ├── index.html                # Página principal de la aplicación web
│   ├── style.css                 # Estilos CSS para la aplicación web
│   ├── app.js                    # Lógica del frontend en JavaScript