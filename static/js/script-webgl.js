"use strict";

function resizeVideo(){
    var h = window.innerHeight;
    var w = window.innerWidth;
    var canvas = $('#c');
    var centerImgT = $('.center-image-top');
    var centerImgB = $('.center-image-bottom');
    var koreanOnemore = $('.korean-onemore');
    var body = $('body');

    var centerSizeNum = 70;
    var centerSize = centerSizeNum.toString();
    var centerSizeHalf = (centerSizeNum/2).toString();
    var sizeNum = 45;
        var size = sizeNum.toString();
        var ratio = h/w;

    if(h > w){
      bezierBaseVals[4] = .95;
      var squareDim = centerSizeNum / 100 * w;
        var centerH = h / 2;
        var amountT = ( (h - squareDim) / 2 + .03*w).toString();
        var amountB = ( (h + squareDim) / 2 -.04*w).toString();
        canvas.css({
            'width' : size + 'vw',
            'height' : (sizeNum * 5/9).toString() + 'vw',
        })
        canvas.css({
            'top' : amountT + 'px',
            'left' : '80vw',
        })
        centerImgT.css({
            'width' : centerSize + 'vw',
            'height' : centerSizeHalf + 'vw',
        })
        centerImgB.css({
            'width' : centerSize + 'vw',
            'height' : centerSize + 'vw',
        })
        koreanOnemore.css({
            'left' : '12vw',
            'top' : amountB + 'px',
            'width': '35vw',
            'height': 'auto',
        })

    }
    else {
      bezierBaseVals[4] = .88;
        var squareDim = centerSizeNum / 100 * h;
        var centerW = w / 2;
        var amountL = ( (w - squareDim) / 2 - .1*h).toString();
        var amountR = ( (w + squareDim) / 2 -.05*h).toString();
        canvas.css({
            'top' : '18vh',
            'left' : amountR + 'px',
            'width' : size + 'vh',
            'height' : (sizeNum * 5/9).toString() + 'vh',
        })
        centerImgT.css({
            'width' : centerSize + 'vh',
            'height' : centerSizeHalf + 'vh',
        })
        centerImgB.css({
            'width' : centerSize + 'vh',
            'height' : centerSize + 'vh',
        })
        koreanOnemore.css({
            'top' : '79vh',
            'left' : amountL + 'px',
            'width': 'auto',
            'height': '10vh',
        })
    }

    var canvas = $('#c');
  uniforms['u_resolution'] = [canvas.width(), canvas.height()];
  uniforms['u_textureRatio'] = canvas.width() / canvas.height();
  uniforms['u_corner'] = [canvas.offset().top / $(window).height(), canvas.offset().left / $(window).width()]
}

var gl = twgl.getWebGLContext(document.getElementById("c"));
var programInfo = twgl.createProgramInfo(gl, ["vs", "fs"]);

var imgCount = 0;
var imgWait = 2;

function showPage(){
  if(imgCount==imgWait){
    $(window).resize();
      $('.container').addClass('shown');
      requestAnimationFrame(render);
  }
}


var textures = twgl.createTextures(gl, {
  yellow: { src: "static/media/img/slimebg.jpg" },
  water: { src: "static/media/img/slime2.png" },
  clouds: { src: "static/media/img/noise.jpg" },
}, function(){
    var imgT = new Image();
    var imgB = new Image();
    imgT.onload = function() { 
      imgCount ++;
      $('.center-image-top').attr('src', imgT.src);
      showPage();
    }
    imgB.onload = function() { 
      imgCount ++;
      $('.center-image-bottom').attr('src', imgB.src);
      showPage();
    }
    imgT.src = "static/media/img/yaeji-cover-small-top.jpg"; 
    imgB.src = "static/media/img/yaeji-cover-small.jpg";      
  });

var arrays = {
  position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0],
};
var bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);

var uniforms = {
    time: 0,
    resolution: [gl.canvas.width, gl.canvas.height],

    u_waterMap: textures.water,
    u_textureBg: textures.yellow,
    u_textureFg: textures.yellow,

    phase_tex: textures.clouds,
    tex: textures.water,

    u_minRefraction: .05,
    u_brightness: 1,
    u_alphaMultiply: 1,
    u_alphaSubtract: 0,
    u_refractionDelta: 1,

    u_renderShine: true,
    u_renderShadow: false, 

    u_resolution: [900, 500],
    u_textureRatio: .4,

    u_mouse: [.5,.5],
    u_corner: [.2, .2],

  };

$( window ).resize(function() {
  resizeVideo();

  lineCanvas.width  = window.innerWidth*window.devicePixelRatio;
  lineCanvas.height = window.innerHeight*window.devicePixelRatio;
});

$( window ).mousemove(function(event) {
  var canvas = $('#c');
  uniforms['u_mouse'] = [
    (event.pageY - canvas.position().top)/canvas.height(), 
    (event.pageX - canvas.position().left)/canvas.width()
  ];
});

// $(window).resize(resizeVideo);

function render(time) {
  twgl.resizeCanvasToDisplaySize(gl.canvas);
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  var shadowAmt = 10 * (1 + Math.sin(time / 1000.0) ) / 2.0 + 4.0;

  uniforms['time'] += 0.03;


  gl.useProgram(programInfo.program);
  twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
  twgl.setUniforms(programInfo, uniforms);
  twgl.drawBufferInfo(gl, bufferInfo);

  // gl2.useProgram(programInfo2.program);
  // twgl.setBuffersAndAttributes(gl2, programInfo2, bufferInfo2);
  // twgl.setUniforms(programInfo2, uniforms2);
  // twgl.drawBufferInfo(gl2, bufferInfo2);

  requestAnimationFrame(render);


  clearLine(lineCanvas);
  drawRandomBezier(uniforms['time']);
}
