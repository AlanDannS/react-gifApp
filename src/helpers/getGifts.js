export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
        category
    )}&limit=10&api_key=yu0vLjaOlPlleWq0SOK7qeL3bWXPJELc`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifts = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        };
    });
    return gifts;
};
