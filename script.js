window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0.8);
})

var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var a3 = document.getElementById("a3");

var about_btn1 = document.getElementById("about_btn1");
var about_btn2 = document.getElementById("about_btn2");
var about_btn3 = document.getElementById("about_btn3");

function open_a1() {
    a1.style.transform = "translateX(0%)";
    a2.style.transform = "translateX(100%)";
    a3.style.transform = "translateX(100%)";

    about_btn1.style.color = "white";
    about_btn2.style.color = "grey";
    about_btn3.style.color = "grey";

}

function open_a2() {
    a1.style.transform = "translateX(100%)";
    a2.style.transform = "translateX(0%)";
    a3.style.transform = "translateX(100%)";

    about_btn1.style.color = "grey";
    about_btn2.style.color = "white";
    about_btn3.style.color = "grey";

}

function open_a3() {
    a1.style.transform = "translateX(100%)";
    a2.style.transform = "translateX(100%)";
    a3.style.transform =  "translateX(0%)";

    about_btn1.style.color = "grey";
    about_btn2.style.color = "grey";
    about_btn3.style.color = "white";

}

var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
// var p4 = document.getElementById("p4");

var project_btn1 = document.getElementById("project_btn1");
var project_btn2 = document.getElementById("project_btn2");
var project_btn3 = document.getElementById("project_btn3");
// var project_btn4 = document.getElementById("project_btn4");

function open_p1() {
    p1.style.transform = "translateX(0%)";
    p2.style.transform = "translateX(100%)";
    p3.style.transform = "translateX(100%)";
    // p4.style.transform = "translateX(100%)";

    project_btn1.style.color = "black";
    project_btn2.style.color = "grey";
    project_btn3.style.color = "grey";
    // project_btn4.style.color = "grey";
    
    project_btn1.style.borderBottom = "2px solid black";
    project_btn2.style.borderBottom = "0px solid black";
    project_btn3.style.borderBottom = "0px solid black";
    // project_btn4.style.borderBottom = "0px solid black";
}

function open_p2() {
    p1.style.transform = "translateX(100%)";
    p2.style.transform = "translateX(0%)";
    p3.style.transform = "translateX(100%)";
    // p4.style.transform = "translateX(100%)";

    project_btn1.style.color = "grey";
    project_btn2.style.color = "black";
    project_btn3.style.color = "grey";
    // project_btn4.style.color = "grey";

    project_btn1.style.borderBottom = "0px solid black";
    project_btn2.style.borderBottom = "2px solid black";
    project_btn3.style.borderBottom = "0px solid black";
    // project_btn4.style.borderBottom = "0px solid black";
}

function open_p3() {
    p1.style.transform = "translateX(100%)";
    p2.style.transform = "translateX(100%)";
    p3.style.transform = "translateX(0%)";
    // p4.style.transform = "translateX(100%)";

    project_btn1.style.color = "grey";
    project_btn2.style.color = "grey";
    project_btn3.style.color = "black";
    // project_btn4.style.color = "grey";

    project_btn1.style.borderBottom = "0px solid black";
    project_btn2.style.borderBottom = "0px solid black";
    project_btn3.style.borderBottom = "2px solid black";
    // project_btn4.style.borderBottom = "0px solid black";
}


function open_p4() {
    p1.style.transform = "translateX(100%)";
    p2.style.transform = "translateX(100%)";
    p3.style.transform = "translateX(100%)";
    // p4.style.transform = "translateX(0%)";

    project_btn1.style.color = "grey";
    project_btn2.style.color = "grey";
    project_btn3.style.color = "grey";
    // project_btn4.style.color = "black";

    project_btn1.style.borderBottom = "0px solid black";
    project_btn2.style.borderBottom = "0px solid black";
    project_btn3.style.borderBottom = "0px solid black";
    // project_btn4.style.borderBottom = "2px solid black";
}

var w1 = document.getElementById("w1");
var w2 = document.getElementById("w2");
var w3 = document.getElementById("w3");
var w4 = document.getElementById("w4");

var work_btn1 = document.getElementById("work_btn1");
var work_btn2 = document.getElementById("work_btn2");
var work_btn3 = document.getElementById("work_btn3");
var work_btn4 = document.getElementById("work_btn4");


function open_w1() {

    w1.style.transform = "translateX(0%)";
    w2.style.transform = "translateX(100%)";
    w3.style.transform = "translateX(100%)";
    w4.style.transform = "translateX(100%)";

    work_btn1.style.color = "black";
    work_btn2.style.color = "grey";
    work_btn3.style.color = "grey";
    work_btn4.style.color = "grey";

    work_btn1.style.borderBottom = "2px solid black";
    work_btn2.style.borderBottom = "0px solid black";
    work_btn3.style.borderBottom = "0px solid black";
    work_btn4.style.borderBottom = "0px solid black";

}

function open_w2() {

    w1.style.transform = "translateX(100%)";
    w2.style.transform = "translateX(0%)";
    w3.style.transform = "translateX(100%)";
    w4.style.transform = "translateX(100%)";

    work_btn1.style.color = "grey";
    work_btn2.style.color = "black";
    work_btn3.style.color = "grey";
    work_btn4.style.color = "grey";

    work_btn1.style.borderBottom = "0px solid black";
    work_btn2.style.borderBottom = "2px solid black";
    work_btn3.style.borderBottom = "0px solid black";
    work_btn4.style.borderBottom = "0px solid black";
}

function open_w3() {

    w1.style.transform = "translateX(100%)";
    w2.style.transform = "translateX(100%)";
    w3.style.transform = "translateX(0%)";
    w4.style.transform = "translateX(100%)";

    work_btn1.style.color = "grey";
    work_btn2.style.color = "grey";
    work_btn3.style.color = "black";
    work_btn4.style.color = "grey";

    work_btn1.style.borderBottom = "0px solid black";
    work_btn2.style.borderBottom = "0px solid black";
    work_btn3.style.borderBottom = "2px solid black";
    work_btn4.style.borderBottom = "0px solid black";

}

function open_w4() {

    w1.style.transform = "translateX(100%)";
    w2.style.transform = "translateX(100%)";
    w3.style.transform = "translateX(100%)";
    w4.style.transform = "translateX(0%)";

    work_btn1.style.color = "grey";
    work_btn2.style.color = "grey";
    work_btn3.style.color = "grey";
    work_btn4.style.color = "black";

    work_btn1.style.borderBottom = "0px solid black";
    work_btn2.style.borderBottom = "0px solid black";
    work_btn3.style.borderBottom = "0px solid black";
    work_btn4.style.borderBottom = "2px solid black";

}



var pw1 = document.getElementById("pw1");
var pw2 = document.getElementById("pw2");
var pw3 = document.getElementById("pw3");


var personal_btn1 = document.getElementById("personal_btn1");
var personal_btn2 = document.getElementById("personal_btn2");
var personal_btn3 = document.getElementById("personal_btn3");


function open_pw1() {

    pw1.style.transform = "translateX(0%)";
    pw2.style.transform = "translateX(100%)";
    pw3.style.transform = "translateX(100%)";


    personal_btn1.style.color = "black";
    personal_btn2.style.color = "grey";
    personal_btn3.style.color = "grey";

    
    personal_btn1.style.borderBottom = "2px solid black";
    personal_btn2.style.borderBottom = "0px solid black";
    personal_btn3.style.borderBottom = "0px solid black";

    

}

function open_pw2() {

    pw1.style.transform = "translateX(100%)";
    pw2.style.transform = "translateX(0%)";
    pw3.style.transform = "translateX(100%)";


    personal_btn1.style.color = "grey";
    personal_btn2.style.color = "black";
    personal_btn3.style.color = "grey";

    personal_btn1.style.borderBottom = "0px solid black";
    personal_btn2.style.borderBottom = "2px solid black";
    personal_btn3.style.borderBottom = "0px solid black";



}

function open_pw3() {

    pw1.style.transform = "translateX(100%)";
    pw2.style.transform = "translateX(100%)";
    pw3.style.transform = "translateX(0%)";
 

    personal_btn1.style.color = "grey";
    personal_btn2.style.color = "grey";
    personal_btn3.style.color = "black";

    personal_btn1.style.borderBottom = "0px solid black";
    personal_btn2.style.borderBottom = "0px solid black";
    personal_btn3.style.borderBottom = "2px solid black";



}

var w1_img1 = document.getElementById("w1_img1");
var w1_img2 = document.getElementById("w1_img2");
var w1_img3 = document.getElementById("w1_img3");
var w1_img4 = document.getElementById("w1_img4");
var w1_img5 = document.getElementById("w1_img5");
var w1_img6 = document.getElementById("w1_img6");
var w1_img7 = document.getElementById("w1_img7");

var w1_btn1 = document.getElementById("w1_btn1");
var w1_btn2 = document.getElementById("w1_btn2");
var w1_btn3 = document.getElementById("w1_btn3");
var w1_btn4 = document.getElementById("w1_btn4");
var w1_btn5 = document.getElementById("w1_btn5");
var w1_btn6 = document.getElementById("w1_btn6");
var w1_btn7 = document.getElementById("w1_btn7");

