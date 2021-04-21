var url;
function upload() {
    //get your select image
    var image=document.getElementById("Thumb").files[0];
    //now get your image name
    var imageName=image.name;
    //firebase  storage reference
    //it is the path where yyour image will store
    var storageRef=firebase.storage().ref('images/'+imageName);
    //upload image to selected storage reference

    var uploadTask=storageRef.put(image);

    uploadTask.on('state_changed',function (snapshot) {
        //observe state change events such as progress , pause ,resume
        //get task progress by including the number of bytes uploaded and total
        //number of bytes
        var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
        console.log("upload is " + progress +" done");
        document.getElementById("up").innerHTML=Math.round(progress);
	    //document.getElementById("m").style.width = Math.round(progress);
        const progressBar = document.querySelector('progress');
        progressBar.setAttribute('value', progress-1);
    },function (error) {
        //handle error here
        console.log(error.message);
    },function () {
       //handle successful uploads on complete

        uploadTask.snapshot.ref.getDownloadURL().then(function (downlaodURL) {
            //get your upload image url here...
            //console.log(downlaodURL);
            //document.getElementById("url").innerHTML=downlaodURL;
            var x = document.getElementById("up");
            x.style.display = "none";
            var z = document.getElementById("m");
            z.style.display = "none";
		 var y = document.getElementById("ve");
       		 y.style.display = "block";

            url=downlaodURL;
        });
    });
}

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
   
	var Clink="https://naadyastrology.com";
	var CPh="9443564198";
	var Cname="naadyastrology";
	var wp="https://wa.me/+919443564198";

    var result = '%0AYour Name:   ' + strText1 + '%0AYour Date and time of Birth: ' + strText2 +'%0ACountry and Big City of Your Birth: ' + strText3+  '%0AYour Educational Qualification: ' + strText4+ '%0AWhat are you doing: ' + strText5 +'%0AExplain About Your Job/Business: ' + strText6+  '%0AWorking in which country: ' + strText7+ '%0AHow many times you married: ' + strText8 +'%0AWith which Wife/Husband you are living now: ' + strText9+  '%0APlease Explain about your Court case problem if you have: ' + strText10+'%0APlease Explain about your Health problems if you have:  ' + strText11 + '%0APlease Explain about your Loan problems if you have: ' + strText12 +'%0AFather Name: ' + strText13+  '%0AFather Alive or Not : ' + strText14+ '%0AFathers occupation: ' + strText15 +'%0AHow many times Father married: ' + strText16+  '%0AMothers Name: ' + strText17+ '%0AMother Alive or Not: ' + strText18 +'%0AMother Age: ' + strText19+  '%0AMothers occupation: ' + strText20+'%0AHow many times Mother married:  ' + strText21 + '%0AYour Husband or Wife Name: ' + strText22 +'%0AYour Husband or Wife Alive or Not: ' + strText23+  '%0AYour Husband or Wife Age: ' + strText24+ '%0AYour Husband or Wife Occupation: ' + strText25 +'%0AHow many times Your Wife/Husband got married: ' + strText26+  '%0AHow many times you got married: ' + strText27+ '%0AHow many Brothers you have and please specify younger or elder and they married or not: ' + strText28 +'%0AHow many Sisters you have and please specify younger or elder and they married or not: ' + strText29+  '%0AHow many Children you have and please specify elder to younger and they married or not and their education and job: ' + strText30+'%0AAbout what you what to know mainly:  ' + strText31 + '%0AYour Contact Number: ' + strText32 +'%0AYour WhatsApp Number: ' + strText33+  '%0APlease type here if you want to share something with us: ' + strText34+ '%0AThumb: ' + strText35 +'%0Aa: ' + strText36+  '%0Aa: ' + strText37+ '%0Aa: ' + strText38+'%0A'+url;
    var result1 = '<br/>Your Name:   ' + strText1 +
	'<br/>Your Date and time of Birth: ' + strText2 +
	'<br/>Country and Big City of Your Birth: ' + strText3+ 
	'<br/>Your Educational Qualification: ' + strText4+
	'<br/>What are you doing: ' + strText5 +
	'<br/>Explain About Your Job/Business: ' + strText6+
	'<br/>Working in which country: ' + strText7+ 
	'<br/>How many times you married: ' + strText8 +
	'<br/>With which Wife/Husband you are living now: ' + strText9+ 
	'<br/>Please Explain about your Court case problem if you have: ' + strText10+
	'<br/>Please Explain about your Health problems if you have:  ' + strText11 + 
	'<br/>Please Explain about your Loan problems if you have: ' + strText12 +'<br/>Father Name: ' + strText13+ 
	'<br/>Father Alive or Not : ' + strText14+
	'<br/>Father Age: ' + strText15+
	'<br/>Fathers occupation: ' + strText16 +
	'<br/>How many times Father married: ' + strText17+ 
	'<br/>Mothers Name: ' + strText18+ 
	'<br/>Mother Alive or Not: ' + strText19+
	'<br/>Mother Age: ' + strText20+ 
	'<br/>Mothers occupation: ' + strText21+
	'<br/>How many times Mother married:  ' + strText22 + 
	'<br/>Your Husband or Wife Name: ' + strText23 +
	'<br/>Your Husband or Wife Alive or Not: ' + strText24+
	'<br/>Your Husband or Wife Age: ' + strText25+
	'<br/>Your Husband or Wife Occupation: ' + strText26 +
	'<br/>How many times Your Wife/Husband got married: ' + strText27+
	'<br/>How many times you got married: ' + strText28+
	'<br/>How many Brothers you have and please specify younger or elder and they married or not: ' + strText29 +
	'<br/>How many Sisters you have and please specify younger or elder and they married or not: ' + strText30+  
	'<br/>How many Children you have and please specify elder to younger and they married or not and their education and job: ' + strText31+
	'<br/>Please type here if you want to share something with us: ' + strText32+
	'<br/>About what you what to know mainly:  ' + strText33 +
	'<br/>Your Contact Number: ' + strText34 +
	'<br/>WhatsApp Number: ' + strText35 +
	'<br/> Email Address: ' + strText36+ 
	'<br/> URL: ' + url+ 
	'<br/>Date And Time Of Appointment: ' + strText37+
	'<br/>Thumb Image Url: ' + strText38;
