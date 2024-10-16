const prompts = [
    "Блуждающий по окрестностям бессмертный натыкается на одинокое святилище, скрытое глубоко в горах. Внутри тускло светится одна-единственная красная нить судьбы, ожидая, когда ее возьмут...",
    "Под мягким светом тысячи фонарей ДВЕ души пересекаются в забытом храме. Каждый из них хранит в себе тайну, слишком тяжелую для слов, но их необъяснимо тянет друг к другу...",
    "В тени разрушающегося дворца на краю света стоит воительница, вглядываясь в горизонт. Голос ветра взывает к ней, устремляя ее в неизвестное будущее...",
    "У подножия священной горы древний страж молча ждет, наблюдая за проходящими мимо паломниками. Однажды появляется путник, который задает вопрос, который никто никогда не осмеливался задать...",
    "Под бескрайним ночным небом на берегу реки стоит одинокая фигура и смотрит на свое отражение в воде. Когда к ним присоединяется ЕЩЕ одна тень, звезды смещаются..."
];

const storyPaths = {
    0: [
        {
            path: "Бессмертный колеблется, но решает взять красную нить, веря, что судьба привела их сюда не просто так. В этот момент они чувствуют связь не с прошлым, а с будущим - с тем, кого им еще предстоит встретить, с тем, кто изменит их жизнь.",
            reflection: "Иногда судьба - это выбор, который мы делаем вместе. Кажется, наша история только начинается..."
        },
        {
            path: "Бессмертный оставляет нить нетронутой, думая, что, возможно, время еще не пришло. Но, уходя, они понимают, что некоторые связи неизбежны, как бы долго человек ни ждал.",
            reflection: "Есть связи, которых мы не можем избежать, как бы ни старались. Я начинаю думать, что ты - одна из них."
        }
    ],
    1: [
        {
            path: "Одна душа наконец нарушает молчание, признаваясь в своих страхах и надеждах. Другой слушает без осуждения, протягивая руку помощи. Когда они стоят под фонарями, свет кажется все ярче, освещая путь перед ними.",
            reflection: "Мы все носим с собой груз, который нас тяготит, но иногда разделение бремени - это первый шаг к чему-то прекрасному."
        },
        {
            path: "Две души расстаются, не сказав ни слова, но на сердце у обоих становится легче, они знают, что нашли человека, который понимает их, даже если ничего не говорит. Каждый из них уходит, но не в одиночестве.",
            reflection: "Даже в тишине мы можем понять друг друга. Мне кажется, я нашёл человека, который по-настоящему видит меня."
        }
    ],
    2: [
        {
            path: "Воительница шагает вперед, оставляя прошлое позади и принимая неопределенность будущего. Она знает, что голос зовет ее к чему-то или кому-то, кто изменит все.",
            reflection: "Иногда нам приходится делать шаг в неизвестность, чтобы открыть для себя то, что действительно важно. Надеюсь, ты станешь частью этого открытия."
        },
        {
            path: "Воительница отворачивается, не в силах пока ответить на зов. Но когда она уходит, голос остается с ней, как обещание, что будущее будет ждать ее, когда она будет готова.",
            reflection: "Будущее никого не ждет, но я верю, что некоторые вещи стоят того, чтобы их ждать. Может быть, я готов сделать шаг к этому вместе с тобой."
        }
    ],
    3: [
        {
            path: "Путешественник спрашивает хранителя, что значит любить и быть любимым в ответ. Хранитель, впервые за много веков, улыбается и говорит: «Это значит, что ты больше не одинок».",
            reflection: "Думаю, мы оба ищем что-то более глубокое. Может быть, нам больше не придется искать в одиночку."
        },
        {
            path: "Путешественник спрашивает хранителя, какова его цель. Хранитель отвечает: «Общаться с теми, кто дает твоей душе покой».",
            reflection: "Иногда мы находим покой в неожиданных местах - или с людьми. Думаю, я нашел свой с тобой."
        }
    ],
    4: [
        {
            path: "Фигура приветствует другую тень рядом с собой, и они вместе наблюдают за тем, как звезды над головой смещаются и выравниваются. Они понимают, что теперь их пути переплелись, и никто из них больше не останется один под огромным небом.",
            reflection: "В таком огромном мире редко встретишь человека, чей путь пересекается с твоим настолько значимым образом. Думаю, ты переместила мои звезды."
        },
        {
            path: "Фигура пытается уйти, но тень упорно следует за ней. Наконец они останавливаются и оборачиваются, понимая, что иногда нельзя убежать от того, чему суждено быть.",
            reflection: "Некоторые связи неизбежны, как бы ты ни старался от них уйти. Может быть, я не хочу уходить от этого."
        }
    ]
};

function startStory() {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('story-section').style.display = 'block';
    displayPrompts();
    playMusic();
}

function displayPrompts() {
    const promptChoices = document.getElementById('prompt-choices');
    promptChoices.innerHTML = '<h3>Выбери начало:</h3>';
    prompts.forEach((prompt, index) => {
        const button = document.createElement('button');
        button.textContent = prompt.substring(0, 200) + "...";
        button.onclick = () => selectPrompt(index);
        button.className = 'btn';
        promptChoices.appendChild(button);
    });
}

function selectPrompt(index) {
    const storyContent = document.getElementById('story-content');
    storyContent.innerHTML = `<p>${prompts[index]}</p>`;
    displayStoryPaths(index);
}

function displayStoryPaths(promptIndex) {
    const pathChoices = document.getElementById('path-choices');
    pathChoices.innerHTML = '<h3>Выбери свой путь:</h3>';
    storyPaths[promptIndex].forEach((path, index) => {
        const button = document.createElement('button');
        button.textContent = path.path.substring(0, 200) + "...";
        button.onclick = () => finishStory(promptIndex, index);
        button.className = 'btn';
        pathChoices.appendChild(button);
    });
}

function finishStory(promptIndex, pathIndex) {
    document.getElementById('story-section').style.display = 'none';
    document.getElementById('reflection-section').style.display = 'block';
    const reflectionContent = document.getElementById('reflection-content');
    const chosenPath = storyPaths[promptIndex][pathIndex];
    reflectionContent.innerHTML = `
        <p>${chosenPath.path}</p>
        <p><em>${chosenPath.reflection}</em></p>
        <div id="lotus" style="font-size: 48px; margin: 20px auto;">
            🌸
        </div>
    `;
}

function playMusic() {
    const music = document.getElementById('bgMusic');
    music.volume = 0.1; // Adjust volume as needed
    music.play();
}