function open_w1_1() {

    w1_img1.style.transform = "translateX(0)";
    w1_img2.style.transform = "translateX(100%)";
    w1_img3.style.transform = "translateX(100%)";
    w1_img4.style.transform = "translateX(100%)";
    w1_img5.style.transform = "translateX(100%)";
    w1_img6.style.transform = "translateX(100%)";
    w1_img7.style.transform = "translateX(100%)";

    w1_btn1.style.color = "black";
    w1_btn2.style.color = "grey";
    w1_btn3.style.color = "grey";
    w1_btn4.style.color = "grey";
    w1_btn5.style.color = "grey";
    w1_btn6.style.color = "grey";
    w1_btn7.style.color = "grey";

    w1_btn1.style.borderBottom = "2px solid black";
    w1_btn2.style.borderBottom = "2px solid grey";
    w1_btn3.style.borderBottom = "2px solid grey";
    w1_btn4.style.borderBottom = "2px solid grey";
    w1_btn5.style.borderBottom = "2px solid grey";
    w1_btn6.style.borderBottom = "2px solid grey";
    w1_btn7.style.borderBottom = "2px solid grey";

}

function open_w1_2() {

    w1_img1.style.transform = "translateX(100%)";
    w1_img2.style.transform = "translateX(0)";
    w1_img3.style.transform = "translateX(100%)";
    w1_img4.style.transform = "translateX(100%)";
    w1_img5.style.transform = "translateX(100%)";
    w1_img6.style.transform = "translateX(100%)";
    w1_img7.style.transform = "translateX(100%)";
    
    w1_btn1.style.color = "grey";
    w1_btn2.style.color = "black";
    w1_btn3.style.color = "grey";
    w1_btn4.style.color = "grey";
    w1_btn5.style.color = "grey";
    w1_btn6.style.color = "grey";
    w1_btn7.style.color = "grey";

    w1_btn1.style.borderBottom = "2px solid grey";
    w1_btn2.style.borderBottom = "2px solid black";
    w1_btn3.style.borderBottom = "2px solid grey";
    w1_btn4.style.borderBottom = "2px solid grey";
    w1_btn5.style.borderBottom = "2px solid grey";
    w1_btn6.style.borderBottom = "2px solid grey";
    w1_btn7.style.borderBottom = "2px solid grey";
    
}

function open_w1_3() {

    w1_img1.style.transform = "translateX(100%)";
    w1_img2.style.transform = "translateX(100%)";
    w1_img3.style.transform = "translateX(0)";
    w1_img4.style.transform = "translateX(100%)";
    w1_img5.style.transform = "translateX(100%)";
    w1_img6.style.transform = "translateX(100%)";
    w1_img7.style.transform = "translateX(100%)";
    
    w1_btn1.style.color = "grey";
    w1_btn2.style.color = "grey";
    w1_btn3.style.color = "black";
    w1_btn4.style.color = "grey";
    w1_btn5.style.color = "grey";
    w1_btn6.style.color = "grey";
    w1_btn7.style.color = "grey";
    
    w1_btn1.style.borderBottom = "2px solid grey";
    w1_btn2.style.borderBottom = "2px solid grey";
    w1_btn3.style.borderBottom = "2px solid black";
    w1_btn4.style.borderBottom = "2px solid grey";
    w1_btn5.style.borderBottom = "2px solid grey";
    w1_btn6.style.borderBottom = "2px solid grey";
    w1_btn7.style.borderBottom = "2px solid grey";
}

function open_w1_4() {

    w1_img1.style.transform = "translateX(100%)";
    w1_img2.style.transform = "translateX(100%)";
    w1_img3.style.transform = "translateX(100%)";
    w1_img4.style.transform = "translateX(0)";
    w1_img5.style.transform = "translateX(100%)";
    w1_img6.style.transform = "translateX(100%)";
    w1_img7.style.transform = "translateX(100%)";
    
    w1_btn1.style.color = "grey";
    w1_btn2.style.color = "grey";
    w1_btn3.style.color = "grey";
    w1_btn4.style.color = "black";
    w1_btn5.style.color = "grey";
    w1_btn6.style.color = "grey";
    w1_btn7.style.color = "grey";
    
    w1_btn1.style.borderBottom = "2px solid grey";
    w1_btn2.style.borderBottom = "2px solid grey";
    w1_btn3.style.borderBottom = "2px solid grey";
    w1_btn4.style.borderBottom = "2px solid black";
    w1_btn5.style.borderBottom = "2px solid grey";
    w1_btn6.style.borderBottom = "2px solid grey";
    w1_btn7.style.borderBottom = "2px solid grey";
}

function open_w1_5() {

    w1_img1.style.transform = "translateX(100%)";
    w1_img2.style.transform = "translateX(100%)";
    w1_img3.style.transform = "translateX(100%)";
    w1_img4.style.transform = "translateX(100%)";
    w1_img5.style.transform = "translateX(0)";
    w1_img6.style.transform = "translateX(100%)";
    w1_img7.style.transform = "translateX(100%)";
    
    w1_btn1.style.color = "grey";
    w1_btn2.style.color = "grey";
    w1_btn3.style.color = "grey";
    w1_btn4.style.color = "grey";
    w1_btn5.style.color = "black";
    w1_btn6.style.color = "grey";
    w1_btn7.style.color = "grey";

    w1_btn1.style.borderBottom = "2px solid grey";
    w1_btn2.style.borderBottom = "2px solid grey";
    w1_btn3.style.borderBottom = "2px solid grey";
    w1_btn4.style.borderBottom = "2px solid grey";
    w1_btn5.style.borderBottom = "2px solid black";
    w1_btn6.style.borderBottom = "2px solid grey";
    w1_btn7.style.borderBottom = "2px solid grey";
    
}

function open_w1_6() {

    w1_img1.style.transform = "translateX(100%)";
    w1_img2.style.transform = "translateX(100%)";
    w1_img3.style.transform = "translateX(100%)";
    w1_img4.style.transform = "translateX(100%)";
    w1_img5.style.transform = "translateX(100%)";
    w1_img6.style.transform = "translateX(0)";
    w1_img7.style.transform = "translateX(100%)";
    
    w1_btn1.style.color = "grey";
    w1_btn2.style.color = "grey";
    w1_btn3.style.color = "grey";
    w1_btn4.style.color = "grey";
    w1_btn5.style.color = "grey";
    w1_btn6.style.color = "black";
    w1_btn7.style.color = "grey";

    w1_btn1.style.borderBottom = "2px solid grey";
    w1_btn2.style.borderBottom = "2px solid grey";
    w1_btn3.style.borderBottom = "2px solid grey";
    w1_btn4.style.borderBottom = "2px solid grey";
    w1_btn5.style.borderBottom = "2px solid grey";
    w1_btn6.style.borderBottom = "2px solid black";
    w1_btn7.style.borderBottom = "2px solid grey";
    
}

function open_w1_7() {

    w1_img1.style.transform = "translateX(100%)";
    w1_img2.style.transform = "translateX(100%)";
    w1_img3.style.transform = "translateX(100%)";
    w1_img4.style.transform = "translateX(100%)";
    w1_img5.style.transform = "translateX(100%)";
    w1_img6.style.transform = "translateX(100%)";
    w1_img7.style.transform = "translateX(0)";
    
    w1_btn1.style.color = "grey";
    w1_btn2.style.color = "grey";
    w1_btn3.style.color = "grey";
    w1_btn4.style.color = "grey";
    w1_btn5.style.color = "grey";
    w1_btn6.style.color = "grey";
    w1_btn7.style.color = "black";

    w1_btn1.style.borderBottom = "2px solid grey";
    w1_btn2.style.borderBottom = "2px solid grey";
    w1_btn3.style.borderBottom = "2px solid grey";
    w1_btn4.style.borderBottom = "2px solid grey";
    w1_btn5.style.borderBottom = "2px solid grey";
    w1_btn6.style.borderBottom = "2px solid grey";
    w1_btn7.style.borderBottom = "2px solid black";
    
}


var w2_img1 = document.getElementById("w2_img1");
var w2_img2 = document.getElementById("w2_img2");
var w2_img3 = document.getElementById("w2_img3");
var w2_img4 = document.getElementById("w2_img4");
var w2_img5 = document.getElementById("w2_img5");
var w2_img6 = document.getElementById("w2_img6");
var w2_img7 = document.getElementById("w2_img7");

var w2_btn1 = document.getElementById("w2_btn1");
var w2_btn2 = document.getElementById("w2_btn2");
var w2_btn3 = document.getElementById("w2_btn3");
var w2_btn4 = document.getElementById("w2_btn4");
var w2_btn5 = document.getElementById("w2_btn5");
var w2_btn6 = document.getElementById("w2_btn6");
var w2_btn7 = document.getElementById("w2_btn7");

