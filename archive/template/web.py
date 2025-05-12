from flask import Flask, render_template, send_from_directory

ip='localhost'

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/downloads')
def downloads():
    return render_template('downloads.html')


@app.route('/downloads/<filename>')
def download(filename):
    return send_from_directory(
        'uploads',  
        filename,   
        as_attachment=True  
    )


@app.route('/team')
def team():
    return render_template('team.html')

@app.route('/project')
def project():
    return render_template('project.html')

@app.route('/links')
def links():
    return render_template('links.html')

if __name__ == '__main__':
    app.run(host=ip, port=5000, debug=True)
