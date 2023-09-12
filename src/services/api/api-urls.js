export const IP = 'https://multiecom.prismatic-technologies.com';
export const URLS = {
  base_url: `${IP}/api/v2/`,
  image_url: `${IP}/`,
  auth: {
    signup: 'auth/signup',
    get_notification: 'user/getNotification',
    login: 'auth/login',
    dashboard_counters: 'profile/counters',
    get_user_info: 'user/userInfo',
    update_image: 'profile/image-upload',
    change_password: 'auth/password/confirm_reset',
    otp_verify: 'auth/confirm_code',
    resend_otp_verify: 'auth/resend_code',
    forget_password: 'auth/password/forget_request',
    resend_password_code: 'auth/password/resend_code',
    update_profile: 'profile/update',
    locations: 'locations',
    logout: 'auth/logout',
  },
  vendor: {
    get_vendors: 'shops',
  },
  wishlist: {
    wishlist: 'wishlists',
    remove_wishlist: 'wishlists-remove-product?product_id=',
    add_wishlist: 'wishlists-add-product?product_id=',
  },
  brand: {
    all_brands: 'brands',
    top_brands: 'brands/top',
  },
  app: {
    get_banners: 'sliders',
    get_featured_categories: 'categories/featured',
    get_all_featured_products: 'products/featured',
    get_all_products: 'products',
    get_product_details: 'products/',
  },
  address: {
    get_address: 'user/shipping/address',
    update: 'user/shipping/update',
    add_address: 'user/shipping/create',
    delete_address: 'user/shipping/delete/',
    get_cities: 'cities',
    get_countries: 'countries',
    get_states: 'states',
  },
  categories: {
    get_all_categories: 'categories?parent_id=0',
    get_all_categories_featured: 'categories/featured',
    get_all_products_of_category_paginated: 'products/category/',
  },
  wallet: {
    add_amount: '',
    get_wallet: '',
  },
};
