define([], function() {
    var run = function() {
        test("join should return the two strings combined together.", function() {
            equal(['a', 'b'].join(""), "ab", "The return should be ab.");
        })
    };
    return {run: run};
});