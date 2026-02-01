import 'package:flutter/material.dart';
import '../../../../core/widgets/app_header.dart';

class VendorOffersPage extends StatelessWidget {
  const VendorOffersPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppHeader(
        title: 'Offers',
        actions: <Widget>[
          IconButton(
            icon: const Icon(Icons.add),
            onPressed: () {},
          ),
        ],
      ),
      body: ListView.builder(
        padding: const EdgeInsets.all(16),
        itemCount: 2,
        itemBuilder: (_, i) {
          return Card(
            margin: const EdgeInsets.only(bottom: 16),
            child: ListTile(
              title: Text('VENDOR${20 + i}'),
              subtitle: Text('20% off • 5 products'),
              trailing: Chip(
                label: const Text('Active'),
                backgroundColor: Colors.green.shade100,
              ),
            ),
          );
        },
      ),
    );
  }
}
