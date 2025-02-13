function resizeCanvas()
{
    var img = document.getElementsByClassName('img'); 
    var width = img.clientWidth;
    var height = img.clientHeight;

    var canvas = document.getElementsByClassName('canvas'); 
    canvas.style.width = width;
    canvas.style.height = height;
}