function open_w2_1() {

    w2_img1.style.transform = "translateX(0)";
    w2_img2.style.transform = "translateX(100%)";
    w2_img3.style.transform = "translateX(100%)";
    w2_img4.style.transform = "translateX(100%)";
    w2_img5.style.transform = "translateX(100%)";
    w2_img6.style.transform = "translateX(100%)";
    w2_img7.style.transform = "translateX(100%)";

    w2_btn1.style.color = "black";
    w2_btn2.style.color = "grey";
    w2_btn3.style.color = "grey";
    w2_btn4.style.color = "grey";
    w2_btn5.style.color = "grey";
    w2_btn6.style.color = "grey";
    w2_btn7.style.color = "grey";

    w2_btn1.style.borderBottom = "2px solid black";
    w2_btn2.style.borderBottom = "2px solid grey";
    w2_btn3.style.borderBottom = "2px solid grey";
    w2_btn4.style.borderBottom = "2px solid grey";
    w2_btn5.style.borderBottom = "2px solid grey";
    w2_btn6.style.borderBottom = "2px solid grey";
    w2_btn7.style.borderBottom = "2px solid grey";

}

function open_w2_2() {

    w2_img1.style.transform = "translateX(100%)";
    w2_img2.style.transform = "translateX(0)";
    w2_img3.style.transform = "translateX(100%)";
    w2_img4.style.transform = "translateX(100%)";
    w2_img5.style.transform = "translateX(100%)";
    w2_img6.style.transform = "translateX(100%)";
    w2_img7.style.transform = "translateX(100%)";
    
    w2_btn1.style.color = "grey";
    w2_btn2.style.color = "black";
    w2_btn3.style.color = "grey";
    w2_btn4.style.color = "grey";
    w2_btn5.style.color = "grey";
    w2_btn6.style.color = "grey";
    w2_btn7.style.color = "grey";

    w2_btn1.style.borderBottom = "2px solid grey";
    w2_btn2.style.borderBottom = "2px solid black";
    w2_btn3.style.borderBottom = "2px solid grey";
    w2_btn4.style.borderBottom = "2px solid grey";
    w2_btn5.style.borderBottom = "2px solid grey";
    w2_btn6.style.borderBottom = "2px solid grey";
    w2_btn7.style.borderBottom = "2px solid grey";
    
}

function open_w2_3() {

    w2_img1.style.transform = "translateX(100%)";
    w2_img2.style.transform = "translateX(100%)";
    w2_img3.style.transform = "translateX(0)";
    w2_img4.style.transform = "translateX(100%)";
    w2_img5.style.transform = "translateX(100%)";
    w2_img6.style.transform = "translateX(100%)";
    w2_img7.style.transform = "translateX(100%)";
    
    w2_btn1.style.color = "grey";
    w2_btn2.style.color = "grey";
    w2_btn3.style.color = "black";
    w2_btn4.style.color = "grey";
    w2_btn5.style.color = "grey";
    w2_btn6.style.color = "grey";
    w2_btn7.style.color = "grey";
    
    w2_btn1.style.borderBottom = "2px solid grey";
    w2_btn2.style.borderBottom = "2px solid grey";
    w2_btn3.style.borderBottom = "2px solid black";
    w2_btn4.style.borderBottom = "2px solid grey";
    w2_btn5.style.borderBottom = "2px solid grey";
    w2_btn6.style.borderBottom = "2px solid grey";
    w2_btn7.style.borderBottom = "2px solid grey";
}

function open_w2_4() {

    w2_img1.style.transform = "translateX(100%)";
    w2_img2.style.transform = "translateX(100%)";
    w2_img3.style.transform = "translateX(100%)";
    w2_img4.style.transform = "translateX(0)";
    w2_img5.style.transform = "translateX(100%)";
    w2_img6.style.transform = "translateX(100%)";
    w2_img7.style.transform = "translateX(100%)";
    
    w2_btn1.style.color = "grey";
    w2_btn2.style.color = "grey";
    w2_btn3.style.color = "grey";
    w2_btn4.style.color = "black";
    w2_btn5.style.color = "grey";
    w2_btn6.style.color = "grey";
    w2_btn7.style.color = "grey";
    
    w2_btn1.style.borderBottom = "2px solid grey";
    w2_btn2.style.borderBottom = "2px solid grey";
    w2_btn3.style.borderBottom = "2px solid grey";
    w2_btn4.style.borderBottom = "2px solid black";
    w2_btn5.style.borderBottom = "2px solid grey";
    w2_btn6.style.borderBottom = "2px solid grey";
    w2_btn7.style.borderBottom = "2px solid grey";
}

function open_w2_5() {

    w2_img1.style.transform = "translateX(100%)";
    w2_img2.style.transform = "translateX(100%)";
    w2_img3.style.transform = "translateX(100%)";
    w2_img4.style.transform = "translateX(100%)";
    w2_img5.style.transform = "translateX(0)";
    w2_img6.style.transform = "translateX(100%)";
    w2_img7.style.transform = "translateX(100%)";
    
    w2_btn1.style.color = "grey";
    w2_btn2.style.color = "grey";
    w2_btn3.style.color = "grey";
    w2_btn4.style.color = "grey";
    w2_btn5.style.color = "black";
    w2_btn6.style.color = "grey";
    w2_btn7.style.color = "grey";

    w2_btn1.style.borderBottom = "2px solid grey";
    w2_btn2.style.borderBottom = "2px solid grey";
    w2_btn3.style.borderBottom = "2px solid grey";
    w2_btn4.style.borderBottom = "2px solid grey";
    w2_btn5.style.borderBottom = "2px solid black";
    w2_btn6.style.borderBottom = "2px solid grey";
    w2_btn7.style.borderBottom = "2px solid grey";
    
}

function open_w2_6() {

    w2_img1.style.transform = "translateX(100%)";
    w2_img2.style.transform = "translateX(100%)";
    w2_img3.style.transform = "translateX(100%)";
    w2_img4.style.transform = "translateX(100%)";
    w2_img5.style.transform = "translateX(100%)";
    w2_img6.style.transform = "translateX(0)";
    w2_img7.style.transform = "translateX(100%)";
    
    w2_btn1.style.color = "grey";
    w2_btn2.style.color = "grey";
    w2_btn3.style.color = "grey";
    w2_btn4.style.color = "grey";
    w2_btn5.style.color = "grey";
    w2_btn6.style.color = "black";
    w2_btn7.style.color = "grey";

    w2_btn1.style.borderBottom = "2px solid grey";
    w2_btn2.style.borderBottom = "2px solid grey";
    w2_btn3.style.borderBottom = "2px solid grey";
    w2_btn4.style.borderBottom = "2px solid grey";
    w2_btn5.style.borderBottom = "2px solid grey";
    w2_btn6.style.borderBottom = "2px solid black";
    w2_btn7.style.borderBottom = "2px solid grey";
    
}

function open_w2_7() {

    w2_img1.style.transform = "translateX(100%)";
    w2_img2.style.transform = "translateX(100%)";
    w2_img3.style.transform = "translateX(100%)";
    w2_img4.style.transform = "translateX(100%)";
    w2_img5.style.transform = "translateX(100%)";
    w2_img6.style.transform = "translateX(100%)";
    w2_img7.style.transform = "translateX(0)";

    w2_btn1.style.color = "grey";
    w2_btn2.style.color = "grey";
    w2_btn3.style.color = "grey";
    w2_btn4.style.color = "grey";
    w2_btn5.style.color = "grey";
    w2_btn6.style.color = "grey";
    w2_btn7.style.color = "black";

    w2_btn1.style.borderBottom = "2px solid grey";
    w2_btn2.style.borderBottom = "2px solid grey";
    w2_btn3.style.borderBottom = "2px solid grey";
    w2_btn4.style.borderBottom = "2px solid grey";
    w2_btn5.style.borderBottom = "2px solid grey";
    w2_btn6.style.borderBottom = "2px solid grey";
    w2_btn7.style.borderBottom = "2px solid black";
    
}

var w3_img1 = document.getElementById("w3_img1");
var w3_img2 = document.getElementById("w3_img2");
// var w3_img3 = document.getElementById("w3_img3");
// var w3_img4 = document.getElementById("w3_img4");
// var w3_img5 = document.getElementById("w3_img5");
// var w3_img6 = document.getElementById("w3_img6");
// var w3_img7 = document.getElementById("w3_img7");

var w3_btn1 = document.getElementById("w3_btn1");
var w3_btn2 = document.getElementById("w3_btn2");
// var w3_btn3 = document.getElementById("w3_btn3");
// var w3_btn4 = document.getElementById("w3_btn4");
// var w3_btn5 = document.getElementById("w3_btn5");
// var w3_btn6 = document.getElementById("w3_btn6");
// var w3_btn7 = document.getElementById("w3_btn7");

