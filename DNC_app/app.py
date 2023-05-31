from flask import Flask, render_template, request, jsonify, send_from_directory, url_for
import os

app = Flask(__name__)

# Route to handle image generation
@app.route('/generate', methods=['POST'])
def generate_images():
    # Get slider values from the POST request
    slider1_val = int(request.form['slider1'])
    slider2_val = int(request.form['slider2'])
    slider3_val = int(request.form['slider3'])
    slider4_val = int(request.form['slider4'])

    # Generate the file name based on the slider values
    x_value = ((slider1_val / 5) * 2) - 1
    y_value = ((slider2_val / 5) * 2) - 1
    z_value = ((5 - slider3_val) / 5 * 2) - 1
    t_value = ((slider4_val / 5) * 2) - 1
    filename = f'x{x_value:.2f}_y{y_value:.2f}_z{z_value:.2f}_t{t_value:.2f}.png'

    # Create the file path using the `url_for` function
    file_path = os.path.join(app.static_folder, 'out', filename)
    image = url_for('static', filename='out/' + filename)

    # Check if the image file exists
    if os.path.exists(file_path):
        # Return the image file path as a JSON response
        return jsonify({'image': image})
    else:
        # Return an error message if the image file does not exist
        return jsonify({'filename': filename})




# Route to render the index.html template
@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
