import {redrawButton} from './redrawButton'
import { element } from '../../utils/utils'

document.body = element;
const button: HTMLButtonElement = document.querySelector('.button')

describe('Testing redrawButton function', () => {

    it('Button text is Play', () => {
        redrawButton(false);
        expect(button.innerHTML).toBe('Play');
        expect(button.classList[1]).toBe('button-stopped');
    })
    it('Button text is Stop', () => {
        redrawButton(true);
        expect(button.innerHTML).toBe('Stop');
        expect(button.classList[1]).toBe('button-running');
    })
    it("Button must contain classes", () => {
        expect(document.querySelectorAll('.button.button-running').length).toBe(1);
        expect(document.querySelectorAll('.button.button-stopped').length).toBe(0);

        redrawButton(false);

        expect(document.querySelectorAll('.button.button-stopped').length).toBe(1);
        expect(document.querySelectorAll('.button.button-running').length).toBe(0);
    })
})