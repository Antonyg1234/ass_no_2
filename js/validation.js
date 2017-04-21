
function validateEmail(email) {
    var re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return re.test(email);
}


$(document).ready(function(){

    $('#firstname').blur(function(){
        var username = $(this).val();
        if (username.trim() == "") {
            $('#dis').slideDown().html("Enter Firstname");
            $(this).css({"border-color": "red"});

        }else if ( /[^a-zA-Z]/.test( username ) ){
            $('#dis').slideDown().html("Only Alphabets");
            $(this).css({"border-color": "red"});
        }
        else
        {
            $('#dis').hide();
            $(this).css({"border-color": "green"});
        }
    });
    $('#lastname').blur(function(){
        var lastName = $(this).val();
        if (lastName.trim() == "") {
            $('#dis1').slideDown().html("Enter Lastname");
            $(this).css({"border-color": "red"});
        }else if ( /[^a-zA-Z]/.test( lastName ) ){
            $('#dis1').slideDown().html("Only Alphabets");
            $(this).css({"border-color": "red"});
        }
        else
        {
            $('#dis1').hide();
            $(this).css({"border-color": "green"});
        }
    });
    $('#phone').blur(function(){
        var cPhone = $(this).val();
        if(cPhone.trim()=="")
        {
            $('#dis2').slideDown().html("Enter PhoneNo.");
            $("#phone").css({"border-color": "red"});
            _flag = false;
        }

        else if(cPhone.length != 10 || isNaN(cPhone))
        {
            $('#dis2').slideDown().html("Enter 10 digit valid Phone no.");
            $("#phone").css({"border-color": "red"});
            _flag = false;
        }
        else
        {
            $('#dis2').hide();
            $("#phone").css({"border-color": "green"});
        }

    });
    $('#office').blur(function(){
        var oPhone = $(this).val();
        if(oPhone.trim()=="")
        {
            $('#dis3').slideDown().html("Enter OfficeNo.");
            $("#office").css({"border-color": "red"});
            _flag = false;
        }

        else if(isNaN(oPhone))
        {
            $('#dis3').slideDown().html("Only digits allowed");
            $("#office").css({"border-color": "red"});
            _flag = false;
        }
        else
        {
            $('#dis3').hide();
            $("#office").css({"border-color": "green"});
        }

    });
    $('#email').blur(function(){
        var eMail = $(this).val();
        if(eMail.trim()=="")
        {
            $('#dis4').slideDown().html("Enter Email Id");
            $("#email").css({"border-color": "red"});
            _flag = false;
        }
        else if(!validateEmail(eMail))
        {
            $('#dis4').slideDown().html("Not a valid Email Id");
            $("#email").css({"border-color": "red"});
            _flag = false;
        }
        else
        {
            $('#dis4').hide();
            $("#email").css({"border-color": "green"});
        }
    });
    $('#password').blur(function(){
        var pass = $(this).val();
        if(pass == "")
        {
            $('#dis5').slideDown().html("Enter Password");
            $("#password").css({"border-color": "red"});
            _flag = false;
        }
        else if(pass.length<8 || pass.length>12)
        {
            $('#dis5').slideDown().html("Range should be between 8 to 12 charachers, only Alphanumeric characters, No Special characters");
            $("#password").css({"border-color": "red"});
            _flag = false;
        }
        else if(/[^a-zA-Z0-9]/.test(pass))
        {
            $('#dis5').slideDown().html("Only Alphanumeric is allowed");
            $("#password").css({"border-color": "red"});
            _flag = false;
        }
        else
        {
            $('#dis5').hide();
            $("#password").css({"border-color": "green"});
        }

    });
    $('#confirm_password').blur(function(){
        var cPass = $(this).val();
        var pass = $('#password').val();
        if(cPass == "")
        {
            $('#dis6').slideDown().html("Enter Confirm Password");
            $("#confirm_password").css({"border-color": "red"});
            _flag = false;
        }
        else if(cPass!= pass)
        {
            $('#dis6').slideDown().html("Password & Confirm Passowrd not matching");
            $("#confirm_password").css({"border-color": "red"});
            _flag = false;
        }
        else
        {
            $('#dis6').hide();
            $("#confirm_password").css({"border-color": "green"});
        }
    });
    $('#txtarea').blur(function(){
        var textArea = $(this).val();
        var age = $('#rage').val();
        var rad = $('input[name=radio]:checked').val();
        if(textArea=="")
        {
            $('#dis9').slideDown().html("Write About You");
            $("#txtarea").css({"border-color": "red"});
            _flag = false;
        }
        else
        {
            $('#dis9').hide();
            $("#txtarea").css({"border-color": "green"});
        }if(age=="")
        {
            $('#dis7').slideDown().html("Select your DOB");
            //$("#rage").css({"border-color": "red"});
            _flag = false;
        }
        else
        {
            $('#dis7').hide();
            $("#rage").css({"border-color": "green"});
        }

        if(rad!=="M" && rad!=="F")
        {
            $('#dis8').slideDown().html("Select your Gender");
            console.log(rad);

            _flag = false;
        }
        else
        {
            $('#dis8').hide();
        }

    });
    $('#submitbox').click(function() {

        var username = $('#firstname').val();
        var lastName = $('#lastname').val();
        var cPhone = $('#phone').val();
        var oPhone = $('#office').val();
        var eMail = $('#email').val();
        var pass = $('#password').val();
        var cPass = $('#confirm_password').val();
        var age = $('#rage').val();
        var rad = $('input[name=radio]:checked').val();
        var textArea = $('#txtarea').val();

        var _flag = true;
        var searchIDs = $("input[name=checkboxhobby]:checked").map(function(){
            return $(this).val();
        });



       if (username.trim() == "") {
            $('#dis').slideDown().html("Enter Firstname");
            $("#firstname").css({"border-color": "red"});
            _flag = false;
        }
        else
        {
            $('#dis').hide();
            $("#firstname").css({"border-color": "green"});
        }
        if(lastName.trim()=="")
        {
            $('#dis1').slideDown().html("Enter Lastname");
            $("#lastname").css({"border-color": "red"});
            _flag = false;
        }
        else
        {
            $('#dis1').hide();
            $("#lastname").css({"border-color": "green"});
        }
        if(cPhone.trim()=="")
        {
            $('#dis2').slideDown().html("Enter PhoneNo.");
            $("#phone").css({"border-color": "red"});
            _flag = false;
        }

        else if(cPhone.length != 10 || isNaN(cPhone))
        {
            $('#dis2').slideDown().html("Enter 10 digit valid Phone no.");
            $("#phone").css({"border-color": "red"});
            _flag = false;
        }
        else
        {
            $('#dis2').hide();
            $("#phone").css({"border-color": "green"});
        }
        if(oPhone.trim()=="")
        {
            $('#dis3').slideDown().html("Enter OfficeNo.");
            $("#office").css({"border-color": "red"});
            _flag = false;
        }

        else if(isNaN(oPhone))
        {
            $('#dis3').slideDown().html("Only digits allowed");
            $("#office").css({"border-color": "red"});
            _flag = false;
        }
        else
        {
            $('#dis3').hide();
            $("#office").css({"border-color": "green"});
        }
        if(eMail.trim()=="")
        {
            $('#dis4').slideDown().html("Enter Email Id");
            $("#email").css({"border-color": "red"});
            _flag = false;
        }
        else if(!validateEmail(eMail))
        {
            $('#dis4').slideDown().html("Not a valid Email Id");
            $("#email").css({"border-color": "red"});
            _flag = false;
        }
        else
        {
            $('#dis4').hide();
            $("#email").css({"border-color": "green"});
        }
        if(pass == "")
        {
            $('#dis5').slideDown().html("Enter Password");
            $("#password").css({"border-color": "red"});
            _flag = false;
        }
        else if(pass.length<8 || pass.length>12)
        {
           $('#dis5').slideDown().html("Range should be between 8 to 12 charachers, only Alphanumeric characters, No Special characters");
            $("#password").css({"border-color": "red"});
            _flag = false;
        }
        else if(/[^a-zA-Z0-9]/.test(pass))
        {
            $('#dis5').slideDown().html("Only Alphanumeric is allowed");
            $("#password").css({"border-color": "red"});
            _flag = false;
        }
        else
        {
            $('#dis5').hide();
            $("#password").css({"border-color": "green"});
        }

        if(cPass == "")
        {
            $('#dis6').slideDown().html("Enter Confirm Password");
            $("#confirm_password").css({"border-color": "red"});
            _flag = false;
        }
        else if(cPass!= pass)
        {
            $('#dis6').slideDown().html("Password & Confirm Passowrd not matching");
            $("#confirm_password").css({"border-color": "red"});
            _flag = false;
        }
        else
        {
            $('#dis6').hide();
            $("#confirm_password").css({"border-color": "green"});
        }

        if(age=="")
        {
            $('#dis7').slideDown().html("Select your DOB");
            //$("#rage").css({"border-color": "red"});
            _flag = false;
        }
        else
        {
            $('#dis7').hide();
            $("#rage").css({"border-color": "green"});
        }

        if(rad!=="M" && rad!=="F")
        {
            $('#dis8').slideDown().html("Select your Gender");
            console.log(rad);

            _flag = false;
        }
        else
        {
            $('#dis8').hide();
        }

        /*if(searchIDs.length <= 0)
        {
            $('#dis10').slideDown().html("Select anyone Interest");
            _flag = false;
        }
        else
        {
            $('#dis10').hide();
            $("#txtarea").css({"border-color": "green"});
        }*/

        if(textArea=="")
        {
            $('#dis9').slideDown().html("Write About You");
            $("#txtarea").css({"border-color": "red"});
            _flag = false;
        }
        else
        {
            $('#dis9').hide();
            $("#txtarea").css({"border-color": "green"});
        }

        if(!_flag){
            return false;
        }
    });

    $("select").change(function(){
        var bday = $('#day').val()
        var bmonth = $('#month').val()
        var byear = $('#year').val()
        var d = new Date();
        var cday = d.getDate();
        var cmonth = d.getMonth();
        var cyear = d.getFullYear();

        cmonth++;

        if (cday < bday) {
            cmonth = cmonth - 1;
        }
        if (cmonth < bmonth) {
            cyear = cyear - 1;
            cmonth = cmonth + 12;
            var month = cmonth - bmonth;
           var year = cyear - byear;
        }
        else {
            month = cmonth - bmonth;
            year = cyear - byear;
        }
        var age = year + month / 100;
        document.getElementById("rage").value = age;
    });


});
