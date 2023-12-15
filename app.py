from flask import  Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
   return render_template('/index1.html')

@app.route('/<page>')
def pages(page):
    return render_template(page.lower() + '.html')

if __name__ == '__main__':
    app.run(debug=True)
