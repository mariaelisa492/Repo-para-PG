export const validationFunction = (input) => {
    let errors = {}

    if(input.price <= 0) errors.price = 'Price greater than 0'

    if(input.stock < 0) errors.stock = 'Stock greater than or equal to 0'

    if(!input.name || /^([0-9])*$/.test(input.name)) errors.name = "Name is required and it can't be just numbers"

    if(!input.description || /^([0-9])*$/.test(input.description)) errors.description = "Description is required and it can't be just numbers"

    if(!input.brand || /^([0-9])*$/.test(input.brand)) errors.brand = "Brand is required and it can't be just numbers"

    if(!input.model || /^([0-9])*$/.test(input.model)) errors.model = "Model is required and it can't be just numbers"

    if(!input.category) errors.category = 'Category is required'

    return errors;
}