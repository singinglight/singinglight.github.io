from flask import  Flask, render_template
from pathlib import Path
from flask_frozen import Freezer

app = Flask(__name__, template_folder='./templates')

@app.route('/')
def index():
   return render_template(str(Path('pages')) + '/index.html')

@app.route('/<page>')
def pages(page):
    return render_template(str(Path('pages')) + '/' + page.lower() + '.html')

if __name__ == '__main__':
    app.run(debug=True)
    freezer = Freezer(app)
    freezer.freeze()
