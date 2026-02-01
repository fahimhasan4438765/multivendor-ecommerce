import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../../../core/widgets/app_scaffold.dart';

class DashboardPage extends StatelessWidget {
  const DashboardPage({super.key});

  @override
  Widget build(BuildContext context) {
    return AppScaffold(
      title: 'My Dashboard',
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          _buildMenuCard(context, 'Orders', Icons.shopping_bag, '/orders'),
          _buildMenuCard(context, 'Wishlist', Icons.favorite, '/wishlist'),
          _buildMenuCard(context, 'Coupons', Icons.local_offer, '/coupons'),
        ],
      ),
    );
  }

  Widget _buildMenuCard(
    BuildContext context,
    String title,
    IconData icon,
    String route,
  ) {
    return Card(
      margin: const EdgeInsets.only(bottom: 16),
      child: ListTile(
        leading: Icon(icon),
        title: Text(title, style: const TextStyle(
          fontWeight: FontWeight.w600,
        )),
        trailing: const Icon(Icons.chevron_right),
        onTap: () => context.go(route),
      ),
    );
  }
}