var y = document.getElementById("ve");
       		

    var finalMsg = encodeURI(result);
         document.getElementById("bookingForm").addEventListener("submit", (e) => {
    e.preventDefault();
    if(strText1==""||strText2==""||strText3==""||strText4==""||strText5==""||strText6==""||strText7==""||strText8==""||strText9==""||strText10==""||strText11==""||strText12==""||strText13==""||strText14==""||strText15==""||strText16==""||strText17==""||strText18==""||strText19==""||strText20==""||strText21==""||strText22==""||strText23==""||strText24==""||strText25==""||strText26==""||strText27==""||strText28==""||strText29==""||strText30==""||strText31==""||strText32==""||strText33==""||strText34==""||strText35==""||strText36==""||strText37==""||strText38==""||y.style.display === "none")
        {
        console.log('error');
	alert("Fill all details/Upload a file");
        }else
        {
		 Email.send({
                Host:"smtp.gmail.com",
                Username:'thereciprocalolutions.projects@gmail.com',
                Password:'cgenxthsgpwplxoy',
                To: 'thereciprocalsolutions@gmail.com',
                From: 'thereciprocalolutions.projects@gmail.com',
                Subject: 'New Booking '+strText1,
                Body:'The New Booking Details <br/>'+result1+'<br/> <img src='+url+' alt="thumb"> Get In Touch With Us!: 9123456789 <br/>Copyright ©2021 The Reciprocal Solutions. All rights reserved',
                }).then((message)=>alert("Your Details Share With TRS!!\nWe Will Get Touch In 24 Hours!"));
		//telegram
           // const request = new XMLHttpRequest();
		//const url = ''+result;
       // request.open("post", url); 
       // request.send();
        fetch("https://www.fast2sms.com/dev/bulk?authorization=tXGFnAr4LNYZM8Q9jwPVHxWdvs6eahl2qk5of7SzpRbOUEumITTnoiOFHqdCLhzJPgaxer2mpZ8UNEyf&sender_id=FSTSMS&message="+Clink+"/%0AContact No: "+CPh+"%0AHello "+strText1+",Thank you for contacting Naady Astrology. We will get back to you within 48 hours. Click here to chat on Whatsapp!"+wp+".&language=english&route=p&numbers="+strText34)
	
		.then(response=>{
			if(response.status==200){
				console.log("red");
				localStorage.setItem("result1", strText7);
				window.location.href = "bc.html";
			}
		})    			
        }


});
}       
