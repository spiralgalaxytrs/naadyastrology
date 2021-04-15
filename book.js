function testVariable() {
	
    var strText  = document.getElementById("").value;
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

var finalMsg = encodeURI(result);
         document.getElementById("bookingForm").addEventListener("submit", (e) => {
e.preventDefault();
if(strText==""||strText1==""||strText2==""||strText3==""||strText4==""||strText5==""||strText==""||strText1==""||strText2==""||strText3==""||strText4==""||strText6==""||strText==""||strText1==""||strText2==""||strText3==""||strText4==""||strText6==""||strText==""||strText1==""||strText2==""||strText3==""||strText4==""||strText6==""||strText==""||strText1==""||strText2==""||strText3==""||strText4==""||strText6==""||strText==""||strText1==""||strText2==""||strText3==""||strText4==""||strText6==""||strText4==""||strText6=="")
        {
        console.log('error');
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
   

