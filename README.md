# D3.js - Four-leaf clovers
Information Visualization Course project
## Task
Create a JSON file with multivariate data: there are 10 data-points, each data-point has four quantitative variables whose values are all positive. Based on this data, it draws 10 cloverleaves distributed in the drawing area where each data-point is represented by a cloverleaf. Specifically, variable 1 determines the size of the first leaf of the cloverleaf, variable 2 determines the size of the second leaf of the cloverleaf, and so on. Clicking the left mouse button on a leaf of a cloverleaf implicitly selects the corresponding variable. Suppose it is variable 1. All cloverleaves take on an x-coordinate proportional to the value of their variable 1. By right-clicking (or double-clicking with the left mouse button, see what comes easier), however, it is the y-coordinate that has a value proportional to the selected variable. Make the shamrocks' position changes happen with a smooth animation. Use d3.js scales to map the range of variable values (which should be able to be arbitrary) to the range of coordinate values, which depends on your interface.
