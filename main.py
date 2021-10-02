from flask import Flask,render_template,request,redirect,url_for

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html"),404

@app.route("/articles/<n>")
def articles(n:int):
    try:
        return render_template(f"article{n}.html")
    except:
        return render_template("404.html"),404
        
if __name__ == "__main__":
    app.run(debug=True)