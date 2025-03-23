
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
