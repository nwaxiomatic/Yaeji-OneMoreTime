"use strict";

$('.yaeji').click(function(){
  window.location.href = redirectURL + '/tour';
});

$('.listen-link').click(function(){
  window.location.href = 'http://smarturl.it/yaeji-onemore';
});

var isMobile = false; //initiate as false
    // device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
  || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

function resizeVideo(){
    var h = window.innerHeight;
    var w = window.innerWidth;
    var canvas = $('#c');
    var centerImgT = $('.center-image-top');
    var centerImgB = $('.center-image-bottom');
    var centerImg = $('.center-image-mobile');
    var koreanOnemore = $('.korean-onemore');
    var body = $('body');

    var mobileText = $('.mobile-listen');

    if(h > 1220 / 2880 / .8 * w){
      $('.video-cover img').css({
        'width': 'auto',
        'height': (window.screen.availHeight * .8).toString() + 'px',
      });
    }
    else{
      $('.video-cover img').css({
        'width': '100vw',
        'height': 'auto',
      });
    }

    if(isMobile){
      var centerSizeNum = 100;
    var centerSize = centerSizeNum.toString();
    var centerSizeHalf = (centerSizeNum/2).toString();
    var sizeNum = 45;
        var size = sizeNum.toString();
        var ratio = h/w;

      if(h > w){
        var amountT = (sizeNum*w*.4/100).toString();
        var amountL = ((1 - sizeNum/100 + .1)*w).toString();
        canvas.css({
            'height' : size + 'vw',
            'width' : (sizeNum * 9/5).toString() + 'vw',
            'top' : amountT + 'px',
            'left' : amountL + 'px',
        })
        mobileText.css({
            'width': '50vw',
            'height': '25vw',
            'bottom': '2em',
            'left': '2em',
            'font-size': '1.2em',
        })
      }
        else {
          var amountT = (sizeNum*h*.4/100).toString();
        var amountL = (w - (sizeNum/100 - .1)*h).toString();
            canvas.css({
                'top' : amountT + 'px',
            'left' : amountL + 'px',
                'height' : size + 'vh',
                'width' : (sizeNum * 9/5).toString() + 'vh',
            })
            mobileText.css({
            'width': '30vw',
            'height': '15vw',
            'bottom': '1em',
            'left': '1em',
            'font-size': '.8em',
        })
        }
      }
    else{
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
            'top' : amountT + 'px',
            'left' : '78vw',
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
  }

    var canvas = $('#c');
  uniforms['u_resolution'] = [canvas.width(), canvas.height()];
  uniforms['u_textureRatio'] = canvas.width() / canvas.height();
  uniforms['u_corner'] = [canvas.offset().top / h, canvas.offset().left / w]

  var canvas2 = $('#c-play');
  uniforms2['u_resolution'] = [canvas2.width(), canvas2.height()];
  uniforms2['u_textureRatio'] = canvas2.width() / canvas2.height();
  uniforms2['u_corner'] = [canvas2.offset().top / h, canvas2.offset().left / w]
          
          body.css({ 'height': h, 'width': w });
      $('.container').css({ 'height': h, 'width': w });
      centerImg.css({ 'height': h });
}


// Setup Stuff

var gl = twgl.getWebGLContext(document.getElementById("c"));
var programInfo = twgl.createProgramInfo(gl, ["vs", "fs"]);

var gl2 = twgl.getWebGLContext(document.getElementById("c-play"));
var programInfo2 = twgl.createProgramInfo(gl2, ["vs", "fs"]);

var imgCount = 0;
var imgWait = isMobile ? 2 : 3;

var texturesLoaded = 0;
var videoLoaded = false;

function showPage(){
  if(imgCount==imgWait && videoLoaded && texturesLoaded==2){
    setTimeout(function(){
      $('.loader').remove();
      $('.buttons').toggleClass('shown');
      $('body').removeClass('no-scroll');
    }, 2000);

    setTimeout(function(){
      window.scrollTo(0, 0);
    }, 0);

    $('body').addClass('black-bg');

    var playButton = $("#c-play").click(function() {
      player.playVideo();
      $('.video-cover').css({'z-index':-100});
      $('.video-cover').toggleClass('shown');
      $('#video').toggleClass('shown');
      $('.buttons').toggleClass('shown');
    });

    $(window).resize();
      $('.loading').addClass('hidden');
      setTimeout(function(){
        $('.container').addClass('shown');
        setTimeout(function(){
          $('.loading').remove();
        },900);
          requestAnimationFrame(render);
      }, 1000);
  }
}

function setUpDesktop(){
  $('.mobile').remove();
    var imgT = new Image();
    var imgB = new Image();
    var imgV = new Image();
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
    imgV.onload = function() { 
      imgCount ++;
      $('#cover-img').attr('src', imgV.src);
      showPage();
    }
    imgT.src = "static/media/img/yaeji-cover-small-top.jpg"; 
    imgB.src = "static/media/img/yaeji-cover-small.jpg";    
    imgV.src = "static/media/img/cover cropped.jpg"  
}

