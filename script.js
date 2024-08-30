const questions = {
    easy: [
        { question: "A large body of water surrounded by land.", options: ["Lake", "Mountain", "Forest", "Desert"], answer: "Lake" },
        { question: "A vehicle with two wheels that you ride by pushing pedals.", options: ["Car", "Bicycle", "Boat", "Airplane"], answer: "Bicycle" },
        { question: "A color of the sky during the day.", options: ["Red", "Green", "Blue", "Yellow"], answer: "Blue" },
        { question: "A fruit that is yellow and long.", options: ["Apple", "Banana", "Cherry", "Grape"], answer: "Banana" },
        { question: "The opposite of hot.", options: ["Cold", "Warm", "Spicy", "Cool"], answer: "Cold" },
        { question: "The number of days in a week.", options: ["5", "6", "7", "8"], answer: "7" },
        { question: "The animal known for its long neck.", options: ["Elephant", "Giraffe", "Lion", "Tiger"], answer: "Giraffe" },
        { question: "The primary color of a stop sign.", options: ["Blue", "Red", "Green", "Yellow"], answer: "Red" },
        { question: "A common pet that says 'meow'.", options: ["Dog", "Cat", "Bird", "Fish"], answer: "Cat" },
        { question: "A device used to call someone.", options: ["Phone", "Computer", "Television", "Radio"], answer: "Phone" },
        { question: "The month that follows January.", options: ["February", "March", "April", "December"], answer: "February" },
        { question: "The season after spring.", options: ["Summer", "Autumn", "Winter", "Spring"], answer: "Summer" },
        { question: "A piece of furniture for sitting.", options: ["Table", "Chair", "Bed", "Desk"], answer: "Chair" },
        { question: "A small insect that flies and makes honey.", options: ["Bee", "Ant", "Fly", "Butterfly"], answer: "Bee" },
        { question: "The color of grass.", options: ["Blue", "Red", "Green", "Brown"], answer: "Green" },
        { question: "A book of maps.", options: ["Dictionary", "Atlas", "Novel", "Magazine"], answer: "Atlas" },
        { question: "The shape of a basketball.", options: ["Square", "Triangle", "Circle", "Rectangle"], answer: "Circle" },
        { question: "The device used for making calls and texting.", options: ["Laptop", "Tablet", "Phone", "Television"], answer: "Phone" },
        { question: "The name of the large red fruit.", options: ["Apple", "Cherry", "Watermelon", "Tomato"], answer: "Watermelon" },
        { question: "A place where you can borrow books.", options: ["Library", "Store", "School", "Bank"], answer: "Library" },
        { question: "A common kitchen appliance for making toast.", options: ["Oven", "Fridge", "Toaster", "Microwave"], answer: "Toaster" },
        { question: "The time of day when the sun rises.", options: ["Noon", "Midnight", "Morning", "Evening"], answer: "Morning" },
        { question: "The shape of a baseball.", options: ["Triangle", "Circle", "Square", "Oval"], answer: "Circle" },
        { question: "The tool used for cutting paper.", options: ["Scissors", "Hammer", "Screwdriver", "Pencil"], answer: "Scissors" },
        { question: "A place where you go to watch movies.", options: ["Theater", "Museum", "Park", "Gym"], answer: "Theater" },
        { question: "The first month of the year.", options: ["January", "February", "March", "April"], answer: "January" },
        { question: "The day that comes after Monday.", options: ["Tuesday", "Wednesday", "Thursday", "Friday"], answer: "Tuesday" },
        { question: "The device used to take photos.", options: ["Camera", "Printer", "Projector", "Phone"], answer: "Camera" },
        { question: "The shape of a pizza.", options: ["Square", "Triangle", "Circle", "Rectangle"], answer: "Circle" },
        { question: "A popular winter sport on ice.", options: ["Skiing", "Swimming", "Running", "Cycling"], answer: "Skiing" },
        { question: "The part of the body used for walking.", options: ["Hand", "Head", "Foot", "Arm"], answer: "Foot" },
        { question: "A place where you sleep.", options: ["Bed", "Chair", "Table", "Desk"], answer: "Bed" },
        { question: "A type of tree that produces acorns.", options: ["Pine", "Oak", "Maple", "Birch"], answer: "Oak" },
        { question: "The opposite of 'happy'.", options: ["Sad", "Excited", "Angry", "Bored"], answer: "Sad" },
        { question: "The vehicle used for flying in the sky.", options: ["Car", "Boat", "Airplane", "Bicycle"], answer: "Airplane" },
        { question: "The number of hours in a day.", options: ["12", "24", "48", "60"], answer: "24" },
        { question: "The opposite of 'day'.", options: ["Night", "Morning", "Evening", "Afternoon"], answer: "Night" },
        { question: "A common type of bread.", options: ["Baguette", "Sushi", "Pasta", "Steak"], answer: "Baguette" },
        { question: "The name of the longest river in Egypt.", options: ["Nile", "Amazon", "Yangtze", "Ganges"], answer: "Nile" },
        { question: "The color of an orange.", options: ["Orange", "Purple", "Blue", "Green"], answer: "Orange" },
        { question: "The part of the plant that absorbs water.", options: ["Flower", "Leaf", "Root", "Stem"], answer: "Root" },
        { question: "A common pet that likes to chase mice.", options: ["Dog", "Cat", "Rabbit", "Hamster"], answer: "Cat" },
        { question: "The device used to open and close doors.", options: ["Handle", "Lock", "Hinge", "Key"], answer: "Handle" },
        { question: "The number of legs a spider has.", options: ["6", "8", "10", "12"], answer: "8" },
        { question: "A holiday celebrated with fireworks.", options: ["Christmas", "Halloween", "New Year", "Thanksgiving"], answer: "New Year" },
        { question: "The opposite of 'up'.", options: ["Down", "Left", "Right", "Forward"], answer: "Down" },
        { question: "A device used to measure time.", options: ["Clock", "Thermometer", "Barometer", "Hygrometer"], answer: "Clock" },
        { question: "The part of the car where you sit.", options: ["Engine", "Trunk", "Seat", "Wheel"], answer: "Seat" },
        { question: "The color of the sun.", options: ["Red", "Yellow", "Blue", "Green"], answer: "Yellow" },
        { question: "A book that tells a story.", options: ["Novel", "Atlas", "Dictionary", "Magazine"], answer: "Novel" },
        { question: "A common fruit that is red or green and often used in pies.", options: ["Apple", "Banana", "Orange", "Pear"], answer: "Apple" },
        { question: "The part of the body you use to see.", options: ["Ear", "Nose", "Mouth", "Eye"], answer: "Eye" },
        { question: "A sweet treat made from cocoa.", options: ["Chocolate", "Cake", "Cookie", "Candy"], answer: "Chocolate" },
        { question: "A tool used to cut wood.", options: ["Saw", "Drill", "Wrench", "Hammer"], answer: "Saw" }
    ],
    medium: [
        { question: "The capital of France.", options: ["Paris", "London", "Berlin", "Madrid"], answer: "Paris" },
        { question: "The process of water turning into vapor.", options: ["Condensation", "Evaporation", "Precipitation", "Sublimation"], answer: "Evaporation" },
        { question: "A book written by J.K. Rowling.", options: ["The Hobbit", "Harry Potter", "Lord of the Rings", "Percy Jackson"], answer: "Harry Potter" },
        { question: "The currency used in Japan.", options: ["Yuan", "Won", "Yen", "Dollar"], answer: "Yen" },
        { question: "The largest planet in our solar system.", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Jupiter" },
        { question: "The chemical symbol for Gold.", options: ["Au", "Ag", "Fe", "Hg"], answer: "Au" },
        { question: "The author of '1984'.", options: ["George Orwell", "Aldous Huxley", "J.K. Rowling", "Ernest Hemingway"], answer: "George Orwell" },
        { question: "The process by which plants make their food.", options: ["Photosynthesis", "Respiration", "Digestion", "Absorption"], answer: "Photosynthesis" },
        { question: "The smallest unit of life.", options: ["Atom", "Molecule", "Cell", "Organ"], answer: "Cell" },
        { question: "The study of stars and planets.", options: ["Biology", "Geology", "Astronomy", "Chemistry"], answer: "Astronomy" },
        { question: "A famous Italian artist known for the Mona Lisa.", options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"], answer: "Leonardo da Vinci" },
        { question: "The longest river in the world.", options: ["Nile", "Amazon", "Yangtze", "Mississippi"], answer: "Nile" },
        { question: "The chemical formula for water.", options: ["H2O", "CO2", "NaCl", "CH4"], answer: "H2O" },
        { question: "The process of converting waste into reusable material.", options: ["Recycling", "Incineration", "Landfill", "Composting"], answer: "Recycling" },
        { question: "The first element on the periodic table.", options: ["Helium", "Hydrogen", "Oxygen", "Carbon"], answer: "Hydrogen" },
        { question: "The author of 'Pride and Prejudice'.", options: ["Jane Austen", "Charles Dickens", "Emily Brontë", "George Eliot"], answer: "Jane Austen" },
        { question: "The main ingredient in guacamole.", options: ["Tomato", "Avocado", "Pepper", "Onion"], answer: "Avocado" },
        { question: "The largest desert in the world.", options: ["Sahara", "Gobi", "Kalahari", "Antarctic"], answer: "Antarctic" },
        { question: "The term for a word that has the same meaning as another word.", options: ["Antonym", "Synonym", "Homonym", "Eponym"], answer: "Synonym" },
        { question: "The study of ancient cultures through their artifacts.", options: ["Archaeology", "Anthropology", "History", "Sociology"], answer: "Archaeology" },
        { question: "The process by which a caterpillar becomes a butterfly.", options: ["Metamorphosis", "Evolution", "Adaptation", "Regeneration"], answer: "Metamorphosis" },
        { question: "The main gas found in the Earth's atmosphere.", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: "Nitrogen" },
        { question: "The capital city of Canada.", options: ["Toronto", "Vancouver", "Ottawa", "Montreal"], answer: "Ottawa" },
        { question: "The study of numbers and shapes.", options: ["Algebra", "Geometry", "Calculus", "Statistics"], answer: "Geometry" },
        { question: "A painting technique where colors are applied to wet plaster.", options: ["Fresco", "Oil", "Watercolor", "Acrylic"], answer: "Fresco" },
        { question: "The first president of the United States.", options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"], answer: "George Washington" },
        { question: "A large mammal known for its tusks.", options: ["Elephant", "Hippopotamus", "Rhino", "Walrus"], answer: "Walrus" },
        { question: "A structure built to commemorate a person or event.", options: ["Monument", "Statue", "Building", "Bridge"], answer: "Monument" },
        { question: "The study of the Earth’s atmosphere and weather.", options: ["Meteorology", "Geology", "Astronomy", "Oceanography"], answer: "Meteorology" },
        { question: "The name of the first artificial satellite launched into space.", options: ["Sputnik", "Apollo", "Voyager", "Hubble"], answer: "Sputnik" },
        { question: "The largest organ in the human body.", options: ["Liver", "Heart", "Skin", "Brain"], answer: "Skin" },
        { question: "A famous play written by William Shakespeare about a Danish prince.", options: ["Hamlet", "Macbeth", "Othello", "Romeo and Juliet"], answer: "Hamlet" },
        { question: "The only planet in our solar system that rotates on its side.", options: ["Uranus", "Neptune", "Saturn", "Jupiter"], answer: "Uranus" },
        { question: "The chemical symbol for Sodium.", options: ["Na", "S", "K", "Cl"], answer: "Na" },
        { question: "The term for a word that is pronounced the same as another word but has a different meaning.", options: ["Homonym", "Synonym", "Antonym", "Acronym"], answer: "Homonym" },
        { question: "The famous scientist known for his theory of relativity.", options: ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Galileo Galilei"], answer: "Albert Einstein" },
        { question: "The name of the first successful manned mission to land on the moon.", options: ["Apollo 11", "Apollo 13", "Gemini 12", "Mercury 7"], answer: "Apollo 11" },
        { question: "The scientist known for his work on electromagnetism and the discovery of electromagnetic induction.", options: ["Michael Faraday", "James Clerk Maxwell", "Nikola Tesla", "André-Marie Ampère"], answer: "Michael Faraday" },
        { question: "The number of bones in the adult human body.", options: ["206", "208", "210", "214"], answer: "206" },
        { question: "The theory that explains the origin of the universe.", options: ["Big Bang Theory", "String Theory", "Quantum Mechanics", "Theory of Relativity"], answer: "Big Bang Theory" }
    ],
    hard: [
        { question: "A figure of speech that involves exaggeration.", options: ["Metaphor", "Simile", "Hyperbole", "Alliteration"], answer: "Hyperbole" },
        { question: "The theory of evolution was proposed by this scientist.", options: ["Newton", "Darwin", "Einstein", "Galileo"], answer: "Darwin" },
        { question: "A chemical element with the symbol 'Au'.", options: ["Silver", "Iron", "Gold", "Platinum"], answer: "Gold" },
        { question: "The mathematical constant approximately equal to 3.14.", options: ["E", "Pi", "Phi", "Sigma"], answer: "Pi" },
        { question: "The capital city of Australia.", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], answer: "Canberra" },
        { question: "The first woman to win a Nobel Prize.", options: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Barbara McClintock"], answer: "Marie Curie" },
        { question: "The name of the phenomenon where the moon passes between the Earth and the Sun.", options: ["Lunar Eclipse", "Solar Eclipse", "Total Eclipse", "Partial Eclipse"], answer: "Solar Eclipse" },
        { question: "The philosopher known for his work on ethics and the 'Categorical Imperative'.", options: ["Immanuel Kant", "John Stuart Mill", "Aristotle", "Friedrich Nietzsche"], answer: "Immanuel Kant" },
        { question: "The name of the human body’s largest organ system.", options: ["Circulatory System", "Nervous System", "Muscular System", "Integumentary System"], answer: "Integumentary System" },
        { question: "The name of the ship that Charles Darwin sailed on during his voyage to the Galápagos Islands.", options: ["Beagle", "Endeavour", "Victory", "Discovery"], answer: "Beagle" },
        { question: "The concept in quantum mechanics that describes particles existing in multiple states simultaneously.", options: ["Superposition", "Entanglement", "Decoherence", "Heisenberg Uncertainty"], answer: "Superposition" },
        { question: "The name of the mathematical principle that allows the calculation of the area of a triangle.", options: ["Pythagorean Theorem", "Law of Sines", "Law of Cosines", "Heron's Formula"], answer: "Heron's Formula" },
        { question: "The period of European history known for its revival of classical learning and wisdom.", options: ["Middle Ages", "Renaissance", "Enlightenment", "Baroque"], answer: "Renaissance" },
        { question: "The author of 'The Republic', a philosophical work on justice and ideal state.", options: ["Plato", "Socrates", "Aristotle", "Epicurus"], answer: "Plato" },
        { question: "The term for a species that is no longer in existence.", options: ["Extinct", "Endangered", "Threatened", "Vulnerable"], answer: "Extinct" },
        { question: "The element with the atomic number 92.", options: ["Uranium", "Plutonium", "Radon", "Neptunium"], answer: "Uranium" },
        { question: "The process by which an organism's characteristics are passed to its offspring.", options: ["Genetics", "Evolution", "Adaptation", "Inheritance"], answer: "Genetics" },
        { question: "The complex of enzymes and proteins involved in the transcription of DNA.", options: ["Ribosome", "RNA Polymerase", "Mitochondria", "Nucleus"], answer: "RNA Polymerase" },
        { question: "The theory that describes the formation of the solar system from a cloud of gas and dust.", options: ["Nebular Hypothesis", "String Theory", "Big Bang Theory", "Plate Tectonics"], answer: "Nebular Hypothesis" },
        { question: "The scientific study of fungi.", options: ["Mycology", "Botany", "Zoology", "Microbiology"], answer: "Mycology" },
        { question: "The historical event known for the fall of the Western Roman Empire.", options: ["The Fall of Constantinople", "The French Revolution", "The Fall of Rome", "The Hundred Years' War"], answer: "The Fall of Rome" },
        { question: "The name of the galaxy that contains our solar system.", options: ["Andromeda", "Milky Way", "Triangulum", "Sombrero"], answer: "Milky Way" },
        { question: "The number of chromosomes in a human somatic cell.", options: ["23", "46", "44", "22"], answer: "46" },
        { question: "The principle that states the path of least action in classical mechanics.", options: ["Principle of Least Action", "Law of Inertia", "Principle of Superposition", "Conservation of Energy"], answer: "Principle of Least Action" },
        { question: "The name of the literary work by Homer that recounts the Greek hero’s return from Troy.", options: ["The Iliad", "The Odyssey", "The Aeneid", "The Argonautica"], answer: "The Odyssey" },
        { question: "The name of the ancient Greek philosopher known for his method of questioning.", options: ["Socrates", "Plato", "Aristotle", "Pythagoras"], answer: "Socrates" },
        { question: "The mathematical study of shapes and their properties.", options: ["Geometry", "Calculus", "Algebra", "Statistics"], answer: "Geometry" },
        { question: "The historical figure known for his role in the Russian Revolution of 1917.", options: ["Leon Trotsky", "Vladimir Lenin", "Joseph Stalin", "Nikolai Bukharin"], answer: "Vladimir Lenin" },
        { question: "The process by which proteins are synthesized from RNA.", options: ["Transcription", "Translation", "Replication", "Replication"], answer: "Translation" },
        { question: "The renowned physicist who developed the theory of quantum mechanics.", options: ["Max Planck", "Erwin Schrödinger", "Niels Bohr", "Albert Einstein"], answer: "Max Planck" },
        { question: "The historical era characterized by the Renaissance in Europe.", options: ["Early Modern Period", "Medieval Period", "Ancient Period", "Post-Renaissance Period"], answer: "Early Modern Period" },
        { question: "The name of the mechanism in the body that regulates blood sugar levels.", options: ["Endocrine System", "Digestive System", "Circulatory System", "Nervous System"], answer: "Endocrine System" },
        { question: "The name of the collection of short stories by Edgar Allan Poe.", options: ["The Tell-Tale Heart", "The Raven", "Tales of Mystery and Imagination", "The Black Cat"], answer: "Tales of Mystery and Imagination" },
        { question: "The term used to describe a word or phrase that has a deeper meaning in addition to its literal meaning.", options: ["Symbolism", "Metaphor", "Allusion", "Irony"], answer: "Symbolism" },
        { question: "The philosopher known for his work 'Critique of Pure Reason'.", options: ["Immanuel Kant", "G.W.F. Hegel", "Friedrich Nietzsche", "David Hume"], answer: "Immanuel Kant" }
    ]
};


let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(difficulty) {
    document.getElementById('difficulty-selection').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    currentQuestions = shuffleArray([...questions[difficulty]]);
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    document.getElementById('question').innerText = question.question;
    
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => checkAnswer(option, button);
        optionsContainer.appendChild(button);
    });

    document.getElementById('feedback').style.display = 'none';
    document.getElementById('next-button').style.display = 'none';
}

function checkAnswer(selectedOption, selectedButton) {
    const correctAnswer = currentQuestions[currentQuestionIndex].answer;
    const feedback = document.getElementById('feedback');
    
    if (selectedOption === correctAnswer) {
        score++;
        selectedButton.classList.add('correct');
        feedback.innerText = "Correct!";
        feedback.className = 'correct';
    } else {
        selectedButton.classList.add('incorrect');
        feedback.innerText = `Wrong! The correct answer is ${correctAnswer}.`;
        feedback.className = 'incorrect';
    }

    document.getElementById('feedback').style.display = 'block';
    document.getElementById('next-button').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('score').innerText = `Your score: ${score} out of ${currentQuestions.length}`;
}

function restartQuiz() {
    document.getElementById('difficulty-selection').style.display = 'block';
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result').style.display = 'none';
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
