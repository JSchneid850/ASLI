Purpose:
To understand Convolutional Neural Networks and how they can be used to classify images in real time utilizing tensorflow.

Goal: 
Utilizing tensorflow to build a model that can classify the images into the 29 classes.
Once the model is trained and tested, we will use it to classify real-world images.

Strech Goal:
Taking the classification of the images and using it to create a real-time application which can interpret and record ASL scentences.

Dataset from https://www.kaggle.com/datasets/grassknoted/asl-alphabet?resource=download

From the dataset website:

The training data set contains 87,000 images which are 200x200 pixels. 
There are 29 classes, of which 26 are for the letters A-Z and 3 classes for SPACE, DELETE and NOTHING.
These 3 classes are very helpful in real-time applications, and classification.
The test data set contains a mere 29 images, to encourage the use of real-world test images.

Steps: 
    1. Importing the dataset
    2. Preprocessing the dataset
    3. Building the model
        i. Use a convolutional neural net to filter the images
        ii. Use a Dense layer to classify the images
        iii. Use a softmax layer to output the probabilities of the images
    4. Make predictions based on the model
    5. Training the model

Neural Network Architecture:
    Input layer: 200x200 pixels x 3 channels (RGB)
    Convolutional layer: 3 filters, 3x3 kernel, ReLU activation
    Dense layer: 128 neurons, ReLU activation
    Softmax layer: 29 probabilities for each class
    Output layer: 1 of 29 classes (A-Z, SPACE, DELETE, NOTHING)
