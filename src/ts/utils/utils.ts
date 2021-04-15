export const element: HTMLElement = document.createElement('body');

element.innerHTML = `
    <body class = "body">
        <table class = "GameField"></table>
            <div class = "gameControllers">
            <input type = "number" class = "input.input-width">
            <input type = "number" class = "input.input-width">
            <button class = "button.button-stopped">
        </div>
    </body>
    `