function open_w3_1() {

    w3_img1.style.transform = "translateX(0)";
    w3_img2.style.transform = "translateX(100%)";
    // w3_img3.style.transform = "translateX(100%)";
    // w3_img4.style.transform = "translateX(100%)";
    // w3_img5.style.transform = "translateX(100%)";
    // w3_img6.style.transform = "translateX(100%)";
    // w3_img7.style.transform = "translateX(100%)";

    w3_btn1.style.color = "black";
    w3_btn2.style.color = "grey";
    // w3_btn3.style.color = "grey";
    // w3_btn4.style.color = "grey";
    // w3_btn5.style.color = "grey";
    // w3_btn6.style.color = "grey";
    // w3_btn7.style.color = "grey";

    w3_btn1.style.borderBottom = "2px solid black";
    w3_btn2.style.borderBottom = "2px solid grey";
    // w3_btn3.style.borderBottom = "2px solid grey";
    // w3_btn4.style.borderBottom = "2px solid grey";
    // w3_btn5.style.borderBottom = "2px solid grey";
    // w3_btn6.style.borderBottom = "2px solid grey";
    // w3_btn7.style.borderBottom = "2px solid grey";

}

function open_w3_2() {

    w3_img1.style.transform = "translateX(100%)";
    w3_img2.style.transform = "translateX(0)";
    // w3_img3.style.transform = "translateX(100%)";
    // w3_img4.style.transform = "translateX(100%)";
    // w3_img5.style.transform = "translateX(100%)";
    // w3_img6.style.transform = "translateX(100%)";
    // w3_img7.style.transform = "translateX(100%)";
    
    w3_btn1.style.color = "grey";
    w3_btn2.style.color = "black";
    // w3_btn3.style.color = "grey";
    // w3_btn4.style.color = "grey";
    // w3_btn5.style.color = "grey";
    // w3_btn6.style.color = "grey";
    // w3_btn7.style.color = "grey";

    w3_btn1.style.borderBottom = "2px solid grey";
    w3_btn2.style.borderBottom = "2px solid black";
    // w3_btn3.style.borderBottom = "2px solid grey";
    // w3_btn4.style.borderBottom = "2px solid grey";
    // w3_btn5.style.borderBottom = "2px solid grey";
    // w3_btn6.style.borderBottom = "2px solid grey";
    // w3_btn7.style.borderBottom = "2px solid grey";
    
}

// function open_w3_3() {

//     w3_img1.style.transform = "translateX(100%)";
//     w3_img2.style.transform = "translateX(100%)";
//     w3_img3.style.transform = "translateX(0)";
//     w3_img4.style.transform = "translateX(100%)";
//     w3_img5.style.transform = "translateX(100%)";
//     w3_img6.style.transform = "translateX(100%)";
//     w3_img7.style.transform = "translateX(100%)";
    
//     w3_btn1.style.color = "grey";
//     w3_btn2.style.color = "grey";
//     w3_btn3.style.color = "black";
//     w3_btn4.style.color = "grey";
//     w3_btn5.style.color = "grey";
//     w3_btn6.style.color = "grey";
//     w3_btn7.style.color = "grey";
    
//     w3_btn1.style.borderBottom = "2px solid grey";
//     w3_btn2.style.borderBottom = "2px solid grey";
//     w3_btn3.style.borderBottom = "2px solid black";
//     w3_btn4.style.borderBottom = "2px solid grey";
//     w3_btn5.style.borderBottom = "2px solid grey";
//     w3_btn6.style.borderBottom = "2px solid grey";
//     w3_btn7.style.borderBottom = "2px solid grey";
// }

// function open_w3_4() {

//     w3_img1.style.transform = "translateX(100%)";
//     w3_img2.style.transform = "translateX(100%)";
//     w3_img3.style.transform = "translateX(100%)";
//     w3_img4.style.transform = "translateX(0)";
//     w3_img5.style.transform = "translateX(100%)";
//     w3_img6.style.transform = "translateX(100%)";
//     w3_img7.style.transform = "translateX(100%)";
    
//     w3_btn1.style.color = "grey";
//     w3_btn2.style.color = "grey";
//     w3_btn3.style.color = "grey";
//     w3_btn4.style.color = "black";
//     w3_btn5.style.color = "grey";
//     w3_btn6.style.color = "grey";
//     w3_btn7.style.color = "grey";
    
//     w3_btn1.style.borderBottom = "2px solid grey";
//     w3_btn2.style.borderBottom = "2px solid grey";
//     w3_btn3.style.borderBottom = "2px solid grey";
//     w3_btn4.style.borderBottom = "2px solid black";
//     w3_btn5.style.borderBottom = "2px solid grey";
//     w3_btn6.style.borderBottom = "2px solid grey";
//     w3_btn7.style.borderBottom = "2px solid grey";
// }

// function open_w3_5() {

//     w3_img1.style.transform = "translateX(100%)";
//     w3_img2.style.transform = "translateX(100%)";
//     w3_img3.style.transform = "translateX(100%)";
//     w3_img4.style.transform = "translateX(100%)";
//     w3_img5.style.transform = "translateX(0)";
//     w3_img6.style.transform = "translateX(100%)";
//     w3_img7.style.transform = "translateX(100%)";
    
//     w3_btn1.style.color = "grey";
//     w3_btn2.style.color = "grey";
//     w3_btn3.style.color = "grey";
//     w3_btn4.style.color = "grey";
//     w3_btn5.style.color = "black";
//     w3_btn6.style.color = "grey";
//     w3_btn7.style.color = "grey";

//     w3_btn1.style.borderBottom = "2px solid grey";
//     w3_btn2.style.borderBottom = "2px solid grey";
//     w3_btn3.style.borderBottom = "2px solid grey";
//     w3_btn4.style.borderBottom = "2px solid grey";
//     w3_btn5.style.borderBottom = "2px solid black";
//     w3_btn6.style.borderBottom = "2px solid grey";
//     w3_btn7.style.borderBottom = "2px solid grey";
    
// }

// function open_w3_6() {

//     w3_img1.style.transform = "translateX(100%)";
//     w3_img2.style.transform = "translateX(100%)";
//     w3_img3.style.transform = "translateX(100%)";
//     w3_img4.style.transform = "translateX(100%)";
//     w3_img5.style.transform = "translateX(100%)";
//     w3_img6.style.transform = "translateX(0)";
//     w3_img7.style.transform = "translateX(100%)";
    
//     w3_btn1.style.color = "grey";
//     w3_btn2.style.color = "grey";
//     w3_btn3.style.color = "grey";
//     w3_btn4.style.color = "grey";
//     w3_btn5.style.color = "grey";
//     w3_btn6.style.color = "black";
//     w3_btn7.style.color = "grey";

//     w3_btn1.style.borderBottom = "2px solid grey";
//     w3_btn2.style.borderBottom = "2px solid grey";
//     w3_btn3.style.borderBottom = "2px solid grey";
//     w3_btn4.style.borderBottom = "2px solid grey";
//     w3_btn5.style.borderBottom = "2px solid grey";
//     w3_btn6.style.borderBottom = "2px solid black";
//     w3_btn7.style.borderBottom = "2px solid grey";
    
// }

// function open_w3_7() {

//     w3_img1.style.transform = "translateX(100%)";
//     w3_img2.style.transform = "translateX(100%)";
//     w3_img3.style.transform = "translateX(100%)";
//     w3_img4.style.transform = "translateX(100%)";
//     w3_img5.style.transform = "translateX(100%)";
//     w3_img6.style.transform = "translateX(100%)";
//     w3_img7.style.transform = "translateX(0)";

//     w3_btn1.style.color = "grey";
//     w3_btn2.style.color = "grey";
//     w3_btn3.style.color = "grey";
//     w3_btn4.style.color = "grey";
//     w3_btn5.style.color = "grey";
//     w3_btn6.style.color = "grey";
//     w3_btn7.style.color = "black";

//     w3_btn1.style.borderBottom = "2px solid grey";
//     w3_btn2.style.borderBottom = "2px solid grey";
//     w3_btn3.style.borderBottom = "2px solid grey";
//     w3_btn4.style.borderBottom = "2px solid grey";
//     w3_btn5.style.borderBottom = "2px solid grey";
//     w3_btn6.style.borderBottom = "2px solid grey";
//     w3_btn7.style.borderBottom = "2px solid black";
    
// }

var w4_img1 = document.getElementById("w4_img1");
var w4_img2 = document.getElementById("w4_img2");
var w4_img3 = document.getElementById("w4_img3");
var w4_img4 = document.getElementById("w4_img4");
var w4_img5 = document.getElementById("w4_img5");
var w4_img6 = document.getElementById("w4_img6");
var w4_img7 = document.getElementById("w4_img7");

var w4_btn1 = document.getElementById("w4_btn1");
var w4_btn2 = document.getElementById("w4_btn2");
var w4_btn3 = document.getElementById("w4_btn3");
var w4_btn4 = document.getElementById("w4_btn4");
var w4_btn5 = document.getElementById("w4_btn5");
var w4_btn6 = document.getElementById("w4_btn6");
var w4_btn7 = document.getElementById("w4_btn7");

