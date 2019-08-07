//adds filter to image

var img = new SimpleImage("rodger.png");

for (var pixel of img.values()){
    if (pixel.getX() <= img.getWidth()/3) {
        pixel.setRed(255);
    }
    else {
        if (pixel.getX() <= (img.getWidth() * 2 / 3)) {
        pixel.setGreen(255);
        }
        else {
        pixel.setBlue(255);
        }
    }
}

print(img);
