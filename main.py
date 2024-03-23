from flask import Flask, render_template
import openai
from config import key

app = Flask(__name__)

# Set your OpenAI API key
openai.api_key = key

@app.route('/')
def index():
    # Use OpenAI's functions directly, such as generating text
    response = openai.Completion.create(
        engine="gpt-3.5-turbo-instruct",  # Use the text-davinci-003 model instead of davinci
        prompt="a white siamese cat",
        max_tokens=50,
        n=1,
    )

    # Check if response is a list
    if isinstance(response, list):
        # Handle the case where response is a list
        return "Unexpected response format: List"

    # Check if response is a dictionary
    elif isinstance(response, dict):
        # Check if response contains the 'choices' key
        if 'choices' in response:
            choices = response['choices']
            # Check if choices is a list and not empty
            if isinstance(choices, list) and choices:
                # Access the first element of the choices list
                first_item = choices[0]
                # Check if the first item is a dictionary and contains 'text' key
                if isinstance(first_item, dict) and 'text' in first_item:
                    # Extract the generated text
                    generated_text = first_item['text']
                    # Render a template that displays the generated text
                    return render_template('index.html', generated_text=generated_text)
        # If text extraction fails or if the response is neither a list nor a dictionary, return an appropriate error message
        return 'Generated text not found'

    # Handle the case where response is neither a list nor a dictionary
    else:
        return "Unexpected response format: Neither list nor dictionary"

if __name__ == '__main__':
    # Run the Flask app
    app.run(host='0.0.0.0', port=80)
