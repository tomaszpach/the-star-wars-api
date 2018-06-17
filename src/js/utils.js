// Sets the number of stars we wish to display
const numStars = 200;

// For every star we want to display
for (let i = 0; i < numStars; i++) {
    let star = document.createElement("div"),
        xy = getRandomPosition();

    star.className = "star";
    star.style.top = xy[0] + 'px';
    star.style.left = xy[1] + 'px';
    document.body.append(star);
}

// Gets random x, y values based on the size of the container
function getRandomPosition() {
    let innerWidth = window.innerWidth,
        innerHeight = window.innerHeight,
        randomX = Math.floor(Math.random()*innerWidth),
        randomY = Math.floor(Math.random()*innerHeight);

    return [randomX,randomY];
}