// This animation was adapted from an existing Codepen
// https://codepen.io/hey-nick/pen/rxNVbV

import { customElement, LitElement, html, css } from 'lit-element';

@customElement('app-lines')
export class AppLines extends LitElement {

    static styles = css`
        path {
            fill: none;
            stroke: #1a1a1a;
            stroke-width: 0.5px;
            vector-effect: non-scaling-stroke;
        }
    `;

    private get svgEl()  {
        return this.shadowRoot.querySelector('.animated-lines');
    }

    private numberOfLines = 20;

    private w = window.innerWidth;
    private h = window.innerHeight;

    private counter = 0;
    private amplitude = 40; // pixel range from 0
    
    private createdPaths = [];
    private spreadDistance = this.w / this.numberOfLines; // evenly distribute the end points across the bottom

    render() {
        return html`
            <svg class="animated-lines" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120">
            </svg>
        `;
    }

    firstUpdated(changedProperties) {
        // create the path elements
        for (var i = 1; i < this.numberOfLines + 1; i++) {

            var newPathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');

            newPathEl.id = 'path' + i;
            newPathEl.setAttribute('data-sin', (i * this.randomRange(200, 1000)).toString());
            newPathEl.setAttribute('data-cos', (i * this.randomRange(100, 500)).toString());

            this.createdPaths.push(newPathEl);
            this.svgEl.appendChild(newPathEl);
        }

        // once the path elements are created, start the animation loop
        this.animLoop();
    }

    animLoop() {
        for (var i = 0; i < this.numberOfLines; i++) {
            const newPath = this.createPathString({
                startX: 200,
                startY: -10,
                endX: -(i * this.spreadDistance * 2),
                endY: this.h,
                point1X:  i * this.spreadDistance * 0.2,
                point2X:  i * this.spreadDistance * 0.3,
                sinDivide: this.createdPaths[i].getAttribute('data-sin'),
                cosDivide: this.createdPaths[i].getAttribute('data-cos'),
            });

            this.createdPaths[i].setAttribute('d', newPath);
        }
      
        setTimeout(() => {
            requestAnimationFrame(this.animLoop.bind(this));
        }, 25);
    }
      
    randomRange(min, max) {
        return ~~(Math.random() * (max - min + 1)) + min
    }

    createPathString({startX, startY, endX, endY, point1X, point2X, sinDivide, cosDivide}) {
        const current = {
            x: this.amplitude * Math.sin(this.counter / sinDivide) + this.amplitude,
            y: this.amplitude * Math.cos(this.counter / cosDivide) + this.amplitude
        }
      
        this.counter--;
        
        const value =  `
            M ${startX} , ${startY}
            C ${point1X} , ${current.y}
              ${point2X} , ${current.x}
              ${endX} , ${endY}`;
        
        return value;
    };
    
}   