function setUpMobile(){
  $('.desktop').remove();
  $('#c').css({'mix-blend-mode': 'difference'})
    var imgB = new Image();
    var imgV = new Image();
    imgB.onload = function() { 
      imgCount ++;
      $('.center-image-mobile').css({
        'background-image': 'url(' + imgB.src + ')',
        'background-position': 'center',
        'background-size':'cover',
      })
      showPage();
    }
    imgV.onload = function() { 
      imgCount ++;
      $('#cover-img').attr('src', imgV.src);
      showPage();
    }
    imgB.src = "static/media/img/yaeji-cover-small.jpg";   
    imgV.src = "static/media/img/cover cropped.jpg"   
}

$(document).ready(function(){
  if(isMobile){
    setUpMobile();
  }
  else {
    setUpDesktop();
  }
});


var textures = twgl.createTextures(gl, {
  yellow: { src: "static/media/img/slimebg.jpg" },
  water: { src: "static/media/img/slime.png" },
  waterR: { src: "static/media/img/slime2.png" },
  clouds: { src: "static/media/img/noise.jpg" },
}, function(){
  texturesLoaded += 1;
  showPage();
}
);

var textures2 = twgl.createTextures(gl2, {
  yellow: { src: "static/media/img/slimebg.jpg" },
  water: { src: "static/media/img/play.png" },
  waterR: { src: "static/media/img/play2.png" },
  clouds: { src: "static/media/img/noise.jpg" },
}, function(){
  texturesLoaded += 1;
  showPage();
}
);

var player;

function onYouTubePlayerAPIReady() {
  player = new YT.Player('video', {
  events: {
    'onReady': onPlayerReady
  }
  });
}

function onPlayerReady(event) {
  videoLoaded = true;
  showPage(event);
  
}

var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


// WebGL Stuff
var arrays = {
  position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0],
};
var bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);
var bufferInfo2 = twgl.createBufferInfoFromArrays(gl2, arrays);

var uniforms = {
    time: 0,
    resolution: [gl.canvas.width, gl.canvas.height],

    u_waterMap: textures.water,
    u_waterRMap: textures.water,
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
    u_isMobile: isMobile,

    u_resolution: [900, 500],
    u_textureRatio: .4,

    u_mouse: [0,1],
    u_corner: [.2, .2],
    u_pixelRatio:window.devicePixelRatio,
    u_wigglescale:0.012,
    u_shineVal:0.35,

  };

var uniforms2 = {
    time: 0,
    resolution: [gl2.canvas.width, gl2.canvas.height],

    u_waterMap: textures2.water,
    u_waterRMap: textures2.water,
    u_textureBg: textures2.yellow,
    u_textureFg: textures2.yellow,

    phase_tex: textures2.clouds,
    tex: textures2.water,

    u_minRefraction: .05,
    u_brightness: 1,
    u_alphaMultiply: 1,
    u_alphaSubtract: 0,
    u_refractionDelta: 1,

    u_renderShine: true,
    u_renderShadow: false, 
    u_isMobile: isMobile,

    u_resolution: [302, 302],
    u_textureRatio: 1,

    u_mouse: [0,1],
    u_corner: [.2, .2],
    u_pixelRatio:window.devicePixelRatio,
    u_wigglescale:0.03,
    u_shineVal:.8,

  };

$( window ).resize(function() {
  resizeVideo();

  lineCanvas.width  = window.innerWidth*window.devicePixelRatio;
  lineCanvas.height = window.innerHeight*window.devicePixelRatio;
});

window.addEventListener('orientationchange', function(){
  setTimeout(resizeVideo, 150);
});

function setWebGLMouse(event){
  var canvas = $('#c');
  var canvasPlay = $('#c-play');
  uniforms['u_mouse'] = [
    (event.pageY - window.innerHeight - canvas.position().top)/canvas.height(), 
    (event.pageX - canvas.position().left)/canvas.width()
  ];
  uniforms2['u_mouse'] = [
    (event.pageY - canvasPlay.position().top)/canvasPlay.height(), 
    (event.pageX - canvasPlay.position().left)/canvasPlay.width()
  ];
}

$( window ).mousemove(setWebGLMouse);
$( window ).on("mousewheel DOMMouseScroll", setWebGLMouse);

// $(window).resize(resizeVideo);

function render(time) {
  twgl.resizeCanvasToDisplaySize(gl.canvas);
  twgl.resizeCanvasToDisplaySize(gl2.canvas);
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
  gl2.viewport(0, 0, gl2.canvas.width, gl2.canvas.height);

  var shadowAmt = 10 * (1 + Math.sin(time / 1000.0) ) / 2.0 + 4.0;

  uniforms['time'] += 0.03;
  uniforms2['time'] += 0.03;


  gl.useProgram(programInfo.program);
  twgl.setBuffersAndAttributes(gl, programInfo, bufferInfo);
  twgl.setUniforms(programInfo, uniforms);
  twgl.drawBufferInfo(gl, bufferInfo);

  gl2.useProgram(programInfo2.program);
  twgl.setBuffersAndAttributes(gl2, programInfo2, bufferInfo2);
  twgl.setUniforms(programInfo2, uniforms2);
  twgl.drawBufferInfo(gl2, bufferInfo2);

  requestAnimationFrame(render);

  if(!isMobile){
  clearLine(lineCanvas);
  drawRandomBezier(uniforms['time']);
}
}
