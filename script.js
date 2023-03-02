const questionNum = document.getElementById("order")
const questionNode = document.getElementById("question")
const ans1 = document.getElementById("ans1")
const answ1 = document.getElementById("answ1")
const answer1 = document.getElementById("answer1")
const ans2 = document.getElementById("ans2")
const answ2 = document.getElementById("answ2")
const answer2 = document.getElementById("answer2")
const ans3 = document.getElementById("ans3")
const answ3 = document.getElementById("answ3")
const answer3 = document.getElementById("answer3")
const ans4 = document.getElementById("ans4")
const answ4 = document.getElementById("answ4")
const answer4 = document.getElementById("answer4")
const allAns = document.getElementById("allAns")
const yes = document.getElementById("yes")
const no = document.getElementById("no")
const btnNode = document.getElementById("btn")
const result = document.getElementById("res")
const start = document.getElementById("start")
const end = document.getElementById("end")
const summary = document.getElementById("summary")
const radioButtons = document.querySelectorAll('input[name="ans"]')
const cheet = document.getElementById('cheetlist')
const activate = document.getElementById('activate')

const answe1 = document.getElementById("answe1")
const answe2 = document.getElementById("answe2")
const answe3 = document.getElementById("answe3")
const answe4 = document.getElementById("answe4")
const answi1 = document.getElementById("answi1")
const answi2 = document.getElementById("answi2")
const answi3 = document.getElementById("answi3")
const answi4 = document.getElementById("answi4")



const questions = [
    {
        question: "Verilənlərdən biri əsas nitq hissələrinə aid deyil:",
        answers: ["İsim", "Ədat", "Sifət", "Say"],
        correctAns: "2"
    },

    {
        question: "Aşağıdakılardan hansılar ismin sualı deyil?",
        answers: ["nə? hara?", "kim? nə?", "kim? hara?", "Neçə? necə?"],
        correctAns: "4"
    },
    
    {
        question: "Hansı isimdir?",
        answers: ["çirkli", "şirin", "qaçmaq", "Perviz"],
        correctAns: "4"
    },

    {
        question: "Bu sözlərdən biri xüsusi isim kimi də işlədilə bilər.",
        answers: ["qoçaq", "arzu", "yarpaq", "bıçaq"],
        correctAns: "2"
    },
    
    {
        question: "Hansıları ümumi isimlərdir?",
        answers: ["Külək, yol, Gəncə", "Qazax, Banu, Həsən", "Ot, Lalə, Bakı", "Ağac, ev, bina"],
        correctAns: "4"
    },

    {
        question: "Ümumi isimlərdən biri xüsusi isim kimi işlədilə bilməz:",
        answers: ["odun", "lala", "durna", "aslan"],
        correctAns: "1"
    },

    {
        question: "Bu sözlərdən biri Kimdə? sualına cavab verə bilər.",
        answers: ["Dəvədə", "Dələdə", "Nəvədə", "Nağılda"],
        correctAns: "3"
    },

    {
        question: "Bu sözlərdən biri Haranı? sualına cavab verə bilər.",
        answers: ["İnsanı", "Küçəni", "Keçini", "uşağı"],
        correctAns: "2"
    },

    {
        question: "Bu sözlərdən biri Nədən? sualına cavab verə bilər.",
        answers: ["Kənddən", "dostumdan", "şəhərdən", "canavardan"],
        correctAns: "4"
    },

    {
        question: "Hansı söz isim deyil?",
        answers: ["bilik", "yataq", "tapşırıq", "parlaq"],
        correctAns: "4"
    },

    {
        question: "Xüsusi isimlər verilən cərgəni göstərin:",
        answers: ["Kamal, Qobustan, Alabaş", "Əsər, uşaq, küçə", "Ağac, jurnal, qazet", "Ağac, Elbrus, dağ"],
        correctAns: "1"
    },

    {
        question: "Ümumi isimləri göstərin",
        answers: ["Xəritə, telefon, karandaş, Lalə", "la Lala, Gəncə, Qəbələ, Arzula", "Duma, Baki, kitab, ağac", "Qəzet, kitab, uşaq, şagird"],
        correctAns: "4"
    },

    {
        question: "Lalə nə zaman xüsusi isim kimi işlənə bilər?",
        answers: ["Qız adı bildirəndə", "Xitab kimi işlənəndə bildirəndə", "Gül adı bildirəndə", "Əşya bildirəndə"],
        correctAns: "1"
    },

    {
        question: "Cümlələrdən biri isimlə başlayır:",
        answers: ["Xəstələr palataya köçürüldü.", "İgidlər döyüşdən qələbə ilə döndülər.", " Uşaqlar həyətdə oyun oynayırlar.", "Az danışmaq lazımdır"],
        correctAns: "3"
    },

    {
        question: "“Həyətə, dosta” sözləri hansı suallara cavab verir?",
        answers: ["Kimi? Nəyi?", "Haraya? Kimə?", "Harada? Kimdə?", "Nəyə? Kimi?"],
        correctAns: "2"
    },

    {
        question: "Ümumi isim nəyə deyilir?",
        answers: ["Morfologiyaya aiddir ona görə", "Əşyanın ümumiliyini bildirir", "Ümumi isimlər kiçik yazılır ona görə", "Xüsusi ismin yanında böyük yazılır"],
        correctAns: "2"
    },

    {
        question: "Cəm şəkilçisi qəbul etmiş ismi göstərin:",
        answers: ["kitab", "kitabın", "kitablar", "kitabdan"],
        correctAns: "3"
    },

    {
        question: "Cəm şəkilçisi qəbul etmiş isim hansıdır?",
        answers: ["oğullar", "igidlər", "birincilər", "gəldilər"],
        correctAns: "1"
    },

    {
        question: "Biri xüsusi isim deyil:",
        answers: ["Bakı", "Şəki", "Şəkil", "Gəncə"],
        correctAns: "3"
    },

    {
        question: "Cərgələrin birində yalnız sadə isimlər verilmişdir:",
        answers: ["kitab, ayaqqabı", "toyxana, şüşəbənd", "Ağdaş, qar", "böyürtkən, dağıntı"],
        correctAns: "4"
    },

    {
        question: "Hansı sıradakı bütün sözlər nə? sualına cavab verir",
        answers: ["dövlət, xoşbəxtlik, bağban", "dəniz, qaya, nəvə", "torpaq, ləpir, dostluq", "gözəl,həkim,it"],
        correctAns: "3"
    }
]



