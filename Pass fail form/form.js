// var Marks=0;
// function Submit(){
//     Marks = parseInt(form.Marks.value)
// }
// if(Marks>350){
//     alert("Congratulation you are pass")
// }
// else{
//     alert("sorry your are fail beter luck next time")
// }


function Submit(){
    var Marks = parseInt(document.forms["form"]["Marks"].value);
    Name = (document.forms["form"]["Name"].value);
    if(Marks > 350){
        alert("Congratulations, " +Name+ " you have passed!");
    }else{
        alert("Sorry, " +Name+ " you have failed. Better luck next time.");
    }
}
