// var width = 250; //150??
// var height = screen.height-100;
var width = 500; //150??
var height = 300;

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var resultPixels = new Array();
var sourcePixels = new Array();
var cnt = 1;
canvas.width = width;
canvas.height = height;

//array's length
resultPixels.length = width * height;
sourcePixels.length = width * height;

// initialization
for(n=0; n<width*height; n++){
    resultPixels[n] = 0;
    sourcePixels[n] = 0;
}

function update(){
    if(cnt >= 1500) cnt = 171;
    if(cnt % 450 == 0 || cnt == 100){
        // initialization
        for(n=0; n<width*height; n++){
            resultPixels[n] = 0;
            sourcePixels[n] = 0;
        }
        //出現ポイント
        sourcePixels[50 * width + Math.floor(Math.random() * 100 + 50)] = 5000;
    }
    var imageData = ctx.getImageData(0, 0, width, height);
    var pixels = imageData.data;
    var totalpixels;
    var totalvalue;
    var newvalue;

    for (var x=1; x<width-1; x++)
        for (var y=1; y<height-1; y++){
            totalvalue = 0;
            totalpixels = 4.0;

            totalvalue += sourcePixels[(y-1) * width + (x)];
            totalvalue += sourcePixels[(y+1) * width + (x)];
            totalvalue += sourcePixels[y * width + (x - 1)];
            totalvalue += sourcePixels[y * width + (x + 1)];
            totalvalue += sourcePixels[(y-1) * width + (x-1)];
            totalvalue += sourcePixels[(y-1) * width + (x+1)];
            totalvalue += sourcePixels[(y+1) * width + (x-1)];
            totalvalue += sourcePixels[(y+1) * width + (x+1)];

            totalvalue /= totalpixels;
            newvalue = totalvalue - resultPixels[y* width + x];
            newvalue = newvalue - newvalue/64.0;
            resultPixels[y* width + x]     = newvalue;
        }

    for(n=0; n<width*height; n++){
        // #009999
        pixels[n*4] = resultPixels[n] + 0; //r
        pixels[n*4 + 1] = resultPixels[n] + 153; //g
        pixels[n*4 + 2] = resultPixels[n] + 153; //b
        pixels[n*4 + 3] = 255; //white

        var temp = sourcePixels[n];
        sourcePixels[n] = resultPixels[n];
        resultPixels[n] = temp;
    }

    ctx.putImageData(imageData, 0, 0);
    cnt++;
}

setInterval(function(){update();}, 1000/30);
