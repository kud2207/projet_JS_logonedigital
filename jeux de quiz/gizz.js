/*Daclaration des variable***************************************/

//Variable de declanchement du jeux
const aff_stard = document.getElementById('aff_stard')

//Variale des reponce
const reponse_1 = document.getElementById('reponse_1')
const reponse_2 = document.getElementById('reponse_2')
const reponse_3 = document.getElementById('reponse_3')
const reponse_4 = document.getElementById('reponse_4')

//Variable  des Statistique du joueur
const aff_cmpt = document.getElementById('aff_cmpt')
const niv_up = document.getElementById('niv_up')
const niv_down = document.getElementById('niv_down')

//variable d'affiche de reponce

const aff_solution = document.getElementById('aff_solution')





/*Tableau de nos differents question****************************/

let tab_question1 = [

    //Question1
    {
        question_pose: `Quel sont les couleur du camer`,

        choix_1: `orange bleu rouge`,
        choix_2: `vert jaune rouge`,
        choix_3: `noir bleu blanch`,
        choix_4: `vert rouge jaune`,

        reponce: `reponse_4`
    },

    //Question2
    {
        question_pose: `Comment appelle t'on le feminin du chien`,

        choix_1: `chat`,
        choix_2: `chienne`,
        choix_3: `canard`,
        choix_4: `chiennne`,

        reponce: 'reponse_2'
    },

    //Question3
    {
        question_pose: `Donner le nom du president du cameroun`,

        choix_1: `paul biya`,
        choix_2: `jean paul biya`,
        choix_3: `biya claude`,
        choix_4: `biya jean`,

        reponce: `reponse_1`
    },

    //Question4
    {
        question_pose: `Comment dit'on "bonjour" en anglais `,

        choix_1: `good-mon`,
        choix_2: `good-afternom`,
        choix_3: `good-bae`,
        choix_4: `good_morning`,

        reponce: `reponse_4`
    },
]




/*Affiche de nos question et reponce*****************************/

//Determine le nombre de question du tableau
let nbr_question = tab_question1.length

//Fontion pour afficher les question
function afficheQuestion (){

    //Index de parcour du tableau
    const index_tab = Math.floor(Math.random() * nbr_question)

    aff_question.innerHTML ="<p>" + tab_question1[index_tab].question_pose +"<p>"
    reponse_1.innerHTML = tab_question1[index_tab].choix_1
    reponse_2.innerHTML = tab_question1[index_tab].choix_2
    reponse_3.innerHTML = tab_question1[index_tab].choix_3
    reponse_4.innerHTML = tab_question1[index_tab].choix_4


  var aaa = function aa(){
    alert('dd')
   }


}

if(tab_question1[index_tab]==tab_question1[0]){
    
    alert('ff')
  
}

     



