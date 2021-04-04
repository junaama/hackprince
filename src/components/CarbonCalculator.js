export function calculateRecipeAverageCarbon(recipeProtein) { // Returns ~ kg CO2 given protein content

    //  const cheeseEq float32 = 4.29
    //      const eggEq float32 = 6.67
    //      const chickenEq float32 = 3.74
    //      const beefEq float32 = 4.28
    //      const porkEq float32 = 3.84
    //      const fishEq float32 = 4.29

    var tofuEq = 10
    var legumeEq = 10
    var nutEq = 5
    var perType = recipeProtein / 3.0

    // declare and initialize protein arrays, the first element is the amount of
    // carbon emissions in kg produced from 1 serving size, the second element
    // is grams in one serving size
    var legume =[13.9, 150]
    var nuts = [0.6, 30]
    var tofu = [16.4, 100]

    var tofuGrams = perType * tofuEq
    var legumeGrams = perType * legumeEq
    var nutGrams = perType * nutEq

    const carbonFootprint = (tofuGrams * (tofu[0] / tofu[1])) + (legumeGrams * legume[0] / legume[1]) + (nutGrams * nuts[0] / nuts[1])

    return carbonFootprint
}