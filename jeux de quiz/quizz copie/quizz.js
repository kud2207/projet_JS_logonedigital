//Selections de nos elements
const start = document.getElementById('start ')
const quiz = document.getElementById('quiz ')
const question = document.getElementById('question')
const qimg = document.getElementById('qimg')
const choiceA = document.getElementById('A')
const choiceB = document.getElementById('B')
const choiceC = document.getElementById('C')
const choiceD = document.getElementById('D')
const counter = document.getElementById('counter')
const timeGauge = document.getElementById('timeGauge')
const progress = document.getElementById('progress')
const scoreDiv = document.getElementById('score')

//Nos questions

let questions = [

    //Question1
    {
        question_pose: `Quel sont les couleur du camer`,

        choiceA: `orange bleu rouge`,
        choiceB: `vert jaune rouge`,
        choiceC: `noir bleu blanch`,
        choiceD: `vert rouge jaune`,

        reponce: `D`
    },

    //Question2
    {
        question_pose: `Comment appelle t'on le feminin du chien`,

         choiceA:  `chat`,
        choiceB:  `chienne`,
         choiceC: `canard`,
        choiceD: `chiennne`,

        reponce: 'B'
    },

    //Question3
    {
        question_pose: `Donner le nom du president du cameroun`,

        choiceA: `paul biya`,
        choiceB: `jean paul biya`,
        choiceC: `biya claude`,
        choiceD:`biya jean`,

        reponce: `A`
    },

    //Question4
    {
        question_pose: `Comment dit'on "bonjour" en anglais `,

        choiceA: `good-mon`,
        choiceB: `good-afternom`,
        choiceC: `good-bae`,
        choiceD: `good_morning`,

        reponce: `D`
    },
]
 
//creation de variable de compte
const lastQuestion = questions.length ;
let runningQuestion = Math.floor(Math.random() * lastQuestion) ;
let i = 0 
let score =0

//Affiche de  question

function renderQuestion(){
    let q = questions[runningQuestion];

    question.innerHTML = q.question_pose
    choiceA.innerHTML = q.choiceA
    choiceB.innerHTML = q.choiceB
    choiceC.innerHTML = q.choiceC
    choiceD.innerHTML = q.choiceD
}



//Solution au questions funtion mere de cestcorrect et cestpascorrect

function checkAnswer (answer){
    if( answer == questions[runningQuestion].reponce){
    score ++
    cestcorrect()
    
}
else{
    cestpascorrect()
}
//Question suivante
if(i < lastQuestion){
    i++;
    runningQuestion = Math.floor(Math.random() * lastQuestion) ;

   
    renderQuestion()
}
}


//Si correct Funtion enfant de ckeckannswer

function cestcorrect(){
    document.getElementById('progress').style.backgroundColor='green'
}
//si c'est incorrect
function cestpascorrect(){
    progress.style.backgroundColor='red'
}


