var milisec=0;
var seconds=0;
var txtseconds= '';
var minutes=0;
var txtminutes = '';
var divid = '';
var tmp = '';
var tmpfinal = '';
var timeoutHandle = null;

function startTimer(obj_f) {
		if(timeoutHandle){
	    clearTimeout(timeoutHandle);
  	  timeoutHandle = null;
			}
		minutes = obj_f.minutes.value;
		seconds = obj_f.seconds.value;
		minutes = minutes.replace(/[^0-9]/, "");
		seconds = seconds.replace(/[^0-9]/, "");
		document.f.minutes.value = minutes;
		document.f.seconds.value = seconds;
		if (minutes == '') {
			minutes = 0;
			}	
		if (seconds == '') {
			seconds = 0;
			}
		display();
		}

function display() {

 if (milisec<=0){
    milisec=9;
    seconds-=1;
 		}
 if (seconds<=-1){
   milisec=9;
   minutes-=1;
   seconds=59;
 	}

 if(minutes<0 || (seconds == 0 && minutes == 0)){
    document.getElementById('t1').innerHTML='<timer><div id="last2min">DONE</div></timer>';
    }
 else { 
    milisec-=1;
		txtminutes = minutes + ':';
		txtseconds = seconds;

    if (seconds < 10) {
			txtseconds = '0' + seconds;
      }

    if (seconds < 60 && seconds > 30 && minutes == 0) {
			txtseconds = seconds + "." + milisec;
			txtminutes = '';
      }
	
		tmp = txtminutes + txtseconds;
		tmpfinal = tmp;

    if (minutes < 2) {
        tmpfinal = '<div id="last2min">' + tmp + '</div>';
        }

    if (seconds < 30 && minutes == 0) {
        if (milisec < 5) {
							tmpfinal = '<div id="last2min" style="visibility: hidden">' + tmp + '</div>';
					}
        }
    document.getElementById('t1').innerHTML='<timer>' + tmpfinal + '</timer>';
    timeoutHandle = setTimeout("display()",100);
	}
}
