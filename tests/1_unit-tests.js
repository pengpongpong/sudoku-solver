const { AssertionError } = require('chai');
const chai = require('chai');
const assert = chai.assert;

const Solver = require('../controllers/sudoku-solver.js');
let solver = new Solver();


/* Logic handles a valid puzzle string of 81 characters
Logic handles a puzzle string with invalid characters (not 1-9 or .)
Logic handles a puzzle string that is not 81 characters in length
Logic handles a valid row placement
Logic handles an invalid row placement
Logic handles a valid column placement
Logic handles an invalid column placement
Logic handles a valid region (3x3 grid) placement
Logic handles an invalid region (3x3 grid) placement
Valid puzzle strings pass the solver
Invalid puzzle strings fail the solver
Solver returns the expected solution for an incomplete puzzle */

let validPuzzle = "1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37."
let invalidPuzzle = "1.5ab2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37."
let invalidPuzzleLength = "1.5ab2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914...37."
let solvedPuzzle = "135762984946381257728459613694517832812936745357824196473298561581673429269145378"

suite('Unit Tests', () => {
    test("Logic handles a valid puzzle string of 81 characters", (done) => {
        assert.equal(solver.solve(validPuzzle), solvedPuzzle);
        done()
    });
    test("Logic handles a puzzle string with invalid characters (not 1-9 or .)", (done) => {
        assert.equal(solver.solve(invalidPuzzle), false);
        done()
    });
    test("Logic handles a puzzle string that is not 81 characters in length", (done) => {
        assert.equal(solver.solve(invalidPuzzleLength), false);
        done()
    });
    test("Logic handles a valid row placement", (done) => {
        assert.equal(solver.checkRowPlacement(validPuzzle, "A", 2, 3), true)
        done()
    });
    test("Logic handles an invalid row placement", (done) => {
        assert.equal(solver.checkRowPlacement(validPuzzle, "A", 2, 4), false)
        done()
    });
    test("Logic handles a valid column placement", (done) => {
        assert.equal(solver.checkColPlacement(validPuzzle, "A", 2, 3), true)
        done()
    });
    test("Logic handles an invalid column placement", (done) => {
        assert.equal(solver.checkColPlacement(validPuzzle, "A", 2, 6), false)
        done()
    });
    test("Logic handles a valid region (3x3 grid) placement", (done) => {
        assert.equal(solver.checkRegionPlacement(validPuzzle, "A", 2, 3), true)
        done()
    });
    test("Logic handles an invalid region (3x3 grid) placement", (done) => {
        assert.equal(solver.checkRegionPlacement(validPuzzle, "A", 2, 5), false)
        done()
    });
    test("Valid puzzle strings pass the solver", (done) => {
        assert.equal(solver.solve(validPuzzle), solvedPuzzle)
        done()
    });
    test("Invalid puzzle strings fail the solver", (done) => {
        assert.equal(solver.solve(invalidPuzzle), false)
        done()
    });
    test("Solver returns the expected solution for an incomplete puzzle", (done) => {
        assert.equal(solver.solve(validPuzzle), solvedPuzzle)
        done()
    });
});