function open_w4_1() {

    w4_img1.style.transform = "translateX(0)";
    w4_img2.style.transform = "translateX(100%)";
    w4_img3.style.transform = "translateX(100%)";
    w4_img4.style.transform = "translateX(100%)";
    w4_img5.style.transform = "translateX(100%)";
    w4_img6.style.transform = "translateX(100%)";
    w4_img7.style.transform = "translateX(100%)";

    w4_btn1.style.color = "black";
    w4_btn2.style.color = "grey";
    w4_btn3.style.color = "grey";
    w4_btn4.style.color = "grey";
    w4_btn5.style.color = "grey";
    w4_btn6.style.color = "grey";
    w4_btn7.style.color = "grey";

    w4_btn1.style.borderBottom = "2px solid black";
    w4_btn2.style.borderBottom = "2px solid grey";
    w4_btn3.style.borderBottom = "2px solid grey";
    w4_btn4.style.borderBottom = "2px solid grey";
    w4_btn5.style.borderBottom = "2px solid grey";
    w4_btn6.style.borderBottom = "2px solid grey";
    w4_btn7.style.borderBottom = "2px solid grey";

}

function open_w4_2() {

    w4_img1.style.transform = "translateX(100%)";
    w4_img2.style.transform = "translateX(0)";
    w4_img3.style.transform = "translateX(100%)";
    w4_img4.style.transform = "translateX(100%)";
    w4_img5.style.transform = "translateX(100%)";
    w4_img6.style.transform = "translateX(100%)";
    w4_img7.style.transform = "translateX(100%)";
    
    w4_btn1.style.color = "grey";
    w4_btn2.style.color = "black";
    w4_btn3.style.color = "grey";
    w4_btn4.style.color = "grey";
    w4_btn5.style.color = "grey";
    w4_btn6.style.color = "grey";
    w4_btn7.style.color = "grey";

    w4_btn1.style.borderBottom = "2px solid grey";
    w4_btn2.style.borderBottom = "2px solid black";
    w4_btn3.style.borderBottom = "2px solid grey";
    w4_btn4.style.borderBottom = "2px solid grey";
    w4_btn5.style.borderBottom = "2px solid grey";
    w4_btn6.style.borderBottom = "2px solid grey";
    w4_btn7.style.borderBottom = "2px solid grey";
    
}

function open_w4_3() {

    w4_img1.style.transform = "translateX(100%)";
    w4_img2.style.transform = "translateX(100%)";
    w4_img3.style.transform = "translateX(0)";
    w4_img4.style.transform = "translateX(100%)";
    w4_img5.style.transform = "translateX(100%)";
    w4_img6.style.transform = "translateX(100%)";
    w4_img7.style.transform = "translateX(100%)";
    
    w4_btn1.style.color = "grey";
    w4_btn2.style.color = "grey";
    w4_btn3.style.color = "black";
    w4_btn4.style.color = "grey";
    w4_btn5.style.color = "grey";
    w4_btn6.style.color = "grey";
    w4_btn7.style.color = "grey";
    
    w4_btn1.style.borderBottom = "2px solid grey";
    w4_btn2.style.borderBottom = "2px solid grey";
    w4_btn3.style.borderBottom = "2px solid black";
    w4_btn4.style.borderBottom = "2px solid grey";
    w4_btn5.style.borderBottom = "2px solid grey";
    w4_btn6.style.borderBottom = "2px solid grey";
    w4_btn7.style.borderBottom = "2px solid grey";
}

function open_w4_4() {

    w4_img1.style.transform = "translateX(100%)";
    w4_img2.style.transform = "translateX(100%)";
    w4_img3.style.transform = "translateX(100%)";
    w4_img4.style.transform = "translateX(0)";
    w4_img5.style.transform = "translateX(100%)";
    w4_img6.style.transform = "translateX(100%)";
    w4_img7.style.transform = "translateX(100%)";
    
    w4_btn1.style.color = "grey";
    w4_btn2.style.color = "grey";
    w4_btn3.style.color = "grey";
    w4_btn4.style.color = "black";
    w4_btn5.style.color = "grey";
    w4_btn6.style.color = "grey";
    w4_btn7.style.color = "grey";
    
    w4_btn1.style.borderBottom = "2px solid grey";
    w4_btn2.style.borderBottom = "2px solid grey";
    w4_btn3.style.borderBottom = "2px solid grey";
    w4_btn4.style.borderBottom = "2px solid black";
    w4_btn5.style.borderBottom = "2px solid grey";
    w4_btn6.style.borderBottom = "2px solid grey";
    w4_btn7.style.borderBottom = "2px solid grey";
}

function open_w4_5() {

    w4_img1.style.transform = "translateX(100%)";
    w4_img2.style.transform = "translateX(100%)";
    w4_img3.style.transform = "translateX(100%)";
    w4_img4.style.transform = "translateX(100%)";
    w4_img5.style.transform = "translateX(0)";
    w4_img6.style.transform = "translateX(100%)";
    w4_img7.style.transform = "translateX(100%)";
    
    w4_btn1.style.color = "grey";
    w4_btn2.style.color = "grey";
    w4_btn3.style.color = "grey";
    w4_btn4.style.color = "grey";
    w4_btn5.style.color = "black";
    w4_btn6.style.color = "grey";
    w4_btn7.style.color = "grey";

    w4_btn1.style.borderBottom = "2px solid grey";
    w4_btn2.style.borderBottom = "2px solid grey";
    w4_btn3.style.borderBottom = "2px solid grey";
    w4_btn4.style.borderBottom = "2px solid grey";
    w4_btn5.style.borderBottom = "2px solid black";
    w4_btn6.style.borderBottom = "2px solid grey";
    w4_btn7.style.borderBottom = "2px solid grey";
    
}

function open_w4_6() {

    w4_img1.style.transform = "translateX(100%)";
    w4_img2.style.transform = "translateX(100%)";
    w4_img3.style.transform = "translateX(100%)";
    w4_img4.style.transform = "translateX(100%)";
    w4_img5.style.transform = "translateX(100%)";
    w4_img6.style.transform = "translateX(0)";
    w4_img7.style.transform = "translateX(100%)";
    
    w4_btn1.style.color = "grey";
    w4_btn2.style.color = "grey";
    w4_btn3.style.color = "grey";
    w4_btn4.style.color = "grey";
    w4_btn5.style.color = "grey";
    w4_btn6.style.color = "black";
    w4_btn7.style.color = "grey";

    w4_btn1.style.borderBottom = "2px solid grey";
    w4_btn2.style.borderBottom = "2px solid grey";
    w4_btn3.style.borderBottom = "2px solid grey";
    w4_btn4.style.borderBottom = "2px solid grey";
    w4_btn5.style.borderBottom = "2px solid grey";
    w4_btn6.style.borderBottom = "2px solid black";
    w4_btn7.style.borderBottom = "2px solid grey";
    
}

function open_w4_7() {

    w4_img1.style.transform = "translateX(100%)";
    w4_img2.style.transform = "translateX(100%)";
    w4_img3.style.transform = "translateX(100%)";
    w4_img4.style.transform = "translateX(100%)";
    w4_img5.style.transform = "translateX(100%)";
    w4_img6.style.transform = "translateX(100%)";
    w4_img7.style.transform = "translateX(0)";

    w4_btn1.style.color = "grey";
    w4_btn2.style.color = "grey";
    w4_btn3.style.color = "grey";
    w4_btn4.style.color = "grey";
    w4_btn5.style.color = "grey";
    w4_btn6.style.color = "grey";
    w4_btn7.style.color = "black";

    w4_btn1.style.borderBottom = "2px solid grey";
    w4_btn2.style.borderBottom = "2px solid grey";
    w4_btn3.style.borderBottom = "2px solid grey";
    w4_btn4.style.borderBottom = "2px solid grey";
    w4_btn5.style.borderBottom = "2px solid grey";
    w4_btn6.style.borderBottom = "2px solid grey";
    w4_btn7.style.borderBottom = "2px solid black";
    
}


var pw1_img1 = document.getElementById("pw1_img1");
var pw1_img2 = document.getElementById("pw1_img2");
// var pw1_img3 = document.getElementById("pw1_img3");
// var pw1_img4 = document.getElementById("pw1_img4");
// var pw1_img5 = document.getElementById("pw1_img5");
// var pw1_img6 = document.getElementById("pw1_img6");
// var pw1_img7 = document.getElementById("pw1_img7");

var pw1_btn1 = document.getElementById("pw1_btn1");
var pw1_btn2 = document.getElementById("pw1_btn2");
// var pw1_btn3 = document.getElementById("pw1_btn3");
// var pw1_btn4 = document.getElementById("pw1_btn4");
// var pw1_btn5 = document.getElementById("pw1_btn5");
// var pw1_btn6 = document.getElementById("pw1_btn6");
// var pw1_btn7 = document.getElementById("pw1_btn7");

