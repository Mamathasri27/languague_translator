from flask import Flask, render_template, request
from googletrans import Translator

app = Flask(__name__)

# Initialize Translator
translator = Translator()

@app.route("/", methods=["GET", "POST"])
def translate():
    translated_text = None
    if request.method == "POST":
        text = request.form["text"]
        src_lang = request.form["src_lang"]
        tgt_lang = request.form["tgt_lang"]

        # Perform translation
        try:
            translated_text = translator.translate(text, src=src_lang, dest=tgt_lang).text
        except Exception as e:
            translated_text = "Error: " + str(e)

    return render_template("index.html", translated_text=translated_text)

if __name__ == "__main__":
    app.run(debug=True)
