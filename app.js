let password;
let userincludepass = {
    pass: function (password) { 
        (password.includes("ABC"));//پسورد حتما دارای عبارت خاص:ABC
        if(password.length<3){
            return("weak");
            /* تعداد حرف بزرگ کمتر از ۳ نیاز به استفاده ازکد ها اسکی داشت یا عبارت ها منظم که تدریس نشده بود
            پس شرط بررسی شده : شرط تعداد کاراکتر ها پسورد باید بیشتر از ۳باشد .*/
        }
       else if (password.includes("123")) {
            return("Invalid")
            //پسورد اگر دارای اعداد123 پشت سرهم بود  (invalid)
        }       
        else {
            console.log("Its Ok")
        } 
    }
}


console.log(userincludepass.pass("ABC123"));
console.log(userincludepass.pass("ABC1243"));
console.log(userincludepass.pass("AB"));
console.log(userincludepass.pass("A"));