function open_pw1_1() {

    pw1_img1.style.transform = "translateX(0)";
    pw1_img2.style.transform = "translateX(100%)";
    // pw1_img3.style.transform = "translateX(100%)";
    // pw1_img4.style.transform = "translateX(100%)";
    // pw1_img5.style.transform = "translateX(100%)";
    // pw1_img6.style.transform = "translateX(100%)";
    // pw1_img7.style.transform = "translateX(100%)";

    pw1_btn1.style.color = "white";
    pw1_btn2.style.color = "grey";
    // pw1_btn3.style.color = "grey";
    // pw1_btn4.style.color = "grey";
    // pw1_btn5.style.color = "grey";
    // pw1_btn6.style.color = "grey";
    // pw1_btn7.style.color = "grey";

    pw1_btn1.style.borderBottom = "2px solid white";
    pw1_btn2.style.borderBottom = "2px solid grey";
    // pw1_btn3.style.borderBottom = "2px solid grey";
    // pw1_btn4.style.borderBottom = "2px solid grey";
    // pw1_btn5.style.borderBottom = "2px solid grey";
    // pw1_btn6.style.borderBottom = "2px solid grey";
    // pw1_btn7.style.borderBottom = "2px solid grey";

}

function open_pw1_2() {

    pw1_img1.style.transform = "translateX(100%)";
    pw1_img2.style.transform = "translateX(0)";
    // pw1_img3.style.transform = "translateX(100%)";
    // pw1_img4.style.transform = "translateX(100%)";
    // pw1_img5.style.transform = "translateX(100%)";
    // pw1_img6.style.transform = "translateX(100%)";
    // pw1_img7.style.transform = "translateX(100%)";
    
    pw1_btn1.style.color = "grey";
    pw1_btn2.style.color = "white";
    // pw1_btn3.style.color = "grey";
    // pw1_btn4.style.color = "grey";
    // pw1_btn5.style.color = "grey";
    // pw1_btn6.style.color = "grey";
    // pw1_btn7.style.color = "grey";

    pw1_btn1.style.borderBottom = "2px solid grey";
    pw1_btn2.style.borderBottom = "2px solid white";
    // pw1_btn3.style.borderBottom = "2px solid grey";
    // pw1_btn4.style.borderBottom = "2px solid grey";
    // pw1_btn5.style.borderBottom = "2px solid grey";
    // pw1_btn6.style.borderBottom = "2px solid grey";
    // pw1_btn7.style.borderBottom = "2px solid grey";
    
}

// function open_pw1_3() {

//     pw1_img1.style.transform = "translateX(100%)";
//     pw1_img2.style.transform = "translateX(100%)";
//     pw1_img3.style.transform = "translateX(0)";
//     pw1_img4.style.transform = "translateX(100%)";
//     pw1_img5.style.transform = "translateX(100%)";
//     pw1_img6.style.transform = "translateX(100%)";
//     pw1_img7.style.transform = "translateX(100%)";
    
//     pw1_btn1.style.color = "grey";
//     pw1_btn2.style.color = "grey";
//     pw1_btn3.style.color = "white";
//     pw1_btn4.style.color = "grey";
//     pw1_btn5.style.color = "grey";
//     pw1_btn6.style.color = "grey";
//     pw1_btn7.style.color = "grey";
    
//     pw1_btn1.style.borderBottom = "2px solid grey";
//     pw1_btn2.style.borderBottom = "2px solid grey";
//     pw1_btn3.style.borderBottom = "2px solid white";
//     pw1_btn4.style.borderBottom = "2px solid grey";
//     pw1_btn5.style.borderBottom = "2px solid grey";
//     pw1_btn6.style.borderBottom = "2px solid grey";
//     pw1_btn7.style.borderBottom = "2px solid grey";
// }

// function open_pw1_4() {

//     pw1_img1.style.transform = "translateX(100%)";
//     pw1_img2.style.transform = "translateX(100%)";
//     pw1_img3.style.transform = "translateX(100%)";
//     pw1_img4.style.transform = "translateX(0)";
//     pw1_img5.style.transform = "translateX(100%)";
//     pw1_img6.style.transform = "translateX(100%)";
//     pw1_img7.style.transform = "translateX(100%)";
    
//     pw1_btn1.style.color = "grey";
//     pw1_btn2.style.color = "grey";
//     pw1_btn3.style.color = "grey";
//     pw1_btn4.style.color = "white";
//     pw1_btn5.style.color = "grey";
//     pw1_btn6.style.color = "grey";
//     pw1_btn7.style.color = "grey";
    
//     pw1_btn1.style.borderBottom = "2px solid grey";
//     pw1_btn2.style.borderBottom = "2px solid grey";
//     pw1_btn3.style.borderBottom = "2px solid grey";
//     pw1_btn4.style.borderBottom = "2px solid white";
//     pw1_btn5.style.borderBottom = "2px solid grey";
//     pw1_btn6.style.borderBottom = "2px solid grey";
//     pw1_btn7.style.borderBottom = "2px solid grey";
// }

// function open_pw1_5() {

//     pw1_img1.style.transform = "translateX(100%)";
//     pw1_img2.style.transform = "translateX(100%)";
//     pw1_img3.style.transform = "translateX(100%)";
//     pw1_img4.style.transform = "translateX(100%)";
//     pw1_img5.style.transform = "translateX(0)";
//     pw1_img6.style.transform = "translateX(100%)";
//     pw1_img7.style.transform = "translateX(100%)";
    
//     pw1_btn1.style.color = "grey";
//     pw1_btn2.style.color = "grey";
//     pw1_btn3.style.color = "grey";
//     pw1_btn4.style.color = "grey";
//     pw1_btn5.style.color = "white";
//     pw1_btn6.style.color = "grey";
//     pw1_btn7.style.color = "grey";

//     pw1_btn1.style.borderBottom = "2px solid grey";
//     pw1_btn2.style.borderBottom = "2px solid grey";
//     pw1_btn3.style.borderBottom = "2px solid grey";
//     pw1_btn4.style.borderBottom = "2px solid grey";
//     pw1_btn5.style.borderBottom = "2px solid white";
//     pw1_btn6.style.borderBottom = "2px solid grey";
//     pw1_btn7.style.borderBottom = "2px solid grey";
    
// }

// function open_pw1_6() {

//     pw1_img1.style.transform = "translateX(100%)";
//     pw1_img2.style.transform = "translateX(100%)";
//     pw1_img3.style.transform = "translateX(100%)";
//     pw1_img4.style.transform = "translateX(100%)";
//     pw1_img5.style.transform = "translateX(100%)";
//     pw1_img6.style.transform = "translateX(0)";
//     pw1_img7.style.transform = "translateX(100%)";
    
//     pw1_btn1.style.color = "grey";
//     pw1_btn2.style.color = "grey";
//     pw1_btn3.style.color = "grey";
//     pw1_btn4.style.color = "grey";
//     pw1_btn5.style.color = "grey";
//     pw1_btn6.style.color = "white";
//     pw1_btn7.style.color = "grey";

//     pw1_btn1.style.borderBottom = "2px solid grey";
//     pw1_btn2.style.borderBottom = "2px solid grey";
//     pw1_btn3.style.borderBottom = "2px solid grey";
//     pw1_btn4.style.borderBottom = "2px solid grey";
//     pw1_btn5.style.borderBottom = "2px solid grey";
//     pw1_btn6.style.borderBottom = "2px solid white";
//     pw1_btn7.style.borderBottom = "2px solid grey";
    
// }

// function open_pw1_7() {

//     pw1_img1.style.transform = "translateX(100%)";
//     pw1_img2.style.transform = "translateX(100%)";
//     pw1_img3.style.transform = "translateX(100%)";
//     pw1_img4.style.transform = "translateX(100%)";
//     pw1_img5.style.transform = "translateX(100%)";
//     pw1_img6.style.transform = "translateX(100%)";
//     pw1_img7.style.transform = "translateX(0)";
    
//     pw1_btn1.style.color = "grey";
//     pw1_btn2.style.color = "grey";
//     pw1_btn3.style.color = "grey";
//     pw1_btn4.style.color = "grey";
//     pw1_btn5.style.color = "grey";
//     pw1_btn6.style.color = "grey";
//     pw1_btn7.style.color = "white";

//     pw1_btn1.style.borderBottom = "2px solid grey";
//     pw1_btn2.style.borderBottom = "2px solid grey";
//     pw1_btn3.style.borderBottom = "2px solid grey";
//     pw1_btn4.style.borderBottom = "2px solid grey";
//     pw1_btn5.style.borderBottom = "2px solid grey";
//     pw1_btn6.style.borderBottom = "2px solid grey";
//     pw1_btn7.style.borderBottom = "2px solid white";
    
// }


var pw2_img1 = document.getElementById("pw2_img1");
var pw2_img2 = document.getElementById("pw2_img2");
// var pw2_img3 = document.getElementById("pw2_img3");
// var pw2_img4 = document.getElementById("pw2_img4");
// var pw2_img5 = document.getElementById("pw2_img5");
// var pw2_img6 = document.getElementById("pw2_img6");
// var pw2_img7 = document.getElementById("pw2_img7");

var pw2_btn1 = document.getElementById("pw2_btn1");
var pw2_btn2 = document.getElementById("pw2_btn2");
// var pw2_btn3 = document.getElementById("pw2_btn3");
// var pw2_btn4 = document.getElementById("pw2_btn4");
// var pw2_btn5 = document.getElementById("pw2_btn5");
// var pw2_btn6 = document.getElementById("pw2_btn6");
// var pw2_btn7 = document.getElementById("pw2_btn7");

