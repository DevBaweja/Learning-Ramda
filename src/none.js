// List
// (a → Boolean) → [a] → Boolean
// fn
// The predicate function.
// list
// The array to consider.
// Returns Boolean `true` if the predicate is not satisfied by every element, `false` otherwise.

/*
Returns true if no elements of the list match the predicate, false otherwise.

Dispatches to the all method of the second argument, if present.

Acts as a transducer if a transformer is given in list position.
See also all, any.

const isEven = n => n % 2 === 0;
const isOdd = n => n % 2 === 1;

R.none(isEven, [1, 3, 5, 7, 9, 11]); //=> true
R.none(isOdd, [1, 3, 5, 7, 8, 11]); //=> false
*/
