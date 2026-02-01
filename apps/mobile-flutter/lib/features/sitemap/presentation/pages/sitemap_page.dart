import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../../../core/widgets/app_scaffold.dart';

class SitemapPage extends StatelessWidget {
  const SitemapPage({super.key});

  static final _links = [
    ('Home', '/'),
    ('Categories', '/categories'),
    ('Cart', '/cart'),
    ('Login', '/login'),
    ('Register', '/register'),
    ('Dashboard', '/dashboard'),
    ('Wishlist', '/wishlist'),
    ('Coupons', '/coupons'),
    ('Special Offers', '/special-offers'),
    ('Campaigns', '/campaigns'),
    ('Terms', '/terms'),
    ('Privacy', '/privacy'),
    ('Refund', '/refund'),
    ('About', '/about'),
    ('Contact', '/contact'),
    ('Vendor Login', '/vendor/login'),
  ];

  @override
  Widget build(BuildContext context) {
    return AppScaffold(
      title: 'Sitemap',
      body: GridView.builder(
        padding: const EdgeInsets.all(16),
        gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 2,
          childAspectRatio: 2,
          crossAxisSpacing: 12,
          mainAxisSpacing: 12,
        ),
        itemCount: _links.length,
        itemBuilder: (_, i) {
          final (label, route) = _links[i];
          return Card(
            child: ListTile(
              title: Text(label),
              onTap: () => context.go(route),
            ),
          );
        },
      ),
    );
  }
}
