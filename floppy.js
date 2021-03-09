/** Draws a bunch of floppies on a canvas */
var flop_canvas;
var floppy_img;

window.addEventListener("resize", function () {
    //keep the canvas same size as window
    flop_canvas.width   = window.innerWidth;
    flop_canvas.height  = window.innerHeight;
})

window.addEventListener("DOMContentLoaded", function() {
    // on page load

    flop_canvas = document.createElement("canvas");
    floppy_img  = document.getElementById("floppy");
    document.body.appendChild(flop_canvas);

    flop_canvas.width   = document.body.clientWidth - 10;
    flop_canvas.height  = document.body.clientHeight - 10;

});

function click_button() {
    var size = 0;
    var size_in_kb = 0;

    size = parseInt(document.getElementById("size").value);

    if (size > 0) {
        //calculate how many floppies it is based on size
        
        size_measurement = document.getElementById("size_measurement").value;

        switch(size_measurement) {
            case "KB":
                size_in_kb = size;
                break;
            case "MB":
                size_in_kb = size * 1000;
                break;
            case "GB":
                size_in_kb = size * 1000 * 1000;
                break;
        }

    }

    var floppies = Math.ceil(size_in_kb / 1200);

    //window.alert(floppies);

    draw_floppies(floppies);
}

function draw_floppies(floppies) {
    var rndx;
    var rndy;
    var twod_context = flop_canvas.getContext("2d");

    //blank the canvas
    twod_context.clearRect(0, 0, flop_canvas.width, flop_canvas.height);

    for (i = 0; i < floppies; i++) {

        rndx = Math.floor((Math.random() * document.body.clientWidth - 10) + 1);
        rndy = Math.floor((Math.random() * document.body.clientHeight - 10) + 1);

        twod_context.drawImage(floppy_img, rndx, rndy, 30, 30)

    }

}
