const { componentData } = require('../data/data');
const processOrder = (components) => {
    console.log("Input Components:", components);

    const selectedComponents = new Set(components);
    const requiredParts = new Set(['A', 'D', 'F', 'I', 'K']); 

    if (selectedComponents.size !== 5 || ![...selectedComponents].every(part => requiredParts.has(part))) {
        return { error: 'Invalid order. Please select one part from each category.' };
    }

    console.log("Required Parts:", requiredParts);

    // Calculate totalPrice
    let totalPrice = 0;
    for (const component of components) {
        console.log("Component")
        const part = componentData[component];
        if (!part) {
            console.error(`Component '${component}' is not found in componentData.`);
            continue;
        }
        totalPrice += part.price;
    }

    console.log("Total Price:", totalPrice);

    return { totalPrice };
};
module.exports = { processOrder };