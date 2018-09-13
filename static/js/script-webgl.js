"use strict";

function resizeVideo(){
    var h = $(document).height();
    var w = $(document).width();
    var centerBox = $('.center-box');
    var size = '70';
    if(h > w){
        centerBox.css({
            'width' : size + 'vw',
            'height' : size + 'vw',
        })
    }
    else {
        centerBox.css({
            'width' : size + 'vh',
            'height' : size + 'vh',
        })
    }
}

var gl = twgl.getWebGLContext(document.getElementById("c"));
var programInfo = twgl.createProgramInfo(gl, ["vs", "fs"]);

var textures = twgl.createTextures(gl, {
	onemore: { src: "static/media/img/onemore.jpg" },
  yellow: { src: "static/media/img/onemore-yellow.jpg" },
  fg: { src: "static/media/img/onemore-fg.jpg" },
  water: { src: "static/media/img/wiggle.png" },
  clouds: { src: "static/media/img/noise.jpg" },
}, function(){
    $('.container').addClass('shown');
      requestAnimationFrame(render);
  });

var arrays = {
  position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0],
};
var bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);

var uniforms = {
    time: 0,
    resolution: [gl.canvas.width, gl.canvas.height],

    u_waterMap: textures.water,
    u_textureBg: textures.onemore,
    u_textureShine: textures.fg,
    u_textureFg: textures.yellow,

    phase_tex: textures.clouds,
    tex: textures.water,

    u_minRefraction: .12,
    u_brightness: 1,
    u_alphaMultiply: 1,
    u_alphaSubtract: 0,
    u_refractionDelta: 1,

    u_renderShine: true,
    u_renderShadow: false, 

    u_resolution: [620, 620],
    u_textureRatio: 1,

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
$(window).resize();

function render(time) {
  twgl.resizeCanvasToDisplaySize(gl.canvas);
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  var shadowAmt = 10 * (1 + Math.sin(time / 1000.0) ) / 2.0 + 4.0;

  uniforms['time'] += 0.03;

  var canvas = $('#c');
  uniforms['u_resolution'] = [canvas.height(), canvas.width()];
  uniforms['u_textureRatio'] = canvas.height() / canvas.width();
  uniforms['u_corner'] = [canvas.offset().top / $(window).height(), canvas.offset().left / $(window).width()]


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
