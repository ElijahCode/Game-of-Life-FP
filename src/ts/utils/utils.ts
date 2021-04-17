export const element: HTMLElement = document.createElement('body');

element.innerHTML = `
    <body class = "body">
        <table class = "gameField"></table>
        <div class = "gameControllers">
            <input type = "number" class = "input input-width">
            <input type = "number" class = "input input-heigth">
            <button class = "button button-stopped">Play</button>
        </div>
    </body>
    `