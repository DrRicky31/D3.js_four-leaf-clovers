/* Funzione lanciata ogni volta che viene registrato un click su una foglia
 * riceve come parametro tutti i dati necessari, la scala di X, la scala della grandezza
 * x che corrisponde all'oggetto che è stato clickato (this) 
 * n che rappresenta il numero della foglia clickata
 */
function onClick(event, data, scaleX, sizeScale, x, n) {

    /* ottiene la lista delle foglie a partire dal nodo corrente */
    const leavesList = x.parentNode.parentNode.children;
    for (let i = 0; i < 10; i++) {
        const b = leavesList[i];

        /* aggiorna la coordinata newX in base alla variabile selezionata */
        let newX
        switch (n) {
            case 1:
                newX = scaleX(data[i].var1);
                break;
            case 2:
                newX = scaleX(data[i].var2);
                break;
            case 3:
                newX = scaleX(data[i].var3);
                break;
            case 4:
                newX = scaleX(data[i].var4);
                break;
        }

        const newY = parseFloat(b.children[4].getAttribute("cy"));

        /* aggiornamento delle posizioni degli oggetti */
        d3.select(b).select("circle")           // Trasforma il cerchio all'interno dell'elemento b
            .transition()
            .duration(1000)
            .attr("cx", newX)
            .attr("cy", newY);

        d3.select(b).select("#var1")             // trasforma la foglia 1
            .transition()
            .duration(1000)
            .attr("transform", `translate(${newX},${newY}) scale(${sizeScale(data[i].var1)})`)

        d3.select(b).select("#var2")             // trasforma la foglia 2
            .transition()
            .duration(1000)
            .attr("transform", `translate(${newX},${newY}) scale(${sizeScale(data[i].var2)})`)

        d3.select(b).select("#var3")             // trasforma la foglia 3
            .transition()
            .duration(1000)
            .attr("transform", `translate(${newX},${newY}) scale(${sizeScale(data[i].var3)})`)

        d3.select(b).select("#var4")             // trasforma la foglia 4
            .transition()
            .duration(1000)
            .attr("transform", `translate(${newX},${newY}) scale(${sizeScale(data[i].var4)})`)
    }
}

/* Funzione lanciata ogni volta che viene registrato un doubleClick su una foglia
 * riceve come parametro tutti i dati necessari, la scala di Y, la scala della grandezza
 * x che corrisponde all'oggetto che è stato clickato (this) 
 * n che rappresenta il numero della foglia clickata
 */
function onDoubleClick(event, data, scaleY, sizeScale, x, n) {
    /* ottiene la lista delle foglia a partire dal nodo corrente */
    const leavesList = x.parentNode.parentNode.children;
    for (let i = 0; i < 10; i++) {
        const b = leavesList[i];

        const newX = parseFloat(b.children[4].getAttribute("cx"));

        /* aggiorna la coordinata new Y in base alla varibile selezionata */
        let newY
        switch (n) {
            case 1:
                newY = scaleY(data[i].var1);
                break;
            case 2:
                newY = scaleY(data[i].var2);
                break;
            case 3:
                newY = scaleY(data[i].var3);
                break;
            case 4:
                newY = scaleY(data[i].var4);
                break;
        }

        d3.select(b).select("circle")           // Trasforma il cerchio all'interno dell'elemento b
            .transition()
            .duration(1000)
            .attr("cx", newX)
            .attr("cy", newY);

        /* aggiornamento delle posizioni degli oggetti */
        d3.select(b).select("#var1")             // trasforma la foglia 1
            .transition()
            .duration(1000)
            .attr("transform", `translate(${newX},${newY}) scale(${sizeScale(data[i].var1)})`)

        d3.select(b).select("#var2")             // trasforma la foglia 2
            .transition()
            .duration(1000)
            .attr("transform", `translate(${newX},${newY}) scale(${sizeScale(data[i].var2)})`)

        d3.select(b).select("#var3")             // trasforma la foglia 3
            .transition()
            .duration(1000)
            .attr("transform", `translate(${newX},${newY}) scale(${sizeScale(data[i].var3)})`)

        d3.select(b).select("#var4")             // trasforma la foglia 4
            .transition()
            .duration(1000)
            .attr("transform", `translate(${newX},${newY}) scale(${sizeScale(data[i].var4)})`)
    }
}

