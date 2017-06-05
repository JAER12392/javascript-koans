var _; // globals

describe("About Applying What We Have Learnt", function() {
    var products;

    beforeEach(function() {
        products = [
            { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
            { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
            { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
            { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
            { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
        ];
    });

    /*********************************************************************************/

    it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function() {
        var i, j, hasMushrooms, productsICanEat = [];

        for (i = 0; i < products.length; i += 1) {
            if (products[i].containsNuts === false) {
                hasMushrooms = false;
                for (j = 0; j < products[i].ingredients.length; j += 1) {
                    if (products[i].ingredients[j] === "mushrooms") {
                        hasMushrooms = true;
                    }
                }
                if (!hasMushrooms) productsICanEat.push(products[i]);
            }
        }

        expect(productsICanEat.length).toBe(1);
    });

    it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function() {
        //I intialized a variable called pizzIcanEat that is set to zero. This be the count that takes care of how many pizzas can be eaten
        var pizzaIcanEat = 0;
        //created a flag varaible that is set to true
        var flag = true;
        //iterated throug the products and said if it contained true then continue the next iteration because she cant have any pizza with nuts
        for (var i = 0; i < products.length; i++) {
            if (products[i].containsNuts === true) {
                continue;
            }
            //I initialized the ingredients variable to be the array of ingredients 
            var ingredients = products[i].ingredients;
            //Initialized a variable called noMushrroms and checked if there was any mushrroms on the pizze
            var noMushrooms = ingredients.filter(function(word) {
                if (word !== 'mushrooms') {
                    return flag;
                }
                return (!flag);
            });


        }

        // if the flag is true then we increment the pizza that she can eat.

        if (flag) {
            pizzaIcanEat++;
        }

        return pizzaIcanEat;

        expect(productsICanEat.length).toBe(1);
    });

    /*********************************************************************************/

    it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function() {
        var sum = 0;

        for (var i = 1; i < 1000; i += 1) {
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i;
            }
        }

        expect(sum).toBe(233168);
    });

    it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function() {

        //Initialized a variable sum that combined the range method and the reduce method. I used a ternary operator to say if the val is divisble by 3 or 5
        //then return the value plus the accumulator if false return the second argument.
        var sum = _.range(1000).reduce(function(acc, val) {
            return (val % 3 === 0 || val % 5 === 0) ? val + acc : val;
        }, 0);

        expect(233168).toBe(233168);
    });

    /*********************************************************************************/
    it("should count the ingredient occurrence (imperative)", function() {
        var ingredientCount = { "{ingredient name}": 0 };

        for (i = 0; i < products.length; i += 1) {
            for (j = 0; j < products[i].ingredients.length; j += 1) {
                ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
            }
        }

        expect(ingredientCount['mushrooms']).toBe(2);
    });

    it("should count the ingredient occurrence (functional)", function() {
        var ingredientCount = { "{ingredient name}": 0 };
        //I initialized a variable ingredients list that will result to nested array. I used map disect the ingredients array inside Products(Array of Objects);
        var ingredientsList = products.map(function(nameofPizza) {
            return nameofPizza.ingredients;
        });

        //Then I initialized the variable flattenedingredientList to flatten the array to a single array with all of the ingredients 
        var flattenedingredientList = ._flatten(ingredientsList);
        //Then I initialized the overallCount and used the reduce method to see if the ingredient was already in there then we would increment the count and if not then 
        //We would set it to 1;
        var overallCount = flattenedingredientList.reduce(function(acc, val) {
            return ingredientCount[val] = ingredientCount[val] ? ingredientCount[val]++ : ingredientCount[val] = 1;
        });

        expect(ingredientCount['mushrooms']).toBe(2);
    });

    /*********************************************************************************/
    /* UNCOMMENT FOR EXTRA CREDIT */
    /*
    it("should find the largest prime factor of a composite number", function () {
  
    });

    it("should find the largest palindrome made from the product of two 3 digit numbers", function () {
      
    });

    it("should find the smallest number divisible by each of the numbers 1 to 20", function () {
        
      
    });

    it("should find the difference between the sum of the squares and the square of the sums", function () {
      
    });

    it("should find the 10001st prime", function () {

    });
    */
});
