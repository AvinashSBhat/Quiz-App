var but = document.querySelectorAll(".topic-but");
but[0].onclick=()=>{
    sessionStorage.setItem("a", 0);
    location.href="quiz.html"
}
but[1].onclick=()=>{
    sessionStorage.setItem("a", 1);
    location.href="quiz.html"
}
but[2].onclick=()=>{
    sessionStorage.setItem("a", 2);
    location.href="quiz.html"
}
but[3].onclick=()=>{
    sessionStorage.setItem("a", 3);
    location.href="quiz.html"
}