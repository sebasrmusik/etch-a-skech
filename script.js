const container = document.querySelector('.grid-container');
console.log(container);
const grid = (res = 16) => {
    for(let i = 0; i < res; i++){
        const divRow = document.createElement('div');
        divRow.classList.add('row');
        container.appendChild(divRow);
        for(let j = 0; j < res; j++){
            const divCell = document.createElement('div');
            divCell.classList.add('cell');
            divCell.addEventListener('mouseover', () => {
                divCell.classList.add('cell-colored');
            })

            divRow.appendChild(divCell);
        }
    }
}


const clear = () => {
    const divs = document.querySelectorAll('.cell');
    for(let div of divs){
        div.classList.remove('cell-colored');
    }
}

const newRes = () => {
    let res;
    do {
        res = Math.round(Number(prompt('Enter a number between up to 100')));
    } while (res > 100 || res < 1);
    const rows = document.querySelectorAll('.row');
    for(let i = 0; i < rows.length; i++){
        rows[i].remove();
    }
    grid(res);
}

grid();

const clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', clear);

const changeRes = document.querySelector('#set-res');
changeRes.addEventListener('click', newRes);