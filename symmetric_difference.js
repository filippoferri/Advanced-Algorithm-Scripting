/*
Create a function that takes two or more arrays and returns an array of the symmetric difference of the provided arrays.

The mathematical term symmetric difference refers to the elements in two sets that are in either the first or second set, but not in both.

Here are some helpful links:

Array.reduce()
Symmetric Difference
*/

function sym() {

    var output;
    output = [].slice.apply(arguments).reduce(function (previous, current) {
        current.filter(function (value, index, self) { //for unique
            return self.indexOf(value) === index;
        }).map(function (element) { //pushing array
            var loc = previous.indexOf(element);
            a = [loc !== -1 ? previous.splice(loc, 1) : previous.push(element)];
        });
        return previous;
    }, []);
    return output;

}

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])
