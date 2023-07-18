export const IP = 'http://jalopypro-001-site1.atempurl.com';
export const URLS = {
  base_url: `${IP}/api/`,
  image_url: `${IP}/`,
  auth: {
    register: 'Account/register',
    login: 'Account/authenticate',
    send_email_code: 'Account/verification-code',
    // update_password: 'doctor/updatePassword',
    // change_password: 'doctor/changePassword',
    // otp_verify: 'doctor/otpVerify',
    forget_password: 'Account/forgot-password',
    update_profile: 'account/update',
  },
  product: {
    popular_shop_products: 'v1/Product/GetPopular?ShopType=Store&VendorShopId=',
    products_by_cat_id: 'v1/Product/GetProductsByCategory/',
  },
  shop: {
    shop_categories: 'v1/ShopType',
    get_shops_by_cat_id: 'v1/VendorShop?Type=', //type = category_id
    trending_shops: 'v1/VendorShop/GetTrendingShops', //trending shop this week
    popluar_shops: 'v1/VendorShop/GetPopularShops', // popular shop
    shop_details: 'v1/VendorShop/',
    shop_details_categories: 'v1/productCategory?vendorShopId=',
  },
  wishlist: {
    get_wishlist: 'v1/FavouriteUserProduct/GetAllUserProductWithDeatails',
    add_product: 'v1/FavouriteUserProduct', //post method with body
    remove_product: 'v1/FavouriteUserProduct', //delete method with body
  },
  address: {
    get_user_addresses: 'v1/UserAddresses/GetAll?Search=',
    get_current_addresses: 'v1/UserAddresses/GetCurrentAddress',
    user_address: 'v1/UserAddresses', //same for post,put & delete
  },
};
