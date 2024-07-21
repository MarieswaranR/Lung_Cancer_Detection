from keras.models import load_model
# Assuming 'model' is your Keras model

loaded_model = load_model('my_model.h5')
loaded_model.compile(
    optimizer='adam',
    loss='categorical_crossentropy',
    metrics=['accuracy']
)