d3.json("data.json").then(function (data) {
    const svg = d3.select("svg");

    // Trova il valore massimo tra tutte le variabili
    const maxVariableValue = d3.max(data, d => d3.max(Object.values(d)));

    function draw(data) {
        svg.selectAll(".leaf")
            .data(data)
            .enter()
            .append("g")
            .attr("class", "leaf")
            .each(function (d) {
                const group = d3.select(this);
                const screenX = window.screen.width * 0.8           // ottiene dimensioni dello schermo
                const screenY = window.screen.height * 0.8

                /* scala per i valori di X */
                var scaleX = d3.scaleLinear()
                    .domain([0, maxVariableValue])
                    .range([50, screenX-50]);

                /* scala per i valori di Y */
                var scaleY = d3.scaleLinear()
                    .domain([0, maxVariableValue])
                    .range([50, screenY-50]);

                /* scala per la dimensione */
                var sizeScale = d3.scaleLinear()
                    .domain([0, maxVariableValue])
                    .range([0.5, 1.7]);

                /* scala per inizializzazione randomica delle posizioni */
                var randomScaleX = d3.scaleLinear()
                    .domain([0,1])
                    .range([50,screenX-50])
                var randomScaleY = d3.scaleLinear()
                    .domain([0,1])
                    .range([50,screenY-50])

                /* inizializzazione delle coordinate in funzione della variabile var1 */
                const newX = randomScaleX(Math.random(screenX))
                const newY = randomScaleY(Math.random(screenY))

                /* Foglia in alto a sinistra - var1 */
                group.append("path")
                    .attr("id", "var1")
                    .attr("transform", `translate(${newX},${newY}) scale(${sizeScale(d.var1)})`)
                    .attr("d", "M-11.3 -27.8c-10-5.8-13 4.2-9.7 8.7c-5-3.3-14.6-.1-8.8 9.5c6.5 10.7 24.9 7.8 27 8.3c-.3-1.7 2.2-20.3-8.5-26.5")
                    .attr("fill", "#83bf4f")

                    /* Singolo click, corrisponde a trasformazione lungo asse X */
                    .on("click", function (event) {
                        onClick(event, data, scaleX, sizeScale, this, 1);
                    })

                    /* Doppio click, corrisponde a trasformazione lungo asse Y */
                    .on("dblclick", function (event) {
                        onDoubleClick(event, data, scaleY, sizeScale, this, 1);
                    });


                /* Foglia in alto a destra - var2 */
                group.append("path")
                    .attr("id", "var2")
                    .attr("transform", `translate(${newX},${newY}) scale(${sizeScale(d.var2)})`)
                    .attr("d", "M27.2 -10c5.9-9.8-4.3-12.8-8.8-9.5c3.4-5 .1-14.4-9.7-8.7c-10.9 6.4-7.9 24.5-8.5 26.6c1.8-.3 20.7 2.1 27-8.4")
                    .attr("fill", "#7bb246")

                    /* Singolo click, corrisponde a trasformazione lungo asse X */
                    .on("click", function (event) {
                        onClick(event, data, scaleX, sizeScale, this, 2);
                    })

                    /* Doppio click, corrisponde a trasformazione lungo asse Y */
                    .on("dblclick", function (event) {
                        onDoubleClick(event, data, scaleY, sizeScale, this, 2);
                    });

                /* Foglia in basso a sinistra - var3*/
                group.append("path")
                    .attr("id", "var3")
                    .attr("transform", `translate(${newX},${newY}) scale(${sizeScale(d.var3)})`)
                    .attr("d", "M-30.8 12c-5.9 9.8 4.3 12.8 8.8 9.5c-3.4 5-.1 14.4 9.7 8.7c10.9-6.4 7.9-24.5 8.5-26.6c-1.8.3-20.7-2.1-27 8.4")
                    .attr("fill", "#7bb246")

                    /* Singolo click, corrisponde a trasformazione lungo asse X */
                    .on("click", function (event) {
                        onClick(event, data, scaleX, sizeScale, this, 3);
                    })

                    /* Doppio click, corrisponde a trasformazione lungo asse Y */
                    .on("dblclick", function (event) {
                        onDoubleClick(event, data, scaleY, sizeScale, this, 3);
                    });

                /* Foglia in basso a destra - var4 */
                group.append("path")
                    .attr("id", "var4")
                    .attr("transform", `translate(${newX},${newY}) scale(${sizeScale(d.var4)})`)
                    .attr("d", "M10.7 30.2c10 5.8 13-4.2 9.7-8.7c5.1 3.3 14.6.1 8.8-9.5c-6.5-10.7-24.9-7.8-27-8.3c.3 1.7-2.2 20.3 8.5 26.5")
                    .attr("fill", "#83bf4f")

                    /* Singolo click, corrisponde a trasformazione lungo asse X */
                    .on("click", function (event) {
                        onClick(event, data, scaleX, sizeScale, this, 4);
                    })

                    /* Doppio click, corrisponde a trasformazione lungo asse Y */
                    .on("dblclick", function (event) {
                        onDoubleClick(event, data, scaleY, sizeScale, this, 4);
                    });

                /* cerchio al centro del quadrifoglio */
                group.append("circle")
                    .attr("cx", newX - 2)
                    .attr("cy", newY + 1)
                    .attr("r", 8)
                    .attr("fill", "#699635");

            });
    }

    draw(data);
});

// Funzione per impostare le dimensioni dell'elemento SVG
function setSVGSize() {
    const svg = document.getElementById("dynamic-svg");
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;

    // Imposta le dimensioni in base allo schermo
    svg.setAttribute("width", screenWidth * 0.8); // 80% della larghezza dello schermo
    svg.setAttribute("height", screenHeight * 0.8); // 80% dell'altezza dello schermo
}

// Chiama la funzione al caricamento della pagina
window.onload = setSVGSize;

// Aggiungi un listener per ridimensionare SVG al ridimensionamento della finestra
window.onresize = setSVGSize;