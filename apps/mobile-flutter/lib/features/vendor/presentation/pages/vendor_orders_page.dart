import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../../../core/widgets/app_header.dart';

class VendorOrdersPage extends StatelessWidget {
  const VendorOrdersPage({super.key});

  @override
  Widget build(BuildContext context) {
    final orders = [
      ('ORD-101', 'John D.', 294, 'Pending'),
      ('ORD-102', 'Jane S.', 122, 'Shipped'),
    ];
    return Scaffold(
      appBar: AppHeader(title: 'Orders'),
      body: ListView.builder(
        padding: const EdgeInsets.all(16),
        itemCount: orders.length,
        itemBuilder: (_, i) {
          final (id, customer, total, status) = orders[i];
          return Card(
            margin: const EdgeInsets.only(bottom: 16),
            child: ListTile(
              title: Text(id, style: const TextStyle(
                fontWeight: FontWeight.w600,
              )),
              subtitle: Text('$customer • \$$total'),
              trailing: Chip(
                label: Text(status),
                backgroundColor: status == 'Shipped'
                    ? Colors.green.shade100
                    : Colors.amber.shade100,
              ),
              onTap: () => context.go('/vendor/orders/$id'),
            ),
          );
        },
      ),
    );
  }
}
