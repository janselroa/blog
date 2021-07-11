from flask import Flask,render_template

app = Flask(__name__)

@app.route('/')
def index():
	return render_template('index.html')


@app.route('/articulos')
def articles():
	return render_template('articulos.html')


app.run(debug=True,port=8000)