Crea un file json con dei dati multivariati: ci sono 10 data-point 
ogni data-point ha quattro variabili quantitative i cui valori sono
tutti positivi. In base a questi dati disegna 10 quadrifogli distribuiti
nell'area di disegno in cui ogni data-point è rappresentato da un
quadrifoglio. In particolare la variabile 1 determina la dimensione
della prima foglia del quadrifoglio, la variabile 2 determina la
dimensione della seconda foglia del quadrifoglio e così via. Facendo
click con il pulsante sinistro del mouse su una foglia di un
quadrifoglio si seleziona implicitamente la corrispondente variabile.
Supponiamo che sia la variabile 1. Tutti i quadrifogli assumono una
coordinata x proporzionale al valore della loro variabile 1. Facendo
click con il pulsante destro (oppure doppio click col sinistro, vedi tu
cosa ti viene più facile), invece, è la coordinata y ad avere un valore
proporzionale alla variabile selezionata. Fai in modo che i cambi di
posizione dei quadrifogli avvengano con un'animazione fluida. Usa le
scale d3.js per mappare l'intervallo dei valori delle variabili (che
deve poter essere arbitrario) sull'intervallo dei valori delle
coordinate, che dipende dalla tua interfaccia.
