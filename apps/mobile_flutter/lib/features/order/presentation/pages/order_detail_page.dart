import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../../../core/widgets/app_scaffold.dart';

class OrderDetailPage extends StatelessWidget {
  final String id;

  const OrderDetailPage({super.key, required this.id});

  @override
  Widget build(BuildContext context) {
    final timeline = [
      ('Order Placed', '2026-01-20 10:30'),
      ('Shipped', '2026-01-22 09:00'),
      ('Delivered', '2026-01-25 14:30'),
    ];
    return AppScaffold(
      title: 'Order $id',
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text('Delivery Status', style: TextStyle(
              fontSize: 18,
              fontWeight: FontWeight.bold,
            )),
            const SizedBox(height: 16),
            ...timeline.map((t) => Padding(
              padding: const EdgeInsets.only(bottom: 12),
              child: Row(
                children: [
                  Container(
                    width: 12,
                    height: 12,
                    decoration: const BoxDecoration(
                      color: Colors.green,
                      shape: BoxShape.circle,
                    ),
                  ),
                  const SizedBox(width: 16),
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(t.$1, style: const TextStyle(
                        fontWeight: FontWeight.w600,
                      )),
                      Text(t.$2, style: TextStyle(
                        fontSize: 12,
                        color: Colors.grey.shade600,
                      )),
                    ],
                  ),
                ],
              ),
            )),
            const SizedBox(height: 24),
            const Text('Items', style: TextStyle(
              fontSize: 18,
              fontWeight: FontWeight.bold,
            )),
            const ListTile(
              title: Text('Product One'),
              subtitle: Text('Qty: 2 × \$86 = \$172'),
            ),
            const Divider(),
            const Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text('Total'),
                Text('\$294', style: TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 18,
                )),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
