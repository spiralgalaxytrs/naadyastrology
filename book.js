function testVariable() {
    var strText1 = document.getElementById("").value;
    var strText2 = document.getElementById("").value;
    var strText3 = document.getElementById("").value;
    var strText4 = document.getElementById("").value;
    var strText5 = document.getElementById("").value;
    var strText6 = document.getElementById("").value;
    var strText7 = document.getElementById("").value;
    var strText8 = document.getElementById("").value;
    var strText9 = document.getElementById("").value;
    var strText10 = document.getElementById("").value;
    var strText11 = document.getElementById("").value;
    var strText12 = document.getElementById("").value;
    var strText13 = document.getElementById("").value;
    var strText14 = document.getElementById("").value;
    var strText15 = document.getElementById("").value;
    var strText16 = document.getElementById("").value;
    var strText17 = document.getElementById("").value;
    var strText18 = document.getElementById("").value;
    var strText19 = document.getElementById("").value;
    var strText20 = document.getElementById("").value;
    var strText21 = document.getElementById("").value;
    var strText22 = document.getElementById("").value;
    var strText23 = document.getElementById("").value;
    var strText24 = document.getElementById("").value;
    var strText25 = document.getElementById("").value;
    var strText26 = document.getElementById("").value;
    var strText27 = document.getElementById("").value;
    var strText28 = document.getElementById("").value;
    var strText29 = document.getElementById("").value;
    var strText30 = document.getElementById("").value;
    var strText31 = document.getElementById("").value;
    var strText32 = document.getElementById("").value;
    var strText33 = document.getElementById("").value;
    var strText34 = document.getElementById("").value;
    var strText35 = document.getElementById("").value;
    var strText36 = document.getElementById("").value;
    var strText37 = document.getElementById("").value;
    var strText38 = document.getElementById("").value;
   
	var Clink="https://xyz.com";
	var CPh="99123456788";
	var Cname="xyz";



    var result = 'a:  ' + strText + '%0Aa: ' + strText1 +'%0Aa: ' + strText2+  '%0Aa: ' + strText3;
myFunction();
var finalMsg = encodeURI(result);
         document.getElementById("bookingForm").addEventListener("submit", (e) => {
e.preventDefault();
if(strText1==""||strText2==""||strText3==""||strText4==""||strText5==""||strText6==""||strText7==""||strText8==""||strText9==""||strText10==""||strText11==""||strText12==""||strText13==""||strText14==""||strText15==""||strText16==""||strText17==""||strText18==""||strText19==""||strText20==""||strText21==""||strText22==""||strText23==""||strText24==""||strText25==""||strText26==""||strText27==""||strText28==""||strText29==""||strText30==""||strText31==""||strText32==""||strText33==""||strText34==""||strText35==""||strText36==""||strText37==""||strText38=="")
        {
        console.log('error');
	alert("Fill all details");
        }else
        {
            const request = new XMLHttpRequest();
		const url = ''+result;
        request.open("post", url);
        request.send();
        fetch("https://www.fast2sms.com/dev/bulk?authorization=tXGFnAr4LNYZM8Q9jwPVHxWdvs6eahl2qk5of7SzpRbOUEumITTnoiOFHqdCLhzJPgaxer2mpZ8UNEyf&sender_id=FSTSMS&message="+Clink+"/%0AContact No: "+CPh+"%0AHello "+strText+",%0AThank you for Booking with "+Cname+".Your "+strText2+" Booking has been Confirmed on "+strText4+".&language=english&route=p&numbers="+strText1)
		.then(response=>{
			if(response.status==200){
				console.log("red");
				localStorage.setItem("result1", strText7);
				window.location.href = "bookingSuccess.html";
			}
		})    			
        }

});
}       
    function myFunction() 
                {
                Email.send({
                Host:"smtp.gmail.com",
                Username:'thereciprocalolutions.projects@gmail.com',
                Password:'cgenxthsgpwplxoy',
                To: 'thereciprocalsolutions@gmail.com',
                From: 'thereciprocalolutions.projects@gmail.com',
                Subject: 'New Booking '+strText,
                Body:'The New Booking Details <br/>'+result+'<br/> Get In Touch With Us!: 9123456789 <br/>Copyright ©2021 The Reciprocal Solutions. All rights reserved',
                }).then((message)=>alert("Your Details Share With TRS!!<br>We Will Get Touch In 24 Hours!"));
                }
        }); 
                    }

