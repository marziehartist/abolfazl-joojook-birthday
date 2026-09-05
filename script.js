const intro = document.getElementById("intro");
const startScreen = document.getElementById("startScreen");
const startButton = document.getElementById("startButton");
const playerProfile = document.getElementById("playerProfile");
const continueButton = document.getElementById("continueButton");
const letterIntro = document.getElementById("letterIntro");
const openLetterButton = document.getElementById("openLetterButton");
const letterPage = document.getElementById("letterPage");
const letterNextButton = document.getElementById("letterNextButton");
const favoritePage = document.getElementById("favoritePage");
const finalGiftButton = document.getElementById("finalGiftButton");
const finalGiftPage = document.getElementById("finalGiftPage");

const downloadGiftButton = document.getElementById("downloadGiftButton");

// ==============================
// CHARACTER GAME ELEMENTS
// ==============================

const characterGame =
    document.getElementById("characterGame");

const gameStart =
    document.getElementById("gameStart");

const gameStartButton =
    document.getElementById("gameStartButton");

const gameQuestion =
    document.getElementById("gameQuestion");

const currentRound =
    document.getElementById("currentRound");

const categoryTitle =
    document.getElementById("categoryTitle");

const questionText =
    document.getElementById("questionText");

const answerCards =
    document.getElementById("answerCards");

const characterReveal =
    document.getElementById("characterReveal");

const characterName =
    document.getElementById("characterName");

const characterReason =
    document.getElementById("characterReason");

const nextRoundButton =
    document.getElementById("nextRoundButton");

const gameComplete =
    document.getElementById("gameComplete");

const memoriesButton =
    document.getElementById("memoriesButton");

playerProfile.classList.add("hidden");
characterGame.classList.add("hidden");

setTimeout(() => {

    intro.classList.add("fade-out");

    setTimeout(() => {

        intro.style.display = "none";

        startScreen.classList.remove("hidden");

    }, 2000);

}, 3000);

startButton.addEventListener("click", () => {

    startButton.innerText = "LOADING...";
    startButton.disabled = true;

    startScreen.classList.add("start-fade-out");

        startScreen.style.display = "none";

        playerProfile.classList.remove("hidden");



});

const rounds = [


    {
        category: "😂 شخصیت‌های سیتکام ها",

        characters: [

            {
                name: "چندلر بینگ",
                image: "CHARACTERS/CHANDLER.jpg",
                correct: true,

                reason:
                    "چون هم از لحاظ ظاهری خیلی شبیهشی، هم از لحاظ شخصیتی. خیلی منو می‌خندونی و بعضی وقتا هم واقعاً ریج بیتم می‌کنی 😂 ولی در هر صورت، اولین چیزی که بعد از دیدنش به ذهنم میاد، تویی. ❤️"
            },

            {
                name: "تد موسبی",
                image: "CHARACTERS/TEDMOSBY2.png",

                correct: false
            },

            {
                name: "جیم هالپرت",
                image: "CHARACTERS/JIM.webp",

                correct: false
            }

        ]
    },

    {
        category: "🏫 معلم‌ها",

        characters: [

            {
                name: "ران کلارک",
                image: "CHARACTERS/RONCLARK.jpg",
                correct: true,

                reason:
                    "چون آینده ی تو رو توی اون می بینم و خیلی وایبتو بهم میده. میدونم یه معلم خوب، دلسوز و حمایتگر خواهی شد. همون‌طور که الان هم هستی. و من واقعاً این بخش از وجودت رو خیلی دوست دارم. ❤️"
            },

            {
                name: "جان کیتینگ",
                image: "CHARACTERS/JohnKeating.webp",

                correct: false
            },

            {
                name: "دیویی فین",
                image: "CHARACTERS/DeweyFinn.webp",

                correct: false
            }

        ]
    },

    {
        category: "🦇 قهرمان‌ها",

        characters: [

            {
                name: "زورو",
                image: "CHARACTERS/ZOrro.png",
                correct: true,

                reason:
                    "چون تو توی ذهن من مثل یه ابرقهرمانی. با حسن نیت می‌خوای اوضاع رو درست کنی و از خانواده‌ات محافظت کنی. این ویژگی‌ت یکی از چیزهاییه که خیلی دوستش دارم. 🖤"
            },

            {
                name: "بتمن",
                image: "CHARACTERS/BATMAN.jpg",

                correct: false
            },

            {
                name: "ولورین",
                image: "CHARACTERS/WOLVERINE.png",

                correct: false
            }

        ]
    },

    {
        category: "👑 شخصیت های مرد دیزنی",

        characters: [

            {
                name: "پرنس ناوین",
                image: "CHARACTERS/PrinceNaveen.webp",
                correct: true,

                reason:
                    "چون خیلی وایبشو میدی... جز پسند منی... و از همه مهمتر، مکمل و عشق زندگی تیانای درونمی. 😂❤️"
            },

            {
                name: "علاءالدین",
                image: "CHARACTERS/ALADDIN.png",

                correct: false
            },

            {
                name: "فلین رایدر",
                image: "CHARACTERS/FLYNN.png",

                correct: false
            }

        ]
    },

    {
    
    category: "🐾 حیوانات",

    characters: [

        {
            name: "جوجوک",
            correct: true,
            image: "CHARACTERS/COOPER.jpg",

            reason:
                "این یکی دیگه خودش واضحه... چون جوجوک منییییییی.🥹❤️🐿️"
        },

        {
            name: "اسب",
            image: "CHARACTERS/HORSE.jpg",

            correct: false
        },

        {
            name: "شیر",
            image: "CHARACTERS/LION.webp",

            correct: false
        }

    ]
        }

];


