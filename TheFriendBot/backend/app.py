from flask import Flask, request, jsonify
from flask_cors import CORS
from openai_client import OpenAIClient 

app = Flask(__name__)
CORS(app)

openai_client = OpenAIClient()

@app.route("/api/response", methods=["POST"])
def chat():
    try:
        data = request.json
        user_message = data.get("message", "")

        if not user_message:
            return jsonify({"error": "No message provided"}), 400

        response = openai_client.get_response(user_message)

        return jsonify({"response": response})

    except Exception as e:
        print("Error:", str(e))
        return jsonify({"error": "Internal Server Error"}), 500

@app.route("/api/responsetest", methods=["POST"])
def response():
    return jsonify({"response": "hello i'm here"})

if __name__ == "__main__":
    app.run(debug=True, port=8000)
