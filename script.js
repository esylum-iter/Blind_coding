
async function fetchPredefinedText() {
    const githubRawUrl = 'https://raw.githubusercontent.com/manishgupta2026/text-similarity-data/main/predefined_text.txt';
    try {
        const response = await fetch(githubRawUrl);
        if (!response.ok) throw new Error('Failed to fetch ');

        const encodedText = await response.text();
        return atob(encodedText.trim()); // 
    } catch (error) {
        console.error(error);
        return null;
    }
}

function calculateSimilarity(userText, predefinedText) {
    const normalize = text => text.toLowerCase().replace(/[^a-z0-9]/g, ' ').split(/\s+/).filter(Boolean);
    const words1 = normalize(userText);
    const words2 = normalize(predefinedText);

    const commonWords = words1.filter(word => words2.includes(word));
    return (commonWords.length / Math.max(words1.length, words2.length)) * 100;
}

async function compareText() {
    const userText = document.getElementById("hiddenInput").value.trim();
    if (!userText) {
        document.getElementById("result").innerText = "Please enter some text.";
        return;
    }

    const predefinedText = await fetchPredefinedText();
    if (!predefinedText) {
        document.getElementById("result").innerText = "Error fetching predefined text.";
        return;
    }

    const similarity = calculateSimilarity(userText, predefinedText);
    document.getElementById("result").innerText = `Match: ${similarity.toFixed(2)}%`;
}

const codeSnippets = {
    java: [
        "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, World!\");\n    }\n}",
        "for(int i = 0; i < 5; i++) {\n    System.out.println(\"Iteration \" + i);\n}",
        "int factorial(int n) {\n    return (n == 0) ? 1 : n * factorial(n - 1);\n}"
    ],
    javascript: [
        "function greet() {\n    console.log('Hello, World!');\n}\ngreet();",
        "for(let i = 0; i < 5; i++) {\n    console.log(`Iteration ${i}`);\n}",
        "const factorial = n => (n === 0 ? 1 : n * factorial(n - 1));\nconsole.log(factorial(5));"
    ],
    python: [
        "def greet():\n    print('Hello, World!')\n\ngreet()",
        "for i in range(5):\n    print(f'Iteration {i}')",
        "def factorial(n):\n    return 1 if n == 0 else n * factorial(n-1)\n\nprint(factorial(5))"
    ]
};

function updateCodeImage() {
    const language = document.getElementById("languageSelector").value;
    const randomIndex = Math.floor(Math.random() * codeSnippets[language].length);
    const imageMap = {
        javascript: "https://i.ibb.co/2kLw2Jc/javascript.png", //instead of this add the code image
        python: "https://i.ibb.co/Y8R1L2k/python.png" //instead of this add the code image
    };

    document.querySelector(".image-container img").src = imageMap[language];
}