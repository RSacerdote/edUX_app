from flask import Flask, jsonify, request
from flask_cors import CORS
import base_agent

app = Flask(__name__)

CORS(app)

@app.route("/api/message", methods=['POST'])
def data():
    try:
        messages = request.json
        if not isinstance(messages, list):
            return jsonify({"error": "Input should be a list of messages"}), 400
        
        for message in messages:
            if not isinstance(message, dict) or 'text' not in message or 'isUserMessage' not in message:
                return jsonify({"error": "Each message should have 'text' and 'isUserMessage' keys"}), 400

        messages = base_agent.chat_bot(messages)

        return jsonify(messages)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
