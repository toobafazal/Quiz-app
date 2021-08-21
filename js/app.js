const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showscore = document.querySelector('#showscore');

var startbtn = document.getElementById("start-btn");
var quizQues = document.getElementById("quizQues");
var next = document.getElementById("next-btn");
var user = {}
var timeInterval;
var userName = document.getElementById("username")
var userEmail = document.getElementById("email")
var cardCont = document.getElementsByClassName("card-cont")
var name_div = document.getElementById("name");
var form = document.getElementById("main");
var secondsContainer = document.getElementById("seconds");
var minutesContainer = document.getElementById("minutes");

const loginuser = () => {
    
    if (userEmail.value === "" || userName.value === "") {
        alert("Please fill the input feilds");
    }
     else {
        form.classList.add("hide");
        cardCont[0].classList.remove("hide");
        name_div.innerHTML = `Name: ${userName.value}`
    }
}

function startquiz(btn) {
    alert("you have only one minute to complete the quiz");
    quizQues.classList.remove("hide")
    startbtn.classList.add("hide");
    change.classList.remove('hide')
    loadQuestion();

timeInterval = setInterval(function () {
    seconds++;
    // to increase the minutes after sixty second
    if ((seconds / 60) == 1) {
        seconds = 0;
        minutes++
    }
    if (minutes == 1) {
        alert("time's up");
        clearInterval(timeInterval);
        cardCont[0].classList.add("hide");
        resultDiv.classList.remove("hide");
        resultName.innerHTML = `Name:${userName.value}`
        cor_btn.innerHTML = correct
        wro_btn.innerHTML = wrong
        tot_score.innerHTML = score
    }
    secondsContainer.innerHTML = String(seconds).padStart(2, '0');
    minutesContainer.innerHTML = String(minutes).padStart(2, '0');
}, 1000)

}
var questionArray = [
    {
    question: "Full Form of RAM is?",
    answer: "ans1",
       a: "Random access memory",
        b:"read only memory",
       c: "right access memory",
        d: "none of the above"

    
    },

    {
        question: "Full Form of CPU is?",
        answer: "ans2",
           a: "control  Processing Unit",
           b: "Central Processing Unit",
            c:" control panel unit",
            d:"none of the above"
    
        
        },

        {
            question: "Full Form of Email is?",
            answer: "ans3",
               a: "easy mail",
                b:"electric mail",
                c:"Electronic Mail",
                d:"none of the above"
        
            },

            {
                question: "Full Form of HTML is?",
                answer: "ans1",
                    a:"Hyper Text MarkUp Language",
                    b:"Hyper Text Marking Language",
                    c:"Hyper Transfer MarkUp Language",
                    d:"none of the above"
            
                },

                {
                    question: "Full Form of LCD is?",
                    answer: "ans3",
                        a:"Learn crystal display",
                        b:"liquid cross display",
                        c:"Liquid Crystal Display",
                        d:"none of the above"
                
                    },
];



let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = questionArray[questionCount];

question.innerText = questionList.question;
option1.innerText = questionList.a;
option2.innerText = questionList.b;
option3.innerText = questionList.c;
option4.innerText = questionList.d;

}
loadQuestion();
const getcheckanswer = () =>{
    let answer;
    answers.forEach((curAnselem) => {
        if(curAnselem.checked){
            answer = curAnselem.id;
        }
    });
    return answer;

};
const deselectAll = () =>{
    answers.forEach((curAnselem) => curAnselem.checked = false)
}
submit.addEventListener('click', () =>{

    const checkanswer = getcheckanswer();
    console.log(checkanswer);
    if(checkanswer === questionArray[questionCount].ans){
        score++;
    };
    questionCount++;
    deselectAll();
    if(questionCount < questionArray.length){
        loadQuestion();
    }else{
        showscore.innerHTML = ` 
        <h3> your score is ${score}/${questionArray.length} </h3>
        <button class="btn" onClick="location.reload()">Play Again</button>`;

        showscore.classList.remove('scoreArea');
    }
});
