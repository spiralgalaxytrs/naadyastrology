function testVariable() {
    var strText1 = document.getElementById("name").value;
    var strText2 = document.getElementById("dob").value;
    var strText3 = document.getElementById("dobcity").value;
    var strText4 = document.getElementById("qualification").value;
    var strText5 = document.getElementById("work").value;
    var strText6 = document.getElementById("expalinwork").value;
    var strText7 = document.getElementById("workcountry").value;
    var strText8 = document.getElementById("marriedtimes").value;
    var strText9 = document.getElementById("living").value;
    var strText10 = document.getElementById("court").value;
    var strText11 = document.getElementById("health").value;
    var strText12 = document.getElementById("loan").value;
    var strText13 = document.getElementById("fname").value;
    var strText14 = document.getElementById("falive").value;
    var strText15 = document.getElementById("fage").value;
    var strText16 = document.getElementById("fwork").value;
    var strText17 = document.getElementById("fmarriedtimes").value;
    var strText18 = document.getElementById("mname").value;
    var strText19 = document.getElementById("malive").value;
    var strText20 = document.getElementById("mage").value;
    var strText21 = document.getElementById("mwork").value;
    var strText22 = document.getElementById("mmarriedtimes").value;
    var strText23 = document.getElementById("hwname").value;
    var strText24 = document.getElementById("hwalive").value;
    var strText25 = document.getElementById("hwage").value;
    var strText26 = document.getElementById("hwwork").value;
    var strText27 = document.getElementById("hwmarriedtimes").value;
    var strText28 = document.getElementById("hwmarriedtime").value;
    var strText29 = document.getElementById("siblingsd").value;
    var strText30 = document.getElementById("siblingse").value;
    var strText31 = document.getElementById("child").value;
    var strText32 = document.getElementById("Message").value;
    var strText33 = document.getElementById("problem").value;
    var strText34 = document.getElementById("cnumber").value;
    var strText35 = document.getElementById("wnumber").value;
    var strText36 = document.getElementById("email").value;
    var strText37 = document.getElementById("appointmenttime").value;
    var strText38 = document.getElementById("Thumb").value;
   
	var Clink="https://xyz.com";
	var CPh="99123456788";
	var Cname="xyz";



    var result = '%0Aa:  ' + strText1 + '%0Aa: ' + strText2 +'%0Aa: ' + strText3+  '%0Aa: ' + strText4+ '%0Aa: ' + strText5 +'%0Aa: ' + strText6+  '%0Aa: ' + strText7+ '%0Aa: ' + strText8 +'%0Aa: ' + strText9+  '%0Aa: ' + strText10+'%0Aa:  ' + strText11 + '%0Aa: ' + strText12 +'%0Aa: ' + strText13+  '%0Aa: ' + strText14+ '%0Aa: ' + strText15 +'%0Aa: ' + strText16+  '%0Aa: ' + strText17+ '%0Aa: ' + strText18 +'%0Aa: ' + strText19+  '%0Aa: ' + strText20+'%0Aa:  ' + strText21 + '%0Aa: ' + strText22 +'%0Aa: ' + strText23+  '%0Aa: ' + strText24+ '%0Aa: ' + strText25 +'%0Aa: ' + strText26+  '%0Aa: ' + strText27+ '%0Aa: ' + strText28 +'%0Aa: ' + strText29+  '%0Aa: ' + strText30+'%0Aa:  ' + strText31 + '%0Aa: ' + strText32 +'%0Aa: ' + strText33+  '%0Aa: ' + strText34+ '%0Aa: ' + strText35 +'%0Aa: ' + strText36+  '%0Aa: ' + strText37+ '%0Aa: ' + strText38;
    var result1 = '<br/>a:  ' + strText1 + '<br/>a: ' + strText2 +'<br/>a: ' + strText3+  '<br/>a: ' + strText4+ '<br/>a: ' + strText5 +'<br/>a: ' + strText6+  '<br/>a: ' + strText7+ '<br/>a: ' + strText8 +'<br/>a: ' + strText9+  '<br/>a: ' + strText10+'<br/>a:  ' + strText11 + '<br/>a: ' + strText12 +'<br/>a: ' + strText13+  '<br/>a: ' + strText14+ '<br/>a: ' + strText15 +'<br/>a: ' + strText16+  '<br/>a: ' + strText17+ '<br/>a: ' + strText18 +'<br/>a: ' + strText19+  '<br/>a: ' + strText20+'<br/>a:  ' + strText21 + '<br/>a: ' + strText22 +'<br/>a: ' + strText23+  '<br/>a: ' + strText24+ '<br/>a: ' + strText25 +'<br/>a: ' + strText26+  '<br/>a: ' + strText27+ '<br/>a: ' + strText28 +'<br/>a: ' + strText29+  '<br/>a: ' + strText30+'<br/>a:  ' + strText31 + '<br/>a: ' + strText32 +'<br/>a: ' + strText33+  '<br/>a: ' + strText34+ '<br/>a: ' + strText35 +'<br/>a: ' + strText36+  '<br/>a: ' + strText37+ '<br/>a: ' + strText38;
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
		myFunction();
		//telegram
           // const request = new XMLHttpRequest();
		//const url = ''+result;
       // request.open("post", url); 
       // request.send();
        fetch("https://www.fast2sms.com/dev/bulk?authorization=tXGFnAr4LNYZM8Q9jwPVHxWdvs6eahl2qk5of7SzpRbOUEumITTnoiOFHqdCLhzJPgaxer2mpZ8UNEyf&sender_id=FSTSMS&message="+Clink+"/%0AContact No: "+CPh+"%0AHello "+strText32+",%0AThank you for Booking with "+Cname+".Your "+strText2+" Booking has been Confirmed on "+strText4+".&language=english&route=p&numbers="+strText34)
		.then(response=>{
			if(response.status==200){
				console.log("red");
				localStorage.setItem("result1", strText7);
				window.location.href = "bookingSuccess.html";
			}
		})    			
        }
		     function myFunction() 
                {
                Email.send({
                Host:"smtp.gmail.com",
                Username:'thereciprocalolutions.projects@gmail.com',
                Password:'cgenxthsgpwplxoy',
                To: 'thereciprocalsolutions@gmail.com',
                From: 'thereciprocalolutions.projects@gmail.com',
                Subject: 'New Booking '+strText1,
                Body:'The New Booking Details <br/>'+result1+'<br/> Get In Touch With Us!: 9123456789 <br/>Copyright ©2021 The Reciprocal Solutions. All rights reserved',
                }).then((message)=>alert("Your Details Share With TRS!!<br>We Will Get Touch In 24 Hours!"));
                }

});
}       

        

