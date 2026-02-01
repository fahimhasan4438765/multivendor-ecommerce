import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../features/auth/presentation/pages/login_page.dart';
import '../../features/auth/presentation/pages/register_page.dart';
import '../../features/home/presentation/pages/home_page.dart';
import '../../features/catalog/presentation/pages/categories_page.dart';
import '../../features/catalog/presentation/pages/category_products_page.dart';
import '../../features/product/presentation/pages/product_detail_page.dart';
import '../../features/cart/presentation/pages/cart_page.dart';
import '../../features/checkout/presentation/pages/checkout_page.dart';
import '../../features/order/presentation/pages/orders_page.dart';
import '../../features/order/presentation/pages/order_detail_page.dart';
import '../../features/dashboard/presentation/pages/dashboard_page.dart';
import '../../features/wishlist/presentation/pages/wishlist_page.dart';
import '../../features/coupons/presentation/pages/coupons_page.dart';
import '../../features/offers/presentation/pages/special_offers_page.dart';
import '../../features/offers/presentation/pages/campaigns_page.dart';
import '../../features/offers/presentation/pages/campaign_detail_page.dart';
import '../../features/policy/presentation/pages/terms_page.dart';
import '../../features/policy/presentation/pages/privacy_page.dart';
import '../../features/policy/presentation/pages/refund_page.dart';
import '../../features/policy/presentation/pages/about_page.dart';
import '../../features/contact/presentation/pages/contact_page.dart';
import '../../features/vendor/presentation/pages/vendor_login_page.dart';
import '../../features/vendor/presentation/pages/vendor_register_page.dart';
import '../../features/vendor/presentation/pages/vendor_dashboard_page.dart';
import '../../features/vendor/presentation/pages/vendor_products_page.dart';
import '../../features/vendor/presentation/pages/vendor_orders_page.dart';
import '../../features/vendor/presentation/pages/vendor_order_detail_page.dart';
import '../../features/vendor/presentation/pages/vendor_settings_page.dart';
import '../../features/vendor/presentation/pages/vendor_profile_page.dart';
import '../../features/vendor/presentation/pages/vendor_accounts_page.dart';
import '../../features/vendor/presentation/pages/vendor_inventory_page.dart';
import '../../features/vendor/presentation/pages/vendor_offers_page.dart';
import '../../features/sitemap/presentation/pages/sitemap_page.dart';

final _rootNavigatorKey = GlobalKey<NavigatorState>();

GoRouter createAppRouter() {
  return GoRouter(
    navigatorKey: _rootNavigatorKey,
    initialLocation: '/',
    routes: [
      GoRoute(path: '/', builder: (_, __) => const HomePage()),
      GoRoute(path: '/login', builder: (_, __) => const LoginPage()),
      GoRoute(path: '/register', builder: (_, __) => const RegisterPage()),
      GoRoute(path: '/categories', builder: (_, __) => const CategoriesPage()),
      GoRoute(
        path: '/categories/:slug',
        builder: (c, s) => CategoryProductsPage(slug: s.pathParameters['slug']!),
      ),
      GoRoute(
        path: '/products/:id',
        builder: (c, s) => ProductDetailPage(id: s.pathParameters['id']!),
      ),
      GoRoute(path: '/cart', builder: (_, __) => const CartPage()),
      GoRoute(path: '/checkout', builder: (_, __) => const CheckoutPage()),
      GoRoute(path: '/orders', builder: (_, __) => const OrdersPage()),
      GoRoute(
        path: '/orders/:id',
        builder: (c, s) => OrderDetailPage(id: s.pathParameters['id']!),
      ),
      GoRoute(path: '/dashboard', builder: (_, __) => const DashboardPage()),
      GoRoute(path: '/wishlist', builder: (_, __) => const WishlistPage()),
      GoRoute(path: '/coupons', builder: (_, __) => const CouponsPage()),
      GoRoute(path: '/special-offers', builder: (_, __) => const SpecialOffersPage()),
      GoRoute(path: '/campaigns', builder: (_, __) => const CampaignsPage()),
      GoRoute(
        path: '/campaigns/:id',
        builder: (c, s) => CampaignDetailPage(id: s.pathParameters['id']!),
      ),
      GoRoute(path: '/terms', builder: (_, __) => const TermsPage()),
      GoRoute(path: '/privacy', builder: (_, __) => const PrivacyPage()),
      GoRoute(path: '/refund', builder: (_, __) => const RefundPage()),
      GoRoute(path: '/about', builder: (_, __) => const AboutPage()),
      GoRoute(path: '/contact', builder: (_, __) => const ContactPage()),
      GoRoute(path: '/vendor/login', builder: (_, __) => const VendorLoginPage()),
      GoRoute(path: '/vendor/register', builder: (_, __) => const VendorRegisterPage()),
      GoRoute(path: '/vendor/dashboard', builder: (_, __) => const VendorDashboardPage()),
      GoRoute(path: '/vendor/products', builder: (_, __) => const VendorProductsPage()),
      GoRoute(path: '/vendor/orders', builder: (_, __) => const VendorOrdersPage()),
      GoRoute(
        path: '/vendor/orders/:id',
        builder: (c, s) => VendorOrderDetailPage(id: s.pathParameters['id']!),
      ),
      GoRoute(path: '/vendor/settings', builder: (_, __) => const VendorSettingsPage()),
      GoRoute(path: '/vendor/profile', builder: (_, __) => const VendorProfilePage()),
      GoRoute(path: '/vendor/accounts', builder: (_, __) => const VendorAccountsPage()),
      GoRoute(path: '/vendor/inventory', builder: (_, __) => const VendorInventoryPage()),
      GoRoute(path: '/vendor/offers', builder: (_, __) => const VendorOffersPage()),
      GoRoute(path: '/sitemap', builder: (_, __) => const SitemapPage()),
    ],
  );
}