let count = 0
let correct = 0


btnNode.addEventListener("click", ()=>{
    if (count===0){
        start.style.display="none"
        allAns.style.display="flex"
        btnNode.innerHTML="Cavab ver"
        questionNum.innerHTML = `Sual ${count+1}:`
        questionNode.innerHTML = questions[count].question
        ans1.innerHTML = questions[count].answers[0]
        ans2.innerHTML = questions[count].answers[1]
        ans3.innerHTML = questions[count].answers[2]
        ans4.innerHTML = questions[count].answers[3]
        count++
    } else if (allAns.style.display==="none" && count <= questions.length){
        yes.style.display="none"
        no.style.display="none"
        if (count!==questions.length){
            allAns.style.display="flex"
            btnNode.innerHTML="Cavab ver"
            questionNum.innerHTML = `Sual ${count+1}:`
                questionNode.innerHTML = questions[count].question
                ans1.innerHTML = questions[count].answers[0]
                ans2.innerHTML = questions[count].answers[1]
                ans3.innerHTML = questions[count].answers[2]
                ans4.innerHTML = questions[count].answers[3]
        } else{
            questionNum.innerHTML = "Son!"
            questionNode.innerHTML = ""
            allAns.style.display = "none"
            summary.style.display = "block"
            if (correct>=0 && correct<=6){
                result.innerHTML = "Təəssüf ki, çox zəif göstəricidir."
            } else if (correct<=11){
                result.innerHTML = "Daha çox çalışın!"
            } else if (correct<=15){
                result.innerHTML = "Yaxşı nəticədir!"
            } else if (correct<=20){
                result.innerHTML = "Əla nəticədir!"
            } else {
                result.innerHTML = "Ən yüksək nəticə! Təbrik edirik!"
            }
            end.innerHTML = `Nəticə: ${correct}/21`
            btnNode.innerHTML = "Yenidən başla"
            count++
        }
            count++
    } else if (count <= questions.length){
        let variant;
            for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    variant = radioButton.value;
                    radioButton.checked=false
                    break;
                }
            }
        if (variant){
            allAns.style.display="none"
            btnNode.innerHTML="Davam"
            if (variant === questions[count-1].correctAns){
                correct++
                yes.style.display="block"
                answe1.innerText = questions[count-1].answers[0]
                answe1.style.background = "red"
                if (questions[count-1].correctAns === '1') answe1.style.background = "green"
                answe2.innerText = questions[count-1].answers[1]
                answe2.style.background = "red"
                if (questions[count-1].correctAns === '2') answe2.style.background = "green"
                answe3.innerText = questions[count-1].answers[2]
                answe3.style.background = "red"
                if (questions[count-1].correctAns === '3') answe3.style.background = "green"
                answe4.innerText = questions[count-1].answers[3]
                answe4.style.background = "red"
                if (questions[count-1].correctAns === '4') answe4.style.background = "green"

            } else {
                no.style.display="block"
                answi1.innerText = questions[count-1].answers[0]
                answi1.style.background = "red"
                if (questions[count-1].correctAns === '1') answi1.style.background = "green"
                answi2.innerText = questions[count-1].answers[1]
                answi2.style.background = "red"
                if (questions[count-1].correctAns === '2') answi2.style.background = "green"
                answi3.innerText = questions[count-1].answers[2]
                answi3.style.background = "red"
                if (questions[count-1].correctAns === '3') answi3.style.background = "green"
                answi4.innerText = questions[count-1].answers[3]
                answi4.style.background = "red"
                if (questions[count-1].correctAns === '4') answi4.style.background = "green"
            }
        }
    } else {
        location.reload()
    }
})

answer1.addEventListener("click", ()=>{
    answ1.checked=true
})
answer2.addEventListener("click", ()=>{
    answ2.checked=true
})
answer3.addEventListener("click", ()=>{
    answ3.checked=true
})
answer4.addEventListener("click", ()=>{
    answ4.checked=true
})

activate.addEventListener("click", ()=>{
    if (cheet.style.display === 'block'){
        cheet.style.display = 'none'
    } else {
        cheet.style.display = 'block'
    }

})
