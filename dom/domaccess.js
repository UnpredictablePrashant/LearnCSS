console.log("loaded js")
function changeColor(newcolors) {
    var ele = document.getElementById("firstpara");
    ele.style.color = newcolors;
}

function changeBackgroundColor(newcolors){
    console.log("background change")
    var ele = document.getElementsByTagName("body");
    ele[0].style.backgroundColor = newcolors;
}

function counter(){
    console.log("Counting...")
    var ele = document.getElementsByName("web");
    console.log("Total number of web element: "+ele.length)
}
function classCounter(){
    var ele = document.getElementsByClassName("best");
    console.log("Total number of class with name best: "+ele.length)
}


//Adding new html element
function programmingLang(){
    var lang = ['C', 'Perl', 'Ruby', 'Lua', 'Javascript', 'Java', 'C#'];
    const randomLang = lang[Math.floor(Math.random() * lang.length)];
    var tag = document.createElement("li");
    tag.setAttribute("name", randomLang);
    var text = document.createTextNode(randomLang);
    tag.appendChild(text);
    var ele = document.getElementById("programList");   
    ele.appendChild(tag);
}

//Add name
function getMyName(){
    var name = document.getElementById("enterName").value;
    document.getElementById("name").innerHTML = name; 
}

//Change the value
function changeVal(){
    var ele = document.getElementById('aboutme');
    ele.innerHTML = "I like to play Cricket, Chess and CTFs.";
}

//Remove aboutme
function removeVal(){
    document.getElementById("aboutme").remove();
}

//Get all links
function attrLink(){
    var ele = document.getElementsByTagName("a");
    var str = "";
    for (let i = 0; i < ele.length; i++) {
        var href = ele[i].getAttribute("href");
        str = str + href + "<br>"
      }
    document.write(str);
    document.write("<br>");
}