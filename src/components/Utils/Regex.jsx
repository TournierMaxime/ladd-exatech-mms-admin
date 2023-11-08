const youtubeVideoRegex = (url) => {
    const regex = /^([a-zA-Z0-9_-]{11})$/;
    const match = url.match(regex);

    if (match === null) {
        return "Invalid YouTube URL"
    } 
}

export { youtubeVideoRegex }