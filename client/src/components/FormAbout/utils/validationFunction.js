export const validationFunction = (input) => {
  let errors = {};

  if (!input.email) errors.email = "Email is required ";

  if (!input.telephone || !/^(([0-9]{3}-[0-9]{5})?$|^[0-9]{8})+$/.test(input.telephone))
    errors.telephone =
      "Telephone is required and it can be just numbers and special characters";

  if (!input.address || /^([0-9])*$/.test(input.address))
    errors.address = "Address is required and it can't be just numbers";

  if (!input.city || !/^([a-zA-Z])*$/.test(input.city))
    errors.city = "City is required and it can't be numbers";

  if (!input.stateOrProvince || !/^([a-zA-Z])*$/.test(input.stateOrProvince))
    errors.stateOrProvince =
      "Stateo or Province is required and it can't be numbers";

  return errors;
};
