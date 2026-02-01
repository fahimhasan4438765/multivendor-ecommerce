import 'package:flutter/material.dart';
import '../../../../core/widgets/app_header.dart';

class VendorOrderDetailPage extends StatelessWidget {
  final String id;

  const VendorOrderDetailPage({super.key, required this.id});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppHeader(title: 'Order $id'),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          const Text('Status Timeline', style: TextStyle(
            fontSize: 18,
            fontWeight: FontWeight.bold,
          )),
          const ListTile(
            leading: CircleAvatar(backgroundColor: Colors.green),
            title: Text('Order Placed'),
            subtitle: Text('2026-01-20 10:30'),
          ),
          const ListTile(
            leading: CircleAvatar(backgroundColor: Colors.green),
            title: Text('Shipped'),
            subtitle: Text('2026-01-22 09:00'),
          ),
          const Divider(),
          const Text('Items', style: TextStyle(
            fontSize: 18,
            fontWeight: FontWeight.bold,
          )),
          const ListTile(
            title: Text('Product One'),
            subtitle: Text('Qty: 2 × \$86'),
          ),
          ElevatedButton(
            onPressed: () {},
            child: const Text('Update Status'),
          ),
        ],
      ),
    );
  }
}
