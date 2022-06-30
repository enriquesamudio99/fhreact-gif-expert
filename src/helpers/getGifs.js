export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=16&api_key=mNKiR7PihJTWVussnbVQpz8Lv1KXhc5t`;
    const res = await fetch(url);
    const { data = [] } = await res.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_large.url
    }));

    return gifs;

}