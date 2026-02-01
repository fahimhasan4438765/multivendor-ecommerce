import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../../../core/widgets/app_header.dart';

class VendorDashboardPage extends StatelessWidget {
  const VendorDashboardPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppHeader(title: 'Vendor Dashboard'),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          _buildStatCard('Total Sales', '\$12,450'),
          _buildStatCard('Orders', '156'),
          _buildStatCard('Products', '48'),
          ListTile(
            title: const Text('Orders'),
            trailing: const Icon(Icons.chevron_right),
            onTap: () => context.go('/vendor/orders'),
          ),
          ListTile(
            title: const Text('Products'),
            trailing: const Icon(Icons.chevron_right),
            onTap: () => context.go('/vendor/products'),
          ),
        ],
      ),
    );
  }

  Widget _buildStatCard(String label, String value) {
    return Card(
      margin: const EdgeInsets.only(bottom: 16),
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Row(
          children: [
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(label),
                  Text(value, style: const TextStyle(
                    fontSize: 24,
                    fontWeight: FontWeight.bold,
                  )),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
