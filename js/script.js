// inputs (ورودی ها) 

const inp_Name = document.getElementById("input_fullName");
const inp_age = document.getElementById("input_age");
const inp_city = document.getElementById("input_city");
const inp_job = document.getElementById("input_job");
const creatbtn = document.getElementById("creadcard");

// card values (مقادیر کارت ها) 

const user_Name = document.getElementById("namefull");
const user_Age = document.getElementById("age");
const user_Badge = document.getElementById("badge");
const user_City = document.getElementById("city");
const user_Job = document.getElementById("job");
const error_box = document.getElementById("error-box"); // error box (محل نمایش ارور)
// const close_error = document.getElementById("close-error");
const error_text = document.getElementById("error-text");// (متن ارور)
const avatar_box = document.getElementById("avatar-box");

// نتیجه (کل کارت)
const card = document.getElementById("main_card");

const close_btn = document.getElementById("closbtn"); // close-btn

// چک کردن دکمه باتن
if(close_btn !== null){
    close_btn.addEventListener("click", ()=>{
        error_box.classList.remove('is-show');
        error_box.classList.add('is-hidden');
    })
}else{
    console.log('Not Difunde Button !');
}


//  On Clicked (موقعی که کلیک شد *محل شروع عملیات* هست) 

creatbtn.addEventListener("click", function () {
  
    // فراخانی تابع اعتبارسنجی 
    const validat_function = ValidatForm();
  
  // بررسی اعتبار سنجی
    if (validat_function == true){ // درصورتی که درست بود

    // گرفتن ورودی ها و حذف حروف اضافه ان 
    const nameval = inp_Name.value.trim();
    const ageval = inp_age.value.trim();
    const cityval = inp_city.value.trim();
    const jobval = inp_job.value.trim();

    // تبدیل کردن به سن به عدد
    const age_badge_number = Number(ageval);


    // مشخص کردن وضعیت سنی
    let age_badge = "";

    if (age_badge_number >= 7 && age_badge_number <= 10){
        age_badge = "کودک";
    }else if (age_badge_number >= 10 && age_badge_number <= 18){
        age_badge = "نوجوان";
    }else{
        age_badge = "بزرگسال";
    }

        
    // نمایش نتیجه در خروجی
    user_Name.textContent = nameval;
    user_Age.textContent = ageval;
    user_City.textContent = cityval;
    user_Job.textContent = jobval;

    user_Badge.textContent = age_badge;
    // گرفتن اولین حروف از نام و نام خانوادگی
    const avatar_value = nameval.charAt(0).toUpperCase();
    avatar_box.textContent = avatar_value;

        card.classList.add('show_card ');
        card.classList.remove('hide-card');
    } else { // درصورتی که غلت بود
        card.classList.add('hide-card');
        card.classList.remove('show_card ');
        console.log("error!");

        // return false ;
    }

});


function ValidatForm(){
    
    // let error = false;

    // Input Values ( بیرون کشیدن مقادیر ورودی ها )
    const NameValue = inp_Name.value.trim();
    const AgeValue = inp_age.value.trim();
    const CityValue = inp_city.value.trim();
    const JobValue = inp_job.value.trim();


    if (NameValue == "" || AgeValue == "" || CityValue == "" || JobValue == ""){
        error_box.classList.remove('is-hidden');
        error_box.classList.add('is-show');
        error_text.textContent = 'لطفا تمام فیل هارا پر کنین.';
        
        // error = true;

        return false ;
    }

    const AgeNumber = Number(AgeValue);

    if (AgeNumber > 85 || AgeNumber < 7){
        error_box.classList.remove('is-hidden');
        error_box.classList.add('is-show');
        error_text.textContent = 'سن باید بین 7 تا 85 سال باشد.';
        // error=true;
        return false;
    }
    
        error_box.classList.add('is-hidden');
        error_box.classList.remove('is-show');


        return true;
}
