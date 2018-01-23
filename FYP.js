alert("HAHA");

    var running = false;
    var data1 = [];
    var data2 = [];
    var data3 = [];
    var data4 = [];
    var data5 = [];
    var data6 = [];
    var data7 = [];
    var data8 = [];
    var data9 = [];
     
    var data01 = [];
    var data02 = [];
    var data03 = [];
    var data04 = [];
    var data05 = [];
    var data06 = [];
    var data07 = [];
    var data08 = [];
    var data09 = [];
    var guidata = function(){
      this.start =function(){
       onStart();
      }
      this.stop =function(){
       onStop();
      }
    }

    var dataset;
    var dataset2;

    var totalPoints = 100;
    var updateInterval = 1000;
    var now = new Date().getTime();
    var emotion1 = [0,0,0,0,0,0,0,0,0];
    var emotion2 = [0,0,0,0,0,0,0,0,0];
    function setemotion(x,i) {
      emotion1[i] = x;
    }
    function setexpression(x,i) {
      emotion2[i] = x;
    }

    function GetData() {
        data1.shift();
        data2.shift();
        data3.shift();
        data4.shift();
        data5.shift();
        data6.shift();
        data7.shift();
        data8.shift();   
        data9.shift();   
        data01.shift();
        data02.shift();
        data03.shift();
        data04.shift();
        data05.shift();
        data06.shift();
        data07.shift();
        data08.shift();   
        data09.shift();   

        while (data1.length < totalPoints) {
          for(var i = 0; i<=8; i++){
            if(emotion1[i]<=20)
              emotion1[i]=0;
            if(emotion2[i]<=20)
              emotion2[i]=0;  

          }
            data1.push([now += updateInterval, emotion1[0]]);
            data2.push([now += updateInterval, emotion1[1]]);
            data3.push([now += updateInterval, emotion1[2]]);
            data4.push([now += updateInterval, emotion1[3]]);
            data5.push([now += updateInterval, emotion1[4]]);
            data6.push([now += updateInterval, emotion1[5]]);
            data7.push([now += updateInterval, emotion1[6]]);
            data8.push([now += updateInterval, emotion1[7]]);
            data9.push([now += updateInterval, emotion1[8]]);
            data01.push([now += updateInterval, emotion2[0]]);
            data02.push([now += updateInterval, emotion2[1]]);
            data03.push([now += updateInterval, emotion2[2]]);
            data04.push([now += updateInterval, emotion2[3]]);
            data05.push([now += updateInterval, emotion2[4]]);
            data06.push([now += updateInterval, emotion2[5]]);
            data07.push([now += updateInterval, emotion2[6]]);
            data08.push([now += updateInterval, emotion2[7]]);
            data09.push([now += updateInterval, emotion2[8]]);
        }
    }

    var options = {
        series: {
            lines: {
                show: true,
                lineWidth: 1.2,
                fill: false
            }
        },
        xaxis: {
            mode: "time",
            tickSize: [300, "second"],
            tickFormatter: function(v, axis) {
                var date = new Date(v);

                if (date.getSeconds() % 20 == 0) {
                    var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
                    var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
                    var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

                    return hours + ":" + minutes + ":" + seconds;
                } else {
                    return "";
                }
            },
            axisLabel: "Time",
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 12,
            axisLabelFontFamily: 'Verdana, Arial',
            axisLabelPadding: 10
        },
        yaxis: {
            min: 0,
            max: 100,
            tickSize: 5,
            tickFormatter: function(v, axis) {
                if (v % 10 == 0) {
                    return v + "%";
                } else {
                    return "";
                }
            },
            axisLabel: "Emotions Value",
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 12,
            axisLabelFontFamily: 'Verdana, Arial',
            axisLabelPadding: 6
        },
        legend: {
            position: "nw",
            labelBoxBorderColor: "#fff"
        },
        grid: {
            hoverable: true,
            backgroundColor: "#000000",
            tickColor: "#000000"
        }
    };
    var options2 = {
        series: {
            lines: {
                show: true,
                lineWidth: 1.2,
                fill: false
            }
        },
        xaxis: {
            mode: "time",
            tickSize: [300, "second"],
            tickFormatter: function(v, axis) {
                var date = new Date(v);

                if (date.getSeconds() % 20 == 0) {
                    var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
                    var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
                    var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

                    return hours + ":" + minutes + ":" + seconds;
                } else {
                    return "";
                }
            },
            axisLabel: "Time",
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 12,
            axisLabelFontFamily: 'Verdana, Arial',
            axisLabelPadding: 10
        },
        yaxis: {
            min: 0,
            max: 100,
            tickSize: 5,
            tickFormatter: function(v, axis) {
                if (v % 10 == 0) {
                    return v + "%";
                } else {
                    return "";
                }
            },
            axisLabel: "Expressions Value",
            axisLabelUseCanvas: true,
            axisLabelFontSizePixels: 12,
            axisLabelFontFamily: 'Verdana, Arial',
            axisLabelPadding: 6
        },
        legend: {
             position: "nw",
            labelBoxBorderColor: "#FFF"
        },
        grid: {
            hoverable: true,
            backgroundColor: "#000000",
            tickColor: "#000000"
        }
    };

    $(document).ready(function() {
        GetData();

        dataset = [{
            label: "JOY",
            data: data1,
            color: "#00FF00"
        },{ 
            label: "SADNESS",
            data: data2,
            color: "#FFFFFF"
        },{ 
            label: "DISGUST",
            data: data3,
            color: "#ff00ff"
        }//,{ 
         //   label: "CONTEMPT",
         //   data: data4,
         //   color: "#0000ff"
        //}
        ,{ 
            label: "ANGER",
            data: data5,
            color: "#FF0000"
        },{ 
            label: "FEAR",
            data: data6,
            color: "#ffff00"
        },{ 
            label: "SURPRISE",
            data: data7,
            color: "#0000ff"
        }
        /*,{ 
            label: "VALENCE",
            data: data8,
            color: "#ca6f1e"
        },{ 
            label: "ENGAGEMENT",
            data: data9,
            color: "#626567"
        }
        */];
        dataset2 = [{
            label: "smile",
            data: data01,
            color: "#00FF00"
        },
        // ,{ 
        //     label: "innerBrowRaise",
        //     data: data02,
        //     color: "#FF0000"
        // },
        { 
            label: "browRaise",
            data: data03,
            color: "#1e8449"
        }
         ,{ 
            label: "browFurrow",
             data: data04,
             color: "#0000ff"
         }    
        // { 
        //     label: "noseWrinkle",
        //     data: data05,
        //     color: "#a93226"
        // },{ 
        //     label: "upperLipRaise",
        //     data: data06,
        //     color: "#4a235a"
        // }
        ,{ 
            label: "mouthOpen",
            data: data07,
            color: "#85c1e9"
        // },{ 
        //     label: "attention",
        //     data: data08,
        //     color: "#ca6f1e"
        },{ 
            label: "eyeWiden",
            data: data09,
            color: "#626567"
        }];


        $.plot($("#flot-placeholder1"), dataset, options);
        $.plot($("#flot-placeholder2"), dataset2, options2);


        function update() {
            GetData();

            $.plot($("#flot-placeholder1"), dataset, options)
            $.plot($("#flot-placeholder2"), dataset2, options2);
            setTimeout(update, updateInterval);
        }

        update();
    });














      // SDK Needs to create video and canvas nodes in the DOM in order to function
      // Here we are adding those nodes a predefined div.
      var width = 600;
      var height = 480;
      var faceMode = affdex.FaceDetectorMode.LARGE_FACES;
        var dps = []; // dataPoints
      //Construct a CameraDetector and specify the image width / height and
      var divRoot = $("#affdex_elements")[0]; //face detector mode.
      var detector = new affdex.CameraDetector(divRoot, width, height, faceMode);

      //Enable detection of all Expressions, Emotions and Emojis classifiers.
      detector.detectAllEmotions();
      detector.detectAllExpressions();
      detector.detectAllEmojis();
      detector.detectAllAppearance();

      //Add a callback to notify when the detector is initialized and ready for runing.
      detector.addEventListener("onInitializeSuccess", function() {
        log('#logs', "The detector reports initialized");
        //Display canvas instead of video feed because we want to draw the feature points on it
        $("#face_video_canvas").css("display", "block");
        $("#face_video").css("display", "none");
      });

      function log(node_name, msg) {
        $(node_name).append("<span>" + msg + "</span><br />")
      }
      var guiData = new guidata();
      var gui = new dat.GUI();
      gui.domElement.id = 'gui';
      gui.add(guiData,'start').name("Start");
      gui.add(guiData,'stop').name("Stop");


      //function executes when Start button is pushed.
      function onStart() {
        if (detector && !detector.isRunning) {
          running = true;
          $("#logs").html("");
          detector.start();
          
        }
        log('#logs', "Clicked the start button");
      }

      //function executes when the Stop button is pushed.
      function onStop() {
        log('#logs', "Clicked the stop button");
        if (detector && detector.isRunning) {
          running = false;
          detector.removeEventListener();
          detector.stop();

        }
      };

      //function executes when the Reset button is pushed.
      function onReset() {
        log('#logs', "Clicked the reset button");
        if (detector && detector.isRunning) {
          detector.reset();

          $('#results').html("");
        }
      };

      //Add a callback to notify when camera access is allowed
      detector.addEventListener("onWebcamConnectSuccess", function() {
        log('#logs', "Webcam access allowed");
      });

      //Add a callback to notify when camera access is denied
      detector.addEventListener("onWebcamConnectFailure", function() {
        log('#logs', "webcam denied");
        console.log("Webcam access denied");
      });

      //Add a callback to notify when detector is stopped
      detector.addEventListener("onStopSuccess", function() {
        log('#logs', "The detector reports stopped");
        $("#results").html("");
      });


      //Add a callback to receive the results from processing an image.
      //The faces object contains the list of the faces detected in an image.
      //Faces object contains probabilities for all the different expressions, emotions and appearance metrics
      detector.addEventListener("onImageResultsSuccess", function(faces, image, timestamp) {
        console.log("Phnch gya hai");
        $('#results').html("");
        log('#results', "Timestamp: " + timestamp.toFixed(2));
        log('#results', "Number of faces found: " + faces.length);
        if (faces.length > 0) {
        if (!running) {
          setemotion(0,0);
          setemotion(0,1);
          setemotion(0,2);
          setemotion(0,3);
          setemotion(0,4);
          setemotion(0,5);
          setemotion(0,6);
          setemotion(0,7);
          setemotion(0,8);
            
          setexpression(0,0);
          setexpression(0,1);
          setexpression(0,2);
          setexpression(0,3);
          setexpression(0,4);
          setexpression(0,5);
          setexpression(0,6);
          setexpression(0,7);
          setexpression(0,8);
        
        }
        else{
          setemotion(faces[0]["emotions"]["joy"],0);
          setemotion(faces[0]["emotions"]["sadness"],1);
          setemotion(faces[0]["emotions"]["disgust"],2);
          setemotion(faces[0]["emotions"]["contempt"],3);
          setemotion(faces[0]["emotions"]["anger"],4);
          setemotion(faces[0]["emotions"]["fear"],5);
          setemotion(faces[0]["emotions"]["surprise"],6);
          setemotion(faces[0]["emotions"]["valence"],7);
          setemotion(faces[0]["emotions"]["ENGAGEMENT"],8);
          setexpression(faces[0]["expressions"]["smile"],0);
          setexpression(faces[0]["expressions"]["innerBrowRaise"],1);
          setexpression(faces[0]["expressions"]["browRaise"],2);
          setexpression(faces[0]["expressions"]["browFurrow"],3);
          setexpression(faces[0]["expressions"]["noseWrinkle"],4);
          setexpression(faces[0]["expressions"]["upperLipRaise"],5);
          setexpression(faces[0]["expressions"]["mouthOpen"],6);
          setexpression(faces[0]["expressions"]["attention"],7);
          setexpression(faces[0]["expressions"]["eyeWiden"],8);
        }
          log('#results', "Appearance: " + JSON.stringify(faces[0].appearance));
          log('#results', "Emotions: " + JSON.stringify(faces[0].emotions, function(key, val) {
            return val.toFixed ? Number(val.toFixed(0)) : val;
          }));
          log('#results', "Expressions: " + JSON.stringify(faces[0].expressions, function(key, val) {
            return val.toFixed ? Number(val.toFixed(0)) : val;
          }));
          log('#results', "Emoji: " + faces[0].emojis.dominantEmoji);
          drawFeaturePoints(image, faces[0].featurePoints);
          
        }
      });

      //Draw the detected facial feature points on the image
      function drawFeaturePoints(img, featurePoints) {

        var contxt = $('#face_video_canvas')[0].getContext('2d');

        var hRatio = contxt.canvas.width / img.width;
        var vRatio = contxt.canvas.height / img.height;
        var ratio = Math.min(hRatio, vRatio);

        contxt.strokeStyle = "#FFFFFF";
        for (var id in featurePoints) {
          contxt.beginPath();
          contxt.arc(featurePoints[id].x,
            featurePoints[id].y, 2, 0, 2 * Math.PI);
          contxt.stroke();

        }
      }
      

