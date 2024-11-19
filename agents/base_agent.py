from openai import OpenAI
client = OpenAI()

def parse_messages(msgs):
    if not isinstance(msgs, list):
        raise ValueError("Input must be a list")

    transformed = []
    for i, message in enumerate(msgs):
        if not isinstance(message, dict) or 'text' not in message or 'isUserMessage' not in message:
            raise ValueError("Each message must have 'text' and 'isUserMessage' keys")

        if i == 0 and not message['isUserMessage']:
            role = "system"
        else:
            role = "assistant" if not message['isUserMessage'] else "user"

        transformed.append({
            "content": message["text"],
            "role": role
        })
    return transformed

def chat_bot(messages):
    transformed = parse_messages(messages)
    response = client.chat.completions.create(
    model="gpt-4",
    messages=transformed,
    max_tokens=150,
    temperature=0.7,
    )
    messages.append({'text': response.choices[0].message.content, 'isUserMessage': False})   
    return messages