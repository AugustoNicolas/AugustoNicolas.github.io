import { DotLottie } from 'https://cdn.jsdelivr.net/npm/@lottiefiles/dotlottie-web/+esm';

const miAnimacion = new DotLottie({
    canvas: document.querySelector('#canvas-animacion'), 
    src: "https://lottie.host/53eefb74-652a-4e33-b8e2-88d91562aafd/E6o0j7NYZk.lottie", 
    
    loop: true,      // que se repita
    autoplay: true,  // que arranque sola
    speed: 1,        // velocidad normal
});



document.addEventListener('DOMContentLoaded', () => {
    
    const bugCells = document.querySelectorAll('.bug-count');
    
    bugCells.forEach(cell => {
        const randomVal = Math.floor(Math.random() * 100); 
        cell.textContent = randomVal;
    });


    const btnStats = document.getElementById('btn-stats');
    const btnCalc = document.getElementById('btn-calc');
    const btnAlert = document.getElementById('btn-alert');
    const outputDiv = document.getElementById('console-output');

    // BOTÓN 1: ESTADÍSTICAS (Requisito: Min/Max/Suma/Media en un párrafo único)
    btnStats.addEventListener('click', () => {
        let totalBugs = 0;
        let maxBugs = 0;
        let minbugs = 100; //numarul mai mare posibil
        const bugs = document.querySelectorAll('.bug-count');

        bugs.forEach(cell => {
            const val = parseInt(cell.textContent);
            totalBugs += val;
            if (val > maxBugs) maxBugs = val;
            if (val < minbugs) minbugs = val;
        });

        const average = (totalBugs / bugs.length).toFixed(1);

        outputDiv.innerHTML = ''; 
        
        const p = document.createElement('p');
        p.innerHTML = `> DIAGNOSTIC COMPLETE:<br> Total Bugs: ${totalBugs} <br> Max Severity: ${maxBugs} <br> Min Severity: ${minbugs} <br> average: ${average}`;
        outputDiv.appendChild(p);
    });

    btnCalc.addEventListener('click', () => {
        const rows = document.querySelectorAll('#system-table tbody tr');

        rows.forEach(row => {
            const bugs = parseInt(row.cells[2].textContent);
            const estimatedTime = Math.ceil(bugs * 2.5);
            row.cells[3].textContent = estimatedTime + "h";
            if(estimatedTime > 100) {
                row.cells[3].style.color = "var(--color-bg-2)";
            }
        });
    });

    //  Si Bugs > 50
    btnAlert.addEventListener('click', () => {
        const rows = document.querySelectorAll('#system-table tbody tr');

        rows.forEach(row => {
            const bugs = parseInt(row.cells[2].textContent);
            row.classList.remove('highlight-row');
            if (bugs > 50) {
                row.classList.add('highlight-row');
            }
        });
        
        // Mensaje opcional en consola
        outputDiv.innerHTML = '<p style="color:var(--color-hover)">> WARNING: CRITICAL PROCESSES FLAGGED.</p>';
    });

});