function open_pw2_1() {

    pw2_img1.style.transform = "translateX(0)";
    pw2_img2.style.transform = "translateX(100%)";
    // pw2_img3.style.transform = "translateX(100%)";
    // pw2_img4.style.transform = "translateX(100%)";
    // pw2_img5.style.transform = "translateX(100%)";
    // pw2_img6.style.transform = "translateX(100%)";
    // pw2_img7.style.transform = "translateX(100%)";

    pw2_btn1.style.color = "white";
    pw2_btn2.style.color = "grey";
    // pw2_btn3.style.color = "grey";
    // pw2_btn4.style.color = "grey";
    // pw2_btn5.style.color = "grey";
    // pw2_btn6.style.color = "grey";
    // pw2_btn7.style.color = "grey";

    pw2_btn1.style.borderBottom = "2px solid white";
    pw2_btn2.style.borderBottom = "2px solid grey";
    // pw2_btn3.style.borderBottom = "2px solid grey";
    // pw2_btn4.style.borderBottom = "2px solid grey";
    // pw2_btn5.style.borderBottom = "2px solid grey";
    // pw2_btn6.style.borderBottom = "2px solid grey";
    // pw2_btn7.style.borderBottom = "2px solid grey";

}

function open_pw2_2() {

    pw2_img1.style.transform = "translateX(100%)";
    pw2_img2.style.transform = "translateX(0)";
    // pw2_img3.style.transform = "translateX(100%)";
    // pw2_img4.style.transform = "translateX(100%)";
    // pw2_img5.style.transform = "translateX(100%)";
    // pw2_img6.style.transform = "translateX(100%)";
    // pw2_img7.style.transform = "translateX(100%)";
    
    pw2_btn1.style.color = "grey";
    pw2_btn2.style.color = "white";
    // pw2_btn3.style.color = "grey";
    // pw2_btn4.style.color = "grey";
    // pw2_btn5.style.color = "grey";
    // pw2_btn6.style.color = "grey";
    // pw2_btn7.style.color = "grey";

    pw2_btn1.style.borderBottom = "2px solid grey";
    pw2_btn2.style.borderBottom = "2px solid white";
    // pw2_btn3.style.borderBottom = "2px solid grey";
    // pw2_btn4.style.borderBottom = "2px solid grey";
    // pw2_btn5.style.borderBottom = "2px solid grey";
    // pw2_btn6.style.borderBottom = "2px solid grey";
    // pw2_btn7.style.borderBottom = "2px solid grey";
    
}

// function open_pw2_3() {

//     pw2_img1.style.transform = "translateX(100%)";
//     pw2_img2.style.transform = "translateX(100%)";
//     pw2_img3.style.transform = "translateX(0)";
//     pw2_img4.style.transform = "translateX(100%)";
//     pw2_img5.style.transform = "translateX(100%)";
//     pw2_img6.style.transform = "translateX(100%)";
//     pw2_img7.style.transform = "translateX(100%)";
    
//     pw2_btn1.style.color = "grey";
//     pw2_btn2.style.color = "grey";
//     pw2_btn3.style.color = "white";
//     pw2_btn4.style.color = "grey";
//     pw2_btn5.style.color = "grey";
//     pw2_btn6.style.color = "grey";
//     pw2_btn7.style.color = "grey";
    
//     pw2_btn1.style.borderBottom = "2px solid grey";
//     pw2_btn2.style.borderBottom = "2px solid grey";
//     pw2_btn3.style.borderBottom = "2px solid white";
//     pw2_btn4.style.borderBottom = "2px solid grey";
//     pw2_btn5.style.borderBottom = "2px solid grey";
//     pw2_btn6.style.borderBottom = "2px solid grey";
//     pw2_btn7.style.borderBottom = "2px solid grey";
// }

// function open_pw2_4() {

//     pw2_img1.style.transform = "translateX(100%)";
//     pw2_img2.style.transform = "translateX(100%)";
//     pw2_img3.style.transform = "translateX(100%)";
//     pw2_img4.style.transform = "translateX(0)";
//     pw2_img5.style.transform = "translateX(100%)";
//     pw2_img6.style.transform = "translateX(100%)";
//     pw2_img7.style.transform = "translateX(100%)";
    
//     pw2_btn1.style.color = "grey";
//     pw2_btn2.style.color = "grey";
//     pw2_btn3.style.color = "grey";
//     pw2_btn4.style.color = "white";
//     pw2_btn5.style.color = "grey";
//     pw2_btn6.style.color = "grey";
//     pw2_btn7.style.color = "grey";
    
//     pw2_btn1.style.borderBottom = "2px solid grey";
//     pw2_btn2.style.borderBottom = "2px solid grey";
//     pw2_btn3.style.borderBottom = "2px solid grey";
//     pw2_btn4.style.borderBottom = "2px solid white";
//     pw2_btn5.style.borderBottom = "2px solid grey";
//     pw2_btn6.style.borderBottom = "2px solid grey";
//     pw2_btn7.style.borderBottom = "2px solid grey";
// }

// function open_pw2_5() {

//     pw2_img1.style.transform = "translateX(100%)";
//     pw2_img2.style.transform = "translateX(100%)";
//     pw2_img3.style.transform = "translateX(100%)";
//     pw2_img4.style.transform = "translateX(100%)";
//     pw2_img5.style.transform = "translateX(0)";
//     pw2_img6.style.transform = "translateX(100%)";
//     pw2_img7.style.transform = "translateX(100%)";
    
//     pw2_btn1.style.color = "grey";
//     pw2_btn2.style.color = "grey";
//     pw2_btn3.style.color = "grey";
//     pw2_btn4.style.color = "grey";
//     pw2_btn5.style.color = "white";
//     pw2_btn6.style.color = "grey";
//     pw2_btn7.style.color = "grey";

//     pw2_btn1.style.borderBottom = "2px solid grey";
//     pw2_btn2.style.borderBottom = "2px solid grey";
//     pw2_btn3.style.borderBottom = "2px solid grey";
//     pw2_btn4.style.borderBottom = "2px solid grey";
//     pw2_btn5.style.borderBottom = "2px solid white";
//     pw2_btn6.style.borderBottom = "2px solid grey";
//     pw2_btn7.style.borderBottom = "2px solid grey";
    
// }

// function open_pw2_6() {

//     pw2_img1.style.transform = "translateX(100%)";
//     pw2_img2.style.transform = "translateX(100%)";
//     pw2_img3.style.transform = "translateX(100%)";
//     pw2_img4.style.transform = "translateX(100%)";
//     pw2_img5.style.transform = "translateX(100%)";
//     pw2_img6.style.transform = "translateX(0)";
//     pw2_img7.style.transform = "translateX(100%)";
    
//     pw2_btn1.style.color = "grey";
//     pw2_btn2.style.color = "grey";
//     pw2_btn3.style.color = "grey";
//     pw2_btn4.style.color = "grey";
//     pw2_btn5.style.color = "grey";
//     pw2_btn6.style.color = "white";
//     pw2_btn7.style.color = "grey";

//     pw2_btn1.style.borderBottom = "2px solid grey";
//     pw2_btn2.style.borderBottom = "2px solid grey";
//     pw2_btn3.style.borderBottom = "2px solid grey";
//     pw2_btn4.style.borderBottom = "2px solid grey";
//     pw2_btn5.style.borderBottom = "2px solid grey";
//     pw2_btn6.style.borderBottom = "2px solid white";
//     pw2_btn7.style.borderBottom = "2px solid grey";
    
// }

// function open_pw2_7() {

//     pw2_img1.style.transform = "translateX(100%)";
//     pw2_img2.style.transform = "translateX(100%)";
//     pw2_img3.style.transform = "translateX(100%)";
//     pw2_img4.style.transform = "translateX(100%)";
//     pw2_img5.style.transform = "translateX(100%)";
//     pw2_img6.style.transform = "translateX(100%)";
//     pw2_img7.style.transform = "translateX(0)";

//     pw2_btn1.style.color = "grey";
//     pw2_btn2.style.color = "grey";
//     pw2_btn3.style.color = "grey";
//     pw2_btn4.style.color = "grey";
//     pw2_btn5.style.color = "grey";
//     pw2_btn6.style.color = "grey";
//     pw2_btn7.style.color = "white";

//     pw2_btn1.style.borderBottom = "2px solid grey";
//     pw2_btn2.style.borderBottom = "2px solid grey";
//     pw2_btn3.style.borderBottom = "2px solid grey";
//     pw2_btn4.style.borderBottom = "2px solid grey";
//     pw2_btn5.style.borderBottom = "2px solid grey";
//     pw2_btn6.style.borderBottom = "2px solid grey";
//     pw2_btn7.style.borderBottom = "2px solid white";
    
// }

