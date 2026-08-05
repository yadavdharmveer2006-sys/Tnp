const search = document.getElementById("companySearch");

if(search){
    search.addEventListener("keyup", function(){

        let value = this.value.toLowerCase();

        document.querySelectorAll(".company-card").forEach(card=>{

            if(card.innerText.toLowerCase().includes(value)){
                card.style.display="block";
            }
            else{
                card.style.display="none";
            }

        });

    });
}

document.querySelectorAll("button").forEach(btn=>{

    btn.addEventListener("click",function(){

        if(this.innerText==="Explore"){
            alert("Recruiter information will be available soon.");
        }

        if(this.innerText==="View Details"){
            alert("Placement drive details will be updated by the T&P Cell.");
        }

    });

});sconst scoreBtn = document.getElementById("scoreBtn");

if(scoreBtn){

scoreBtn.addEventListener("click",()=>{

const score=Math.floor(Math.random()*21)+80;

document.getElementById("scoreResult").innerHTML=score+"%";

if(score>=95){

document.getElementById("scoreMessage").innerHTML="Excellent! You are placement ready.";

}
else if(score>=90){

document.getElementById("scoreMessage").innerHTML="Very Good! Keep practicing aptitude and interviews.";

}
else{

document.getElementById("scoreMessage").innerHTML="Good progress! Improve coding and communication skills.";

}

});

}