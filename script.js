d3.json("data.json").then(function(data) {
    const svg = d3.select("svg");

    // Trova il valore massimo tra tutte le variabili
    const maxVariableValue = d3.max(data, d => d3.max(Object.values(d)));

    function draw(data) {
        const leaves = svg.selectAll(".leaf")
        .data(data)
        .enter()
        .append("g")
        .attr("class", "leaf")
        .each(function(d) {
            const group = d3.select(this);
            const factorScaleX = 1500;
            const factorScaleY= 800
            const sizeFactor = 1.5;         // Fattore di scala per la dimensione del quadrifoglio
            
            /* scala per i valori di X */
            var scaleX =d3.scaleLinear();
            scaleX.domain([0, maxVariableValue])
            scaleX.range([50, factorScaleX])

            /* scala per i valori di Y */
            var scaleY =d3.scaleLinear();
            scaleY.domain([0, maxVariableValue])
            scaleY.range([50, factorScaleY])

            const newX = scaleX(d.var1*Math.random(factorScaleX))
            const newY = scaleY(d.var1*Math.random(factorScaleY))

            /* Foglia in alto a sinistra - var1 */
            group.append("path")
                .attr("transform", `translate(${newX-50},${newY-45}) scale(${sizeFactor})`)
                .attr("d", "M22.3 3.8c-10-5.8-13 4.2-9.7 8.7c-5-3.3-14.6-.1-8.8 9.5c6.5 10.7 24.9 7.8 27 8.3c-.3-1.7 2.2-20.3-8.5-26.5")
                .attr("fill", "#83bf4f")

                /* Singolo click, corrisponde a trasformazione lungo asse X */
                .on("click", function(event, d) {
                    const newX = scaleX(d.var1);
                    const newY = parseFloat(this.parentNode.children[4].getAttribute("cy"));   

                    group.selectAll("circle")           // trasforma il cerchio
                        .transition()
                        .duration(1000)
                        .attr("cx", newX)
                        .attr("cy", newY);

                    group.selectAll("path")             // trasforma le 4 foglie
                        .transition()
                        .duration(1000)
                        .attr("transform", `translate(${newX-50},${newY-45}) scale(${sizeFactor})`)
                })

                /* Doppio click, corrisponde a trasformazione lungo asse Y */
                .on("dblclick", function(event, d) {
                    const newX = parseFloat(this.parentNode.children[4].getAttribute("cx"));
                    const newY = scaleY(d.var1);

                    group.selectAll("circle")           // trasforma il cerchio
                        .transition()
                        .duration(1000)
                        .attr("cx", newX)
                        .attr("cy", newY);

                    group.selectAll("path")             // trasforma le 4 foglie
                        .transition()
                        .duration(1000)
                        .attr("transform", `translate(${newX-50},${newY-45}) scale(${sizeFactor})`)
                });

            /* Foglia in alto a destra - var2 */
            group.append("path")
                .attr("transform", `translate(${newX-50},${newY-45}) scale(${sizeFactor})`)
                .attr("d", "M60.2 22c5.9-9.8-4.3-12.8-8.8-9.5c3.4-5 .1-14.4-9.7-8.7c-10.9 6.4-7.9 24.5-8.5 26.6c1.8-.3 20.7 2.1 27-8.4")
                .attr("fill", "#7bb246")

                /* Singolo click, corrisponde a trasformazione lungo asse X */
                .on("click", function(event, d) {
                    const newX = scaleX(d.var2);
                    const newY = parseFloat(this.parentNode.children[4].getAttribute("cy"));   

                    group.selectAll("circle")           // trasforma il cerchio
                        .transition()
                        .duration(1000)
                        .attr("cx", newX)
                        .attr("cy", newY);

                    group.selectAll("path")             // trasforma le 4 foglie
                        .transition()
                        .duration(1000)
                        .attr("transform", `translate(${newX-50},${newY-45}) scale(${sizeFactor})`)
                })

                /* Doppio click, corrisponde a trasformazione lungo asse Y */
                .on("dblclick", function(event, d) {
                    const newX = parseFloat(this.parentNode.children[4].getAttribute("cx"));
                    const newY = scaleY(d.var2);

                    group.selectAll("circle")           // trasforma il cerchio
                        .transition()
                        .duration(1000)
                        .attr("cx", newX)
                        .attr("cy", newY);

                    group.selectAll("path")             // trasforma le 4 foglie
                        .transition()
                        .duration(1000)
                        .attr("transform", `translate(${newX-50},${newY-45}) scale(${sizeFactor})`)
                });

            /* Foglia in basso a sinistra - var3*/
            group.append("path")
                .attr("transform", `translate(${newX-50},${newY-45}) scale(${sizeFactor})`)
                .attr("d", "M3.8 40c-5.9 9.8 4.3 12.8 8.8 9.5c-3.4 5-.1 14.4 9.7 8.7c10.9-6.4 7.9-24.5 8.5-26.6c-1.8.3-20.7-2.1-27 8.4")
                .attr("fill", "#7bb246")

                /* Singolo click, corrisponde a trasformazione lungo asse X */
                .on("click", function(event, d) {
                    const newX = scaleX(d.var3);
                    const newY = parseFloat(this.parentNode.children[4].getAttribute("cy"));   

                    group.selectAll("circle")           // trasforma il cerchio
                        .transition()
                        .duration(1000)
                        .attr("cx", newX)
                        .attr("cy", newY);

                    group.selectAll("path")             // trasforma le 4 foglie
                        .transition()
                        .duration(1000)
                        .attr("transform", `translate(${newX-50},${newY-45}) scale(${sizeFactor})`)
                })

                /* Doppio click, corrisponde a trasformazione lungo asse Y */
                .on("dblclick", function(event, d) {
                    const newX = parseFloat(this.parentNode.children[4].getAttribute("cx"));
                    const newY = scaleY(d.var3);

                    group.selectAll("circle")           // trasforma il cerchio
                        .transition()
                        .duration(1000)
                        .attr("cx", newX)
                        .attr("cy", newY);

                    group.selectAll("path")             // trasforma le 4 foglie
                        .transition()
                        .duration(1000)
                        .attr("transform", `translate(${newX-50},${newY-45}) scale(${sizeFactor})`)
                });
            
            /* Foglia in basso a destra - var4 */
            group.append("path")
                .attr("transform", `translate(${newX-50},${newY-45}) scale(${sizeFactor})`)
                .attr("d", "M41.7 58.2c10 5.8 13-4.2 9.7-8.7c5.1 3.3 14.6.1 8.8-9.5c-6.5-10.7-24.9-7.8-27-8.3c.3 1.7-2.2 20.3 8.5 26.5")
                .attr("fill", "#83bf4f")

            /* Singolo click, corrisponde a trasformazione lungo asse X */
            .on("click", function(event, d) {
                    const newX = scaleX(d.var4);
                    const newY = parseFloat(this.parentNode.children[4].getAttribute("cy"));   

                    group.selectAll("circle")           // trasforma il cerchio
                        .transition()
                        .duration(1000)
                        .attr("cx", newX)
                        .attr("cy", newY);

                    group.selectAll("path")             // trasforma le 4 foglie
                        .transition()
                        .duration(1000)
                        .attr("transform", `translate(${newX-50},${newY-45}) scale(${sizeFactor})`)
                })

                /* Doppio click, corrisponde a trasformazione lungo asse Y */
                .on("dblclick", function(event, d) {
                    const newX = parseFloat(this.parentNode.children[4].getAttribute("cx"));
                    const newY = scaleY(d.var4);

                    group.selectAll("circle")           // trasforma il cerchio
                        .transition()
                        .duration(1000)
                        .attr("cx", newX)
                        .attr("cy", newY);

                    group.selectAll("path")             // trasforma le 4 foglie
                        .transition()
                        .duration(1000)
                        .attr("transform", `translate(${newX-50},${newY-45}) scale(${sizeFactor})`)
                });                        

            /* cerchio al centro del quadrifoglio */
            group.append("circle")
                .attr("cx", newX-2)
                .attr("cy", newY+1)
                .attr("r", 8) 
                .attr("fill", "#699635");
        });
    }

    draw(data);
});