// ==============================
// GAME STATE
// ==============================

let currentRoundIndex = 0;
let answered = false;


// ==============================
// OPEN CHARACTER GAME
// ==============================

continueButton.addEventListener("click", () => {

    continueButton.innerText = "LOADING...";

    playerProfile.classList.add("start-fade-out");


        playerProfile.style.display = "none";

        characterGame.classList.remove("hidden");


});


// ==============================
// START MINI GAME
// ==============================

gameStartButton.addEventListener("click", () => {

    gameStart.style.display = "none";

    gameQuestion.classList.remove("hidden");

    loadRound();

});


// ==============================
// LOAD ROUND
// ==============================

function loadRound() {

    answered = false;

    characterReveal.classList.add("hidden");

    answerCards.innerHTML = "";

    const round =
        rounds[currentRoundIndex];


    currentRound.innerText =
        currentRoundIndex + 1;


    categoryTitle.innerText =
        round.category;


    questionText.innerText =
        "کدومشون بیشتر منو یاد تو می‌اندازه؟ 👀";


    let options =
        [...round.characters];


    // RANDOM SHUFFLE

    options.sort(() => Math.random() - 0.5);


    // CREATE CARDS

    options.forEach((character) => {

        const card =
            document.createElement("div");

        card.className =
            "answer-card";


        card.innerHTML = `

    <div class="character-image">
        <img
            src="${character.image}"
            alt="${character.name}"
        >
    </div>

    <div class="character-option">
        ${character.name}
    </div>

`;

        card.addEventListener(
            "click",
            () => {

                chooseAnswer(
                    card,
                    character
                );

            }
        );


        answerCards.appendChild(card);

    });

}


// ==============================
// ANSWER
// ==============================

function chooseAnswer(
    card,
    character
) {

    if (answered) return;


    // WRONG ANSWER

    if (!character.correct) {

        card.classList.remove("wrong");

        void card.offsetWidth;

        card.classList.add("wrong");

        return;

    }


    // CORRECT ANSWER

    answered = true;

    card.classList.add("correct");


    const round =
        rounds[currentRoundIndex];


    characterName.innerText =
        character.name;


    characterReason.innerText =
        character.reason;


    characterReveal.classList.remove(
        "hidden"
    );


    // LAST ROUND

    if (
        currentRoundIndex ===
        rounds.length - 1
    ) {

        nextRoundButton.innerText =
            "دیدن نتیجه ❤️";

    } else {

        nextRoundButton.innerText =
            "مرحله بعد ▶";

    }

}


// ==============================
// NEXT ROUND
// ==============================

nextRoundButton.addEventListener(
    "click",
    () => {

        currentRoundIndex++;


        // GAME COMPLETE

        if (
            currentRoundIndex >=
            rounds.length
        ) {

            gameQuestion.classList.add(
                "hidden"
            );

            gameComplete.classList.remove(
                "hidden"
            );

            return;

        }


        // NEXT ROUND

        loadRound();

    }
);

memoriesButton.addEventListener(
    "click",
    () => {

        gameComplete.style.display = "none";

        letterIntro.classList.remove("hidden");

    }
);


// ==============================
// OPEN LETTER
// ==============================

openLetterButton.addEventListener(
    "click",
    () => {

        openLetterButton.innerText =
            "در حال باز شدن...";

        openLetterButton.disabled = true;

        letterIntro.style.opacity = "0";


            letterIntro.style.display =
                "none";

            letterPage.classList.remove(
                "hidden"
            );

    }
);


letterNextButton.addEventListener(
    "click",
    () => {

        letterNextButton.innerText =
            "در حال باز شدن...";

        letterNextButton.disabled = true;

        letterPage.style.opacity = "0";

            letterPage.style.display = "none";

            favoritePage.classList.remove("hidden");

        }
);
finalGiftButton.addEventListener(
    "click",
    () => {

        finalGiftButton.innerText =
            "در حال باز شدن...";

        finalGiftButton.disabled = true;

        favoritePage.style.opacity = "0";

            favoritePage.style.display = "none";

            finalGiftPage.classList.remove(
                "hidden"
            );

    }
);