export default async function fetchUrl(url, options, json = true) {
    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            switch (response.status) {
                case 400:
                    console.error("400 Bad Request");
                    break;
                case 401:
                    console.error("401 Unauthorized");
                    break;
                case 404:
                    console.error("404 Not Found");
                    break;
                case 500:
                    console.error("500 Internal Server Error");
                    break;
                default:
                    console.error("Could Not Fetch");
                    break;
            }

            return;
        }

        if (!json) return await response.text();

        return await response.json();
    } catch (error) {
        throw new Error(error.message);
    }
}