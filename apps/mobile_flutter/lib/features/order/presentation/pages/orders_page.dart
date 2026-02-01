import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../../../core/widgets/app_scaffold.dart';

class OrdersPage extends StatelessWidget {
  const OrdersPage({super.key});

  @override
  Widget build(BuildContext context) {
    final orders = [
      ('ORD-001', '2026-01-28', 294, 'Delivered'),
      ('ORD-002', '2026-01-25', 122, 'Shipped'),
    ];
    return AppScaffold(
      title: 'My Orders',
      body: ListView.builder(
        padding: const EdgeInsets.all(16),
        itemCount: orders.length,
        itemBuilder: (_, i) {
          final (id, date, total, status) = orders[i];
          return Card(
            margin: const EdgeInsets.only(bottom: 16),
            child: ListTile(
              title: Text(id, style: const TextStyle(
                fontWeight: FontWeight.w600,
              )),
              subtitle: Text('$date • \$$total'),
              trailing: Chip(
                label: Text(status),
                backgroundColor: status == 'Delivered'
                    ? Colors.green.shade100
                    : Colors.blue.shade100,
              ),
              onTap: () => context.go('/orders/$id'),
            ),
          );
        },
      ),
    );
  }
}
