
import * as yup from 'yup';

export const signinFormValidation = yup.object().shape({
  email: yup.string().email('invalid_email').required('req_email'),
  password: yup
    .string()
    .required('error_pass_enter')
    .min(8, 'error_pass_short'),
});
export const forgotemailFormValidation = yup.object().shape({
  email_or_phone: yup.string().email('invalid_email').required('req_email'),
});
export const renewpasswordFormValidation = yup.object().shape({
  password: yup.string().required('req_pass').min(8, 'weak_pass'),
  verification_code: yup
    .string()
    .required('Verification code is required').min(6, 'Enter 6 digit verification code').max(6, 'Enter 6 digit verification code')

});
export const signupFormValidation = yup.object().shape({
  name: yup.string().required('req_name'),
  email_or_phone: yup.string().email('invalid_email').required('req_email'),
  password: yup.string().required('req_pass').min(8, 'weak_pass'),
  passowrd_confirmation: yup
    .string()
    .required('req_pass')
    .oneOf([yup.ref('password')], 'miss_match_pass'),

});
export const updateProfileFormValidation = yup.object().shape({
  first_name: yup.string().required('req_name'),
  email: yup.string().email('invalid_email').required('req_email'),
  phone: yup.string().max(13, 'invalid_phone').required('phone_required'),


  doc_cat_id: yup.string().required('req_cat'),
  zip_code: yup.string().required('req_zip_code'),
  city: yup.string().required('req_city'),
  state: yup.string().required('req_state'),
  price: yup.string().required('req_price'),
  experience: yup.string().required('req_experience'),
});

export const updatePasswordValidation = yup.object().shape({
  old_password: yup.string().required('req_pass').min(8, 'weak_pass'),
  new_password: yup
    .string()
    .required('new_password_required')
    .min(8, 'New weak_pass'),
});
export const addHotelValidation = yup.object().shape({
  title: yup.string().required('title_required'),
  content: yup.string().required('content_required'),
  video: yup.string().required('link_required').url('invalid_link'),

});
export const addCarValidation = yup.object().shape({
  title: yup.string().required('title_required'),
  content: yup.string().required('content_required'),

  video: yup.string().required('link_required').url('invalid_link'),

});
export const addRoomValidation = yup.object().shape({
  title: yup.string().required('title_required'),
  number: yup.string().required('number_required'),
  price: yup.string().required('price_required'),
  beds: yup.string().required('beds_required'),
  size: yup.string().required('size_required'),
  adults: yup.string().required('adults_required'),
  ical_import_url: yup.string().required('link_required').url('invalid_link'),
  gallery: yup
    .array()
    .of(
      yup.object().shape({
        url: yup.string().required('select_image'),
      })
    )
    .required('select_image'),
  image_id: yup
    .object()
    .shape({
      url: yup.string().required('select_image'),
    })
    .required('select_image'),
});

export const addPriceHotelValidation = yup.object().shape({
  check_in_time: yup.string().required('checkin_required'),
  check_out_time: yup.string().required('checkout_required'),
  price: yup.string().required('price_required'),



});