const words = ["the",
    "of",
    "and",
    "a",
    "to",
    "in",
    "is",
    "you",
    "that",
    "it",
    "he",
    "was",
    "for",
    "on",
    "are",
    "as",
    "with",
    "his",
    "they",
    "I",
    "at",
    "be",
    "this",
    "have",
    "from",
    "or",
    "one",
    "had",
    "by",
    "word",
    "but",
    "not",
    "what",
    "all",
    "were",
    "we",
    "when",
    "your",
    "can",
    "said",
    "there",
    "use",
    "an",
    "each",
    "which",
    "she",
    "do",
    "how",
    "their",
    "if",
    "will",
    "up",
    "other",
    "about",
    "out",
    "many",
    "then",
    "them",
    "these",
    "so",
    "some",
    "her",
    "would",
    "make",
    "like",
    "him",
    "into",
    "time",
    "has",
    "look",
    "two",
    "more",
    "write",
    "go",
    "see",
    "number",
    "no",
    "way",
    "could",
    "people",
    "my",
    "than",
    "first",
    "water",
    "been",
    "call",
    "who",
    "oil",
    "its",
    "now",
    "find",
    "long",
    "down",
    "day",
    "did",
    "get",
    "come",
    "made",
    "may",
    "part"];

let randomIdx = parseInt(Math.random() * words.length);
let poy = 20;
const WordBox = document.querySelector(".fallingBox");
const fallingwords = document.querySelector(".fallingword");
const score = document.querySelector(".score");
const correctwords = document.querySelector(".correctwords");
const incorrectwords = document.querySelector(".incorrectwords");
const typedword = document.querySelector("input");
const winbox = document.querySelector(".winbox");
const losebox = document.querySelector(".losebox")
let sc = 0;
fallingwords.innerText = words[randomIdx];

typedword.addEventListener('keypress', function (e) {
    
    let word = `<div class="word">${words[randomIdx]}</div>`;
    if (e.key === "Enter") {
        
        if (typedword.value === fallingwords.innerText) {
            sc++;
            score.innerHTML = `score : ${sc}`;
            correctwords.innerHTML = word + correctwords.innerHTML;
            if(correctwords.children.length==11){
                winbox.innerHTML = `<h1>You Won</h1> <br><br>
                <h1>Your Score is : ${sc}</h1>`;
                winbox.style.display = "flex";
                return;
            }
             randomIdx = parseInt(Math.random() * words.length);
             fallingwords.innerText = words[randomIdx];
            poy = 20;
        } else {
            sc--;
            score.innerHTML = `score : ${sc}`;
            incorrectwords.innerHTML = word + incorrectwords.innerHTML;
            if(incorrectwords.children.length==11){
                losebox.innerHTML = `<h1>You Lost</h1> <br><br>
                <h1>Your Score is : ${sc}</h1>`;
                losebox.style.display = "flex";
                return;
            }
            randomIdx = parseInt(Math.random() * words.length);
             fallingwords.innerText = words[randomIdx];
            poy = 20;
        }
        typedword.value = "";
    }
});



function wordfall() {
    if (poy == 450) {
        sc--;
        score.innerHTML = `score : ${sc}`;
        let word = `<div class="word">${words[randomIdx]}</div>`;
        incorrectwords.innerHTML = word + incorrectwords.innerHTML;
        if(incorrectwords.children.length==11){
            losebox.innerHTML = `<h1>You Lost</h1> <br><br>
            <h1>Your Score is : ${sc}</h1>`;
            losebox.style.display = "flex";
            return;
        }
        randomIdx = parseInt(Math.random() * words.length);
        fallingwords.innerText = words[randomIdx];
        poy = 20;
    } else {
        if(sc>=5){
            poy += 2;
        }else{
        poy += 1;
        }
        WordBox.style.top = poy + "px";
    }
    requestAnimationFrame(wordfall);
};
wordfall();