var pw3_img1 = document.getElementById("pw3_img1");
var pw3_img2 = document.getElementById("pw3_img2");
var pw3_img3 = document.getElementById("pw3_img3");
var pw3_img4 = document.getElementById("pw3_img4");
var pw3_img5 = document.getElementById("pw3_img5");
var pw3_img6 = document.getElementById("pw3_img6");
var pw3_img7 = document.getElementById("pw3_img7");

var pw3_btn1 = document.getElementById("pw3_btn1");
var pw3_btn2 = document.getElementById("pw3_btn2");
var pw3_btn3 = document.getElementById("pw3_btn3");
var pw3_btn4 = document.getElementById("pw3_btn4");
var pw3_btn5 = document.getElementById("pw3_btn5");
var pw3_btn6 = document.getElementById("pw3_btn6");
var pw3_btn7 = document.getElementById("pw3_btn7");

function open_pw3_1() {

    pw3_img1.style.transform = "translateX(0)";
    pw3_img2.style.transform = "translateX(100%)";
    pw3_img3.style.transform = "translateX(100%)";
    pw3_img4.style.transform = "translateX(100%)";
    pw3_img5.style.transform = "translateX(100%)";
    pw3_img6.style.transform = "translateX(100%)";
    pw3_img7.style.transform = "translateX(100%)";

    pw3_btn1.style.color = "black";
    pw3_btn2.style.color = "grey";
    pw3_btn3.style.color = "grey";
    pw3_btn4.style.color = "grey";
    pw3_btn5.style.color = "grey";
    pw3_btn6.style.color = "grey";
    pw3_btn7.style.color = "grey";

    pw3_btn1.style.borderBottom = "2px solid black";
    pw3_btn2.style.borderBottom = "2px solid grey";
    pw3_btn3.style.borderBottom = "2px solid grey";
    pw3_btn4.style.borderBottom = "2px solid grey";
    pw3_btn5.style.borderBottom = "2px solid grey";
    pw3_btn6.style.borderBottom = "2px solid grey";
    pw3_btn7.style.borderBottom = "2px solid grey";

}

function open_pw3_2() {

    pw3_img1.style.transform = "translateX(100%)";
    pw3_img2.style.transform = "translateX(0)";
    pw3_img3.style.transform = "translateX(100%)";
    pw3_img4.style.transform = "translateX(100%)";
    pw3_img5.style.transform = "translateX(100%)";
    pw3_img6.style.transform = "translateX(100%)";
    pw3_img7.style.transform = "translateX(100%)";
    
    pw3_btn1.style.color = "grey";
    pw3_btn2.style.color = "black";
    pw3_btn3.style.color = "grey";
    pw3_btn4.style.color = "grey";
    pw3_btn5.style.color = "grey";
    pw3_btn6.style.color = "grey";
    pw3_btn7.style.color = "grey";

    pw3_btn1.style.borderBottom = "2px solid grey";
    pw3_btn2.style.borderBottom = "2px solid black";
    pw3_btn3.style.borderBottom = "2px solid grey";
    pw3_btn4.style.borderBottom = "2px solid grey";
    pw3_btn5.style.borderBottom = "2px solid grey";
    pw3_btn6.style.borderBottom = "2px solid grey";
    pw3_btn7.style.borderBottom = "2px solid grey";
    
}

function open_pw3_3() {

    pw3_img1.style.transform = "translateX(100%)";
    pw3_img2.style.transform = "translateX(100%)";
    pw3_img3.style.transform = "translateX(0)";
    pw3_img4.style.transform = "translateX(100%)";
    pw3_img5.style.transform = "translateX(100%)";
    pw3_img6.style.transform = "translateX(100%)";
    pw3_img7.style.transform = "translateX(100%)";
    
    pw3_btn1.style.color = "grey";
    pw3_btn2.style.color = "grey";
    pw3_btn3.style.color = "black";
    pw3_btn4.style.color = "grey";
    pw3_btn5.style.color = "grey";
    pw3_btn6.style.color = "grey";
    pw3_btn7.style.color = "grey";
    
    pw3_btn1.style.borderBottom = "2px solid grey";
    pw3_btn2.style.borderBottom = "2px solid grey";
    pw3_btn3.style.borderBottom = "2px solid black";
    pw3_btn4.style.borderBottom = "2px solid grey";
    pw3_btn5.style.borderBottom = "2px solid grey";
    pw3_btn6.style.borderBottom = "2px solid grey";
    pw3_btn7.style.borderBottom = "2px solid grey";
}

function open_pw3_4() {

    pw3_img1.style.transform = "translateX(100%)";
    pw3_img2.style.transform = "translateX(100%)";
    pw3_img3.style.transform = "translateX(100%)";
    pw3_img4.style.transform = "translateX(0)";
    pw3_img5.style.transform = "translateX(100%)";
    pw3_img6.style.transform = "translateX(100%)";
    pw3_img7.style.transform = "translateX(100%)";
    
    pw3_btn1.style.color = "grey";
    pw3_btn2.style.color = "grey";
    pw3_btn3.style.color = "grey";
    pw3_btn4.style.color = "black";
    pw3_btn5.style.color = "grey";
    pw3_btn6.style.color = "grey";
    pw3_btn7.style.color = "grey";
    
    pw3_btn1.style.borderBottom = "2px solid grey";
    pw3_btn2.style.borderBottom = "2px solid grey";
    pw3_btn3.style.borderBottom = "2px solid grey";
    pw3_btn4.style.borderBottom = "2px solid black";
    pw3_btn5.style.borderBottom = "2px solid grey";
    pw3_btn6.style.borderBottom = "2px solid grey";
    pw3_btn7.style.borderBottom = "2px solid grey";
}

function open_pw3_5() {

    pw3_img1.style.transform = "translateX(100%)";
    pw3_img2.style.transform = "translateX(100%)";
    pw3_img3.style.transform = "translateX(100%)";
    pw3_img4.style.transform = "translateX(100%)";
    pw3_img5.style.transform = "translateX(0)";
    pw3_img6.style.transform = "translateX(100%)";
    pw3_img7.style.transform = "translateX(100%)";
    
    pw3_btn1.style.color = "grey";
    pw3_btn2.style.color = "grey";
    pw3_btn3.style.color = "grey";
    pw3_btn4.style.color = "grey";
    pw3_btn5.style.color = "black";
    pw3_btn6.style.color = "grey";
    pw3_btn7.style.color = "grey";

    pw3_btn1.style.borderBottom = "2px solid grey";
    pw3_btn2.style.borderBottom = "2px solid grey";
    pw3_btn3.style.borderBottom = "2px solid grey";
    pw3_btn4.style.borderBottom = "2px solid grey";
    pw3_btn5.style.borderBottom = "2px solid black";
    pw3_btn6.style.borderBottom = "2px solid grey";
    pw3_btn7.style.borderBottom = "2px solid grey";
    
}

function open_pw3_6() {

    pw3_img1.style.transform = "translateX(100%)";
    pw3_img2.style.transform = "translateX(100%)";
    pw3_img3.style.transform = "translateX(100%)";
    pw3_img4.style.transform = "translateX(100%)";
    pw3_img5.style.transform = "translateX(100%)";
    pw3_img6.style.transform = "translateX(0)";
    pw3_img7.style.transform = "translateX(100%)";
    
    pw3_btn1.style.color = "grey";
    pw3_btn2.style.color = "grey";
    pw3_btn3.style.color = "grey";
    pw3_btn4.style.color = "grey";
    pw3_btn5.style.color = "grey";
    pw3_btn6.style.color = "black";
    pw3_btn7.style.color = "grey";

    pw3_btn1.style.borderBottom = "2px solid grey";
    pw3_btn2.style.borderBottom = "2px solid grey";
    pw3_btn3.style.borderBottom = "2px solid grey";
    pw3_btn4.style.borderBottom = "2px solid grey";
    pw3_btn5.style.borderBottom = "2px solid grey";
    pw3_btn6.style.borderBottom = "2px solid black";
    pw3_btn7.style.borderBottom = "2px solid grey";
    
}

function open_pw3_7() {

    pw3_img1.style.transform = "translateX(100%)";
    pw3_img2.style.transform = "translateX(100%)";
    pw3_img3.style.transform = "translateX(100%)";
    pw3_img4.style.transform = "translateX(100%)";
    pw3_img5.style.transform = "translateX(100%)";
    pw3_img6.style.transform = "translateX(100%)";
    pw3_img7.style.transform = "translateX(0)";

    pw3_btn1.style.color = "grey";
    pw3_btn2.style.color = "grey";
    pw3_btn3.style.color = "grey";
    pw3_btn4.style.color = "grey";
    pw3_btn5.style.color = "grey";
    pw3_btn6.style.color = "grey";
    pw3_btn7.style.color = "black";

    pw3_btn1.style.borderBottom = "2px solid grey";
    pw3_btn2.style.borderBottom = "2px solid grey";
    pw3_btn3.style.borderBottom = "2px solid grey";
    pw3_btn4.style.borderBottom = "2px solid grey";
    pw3_btn5.style.borderBottom = "2px solid grey";
    pw3_btn6.style.borderBottom = "2px solid grey";
    pw3_btn7.style.borderBottom = "2px solid black";
    
}

