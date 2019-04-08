const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : '';
  data.status = !isEmpty(data.status) ? data.status : '';
  data.skills = !isEmpty(data.skills) ? data.skills : '';

  if (!Validator.isLength(data.handle, { min: 4, max: 20})) {
    errors.handle = 'Handle needs to be between 4 and 20 characters';
  }

  if (Validator.isEmpty(data.handle)) {
    errors.email = 'Profile Handle  is required';
  }

  if (Validator.isEmpty(data.status)) {
    errors.status = 'Status field is required';
  }

  if (Validator.isEmpty(data.skills)) {
    errors.skills = 'Skills field is required';
  }

  if (!isEmpty(data.website)) {
    if(!Validator.isURL(data.website, {require_protocol: true})){
      errors.website = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.github)) {
    if(!Validator.isURL(data.github, {require_protocol: true})){
      errors.github = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.youtube)) {
    if(!Validator.isURL(data.youtube, {require_protocol: true})){
      errors.youtube = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.twitter)) {
    if(!Validator.isURL(data.twitter, {require_protocol: true})){
      errors.twitter = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.facebook)) {
    if(!Validator.isURL(data.facebook, {require_protocol: true})){
      errors.facebook = 'Not a valid URL';
    }
  }

  if (!isEmpty(data.linkedin)) {
    if(!Validator.isURL(data.linkedin, {require_protocol: true})){
      errors.linkedin = 'Not a valid URL';
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
