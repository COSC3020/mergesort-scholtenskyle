# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

My merge function requires looping through the values, which adds the $$n^2$$ complexity to the code. But the original mergesort function does use for loops, which would then also add the logn complexity (which then uses the $$n^2$$ complexity for every iteration as well). This would then have a final complexity of $$O(logn*n^2)$$.
