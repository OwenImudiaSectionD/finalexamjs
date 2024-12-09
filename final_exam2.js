async function fetchData(name) {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            console.log("Error!!");
        }

        const data = await response.json();

        console.log("JSON string:", JSON.stringify(data));
    } catch (error) {
        console.error("Error!!! can not find that pokemon", error);
    }
}
fetchData("pikachu");