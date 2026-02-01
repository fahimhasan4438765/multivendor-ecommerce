import 'package:flutter/material.dart';
import '../../../../core/widgets/app_header.dart';

class VendorSettingsPage extends StatelessWidget {
  const VendorSettingsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppHeader(title: 'Settings'),
      body: Padding(
        padding: const EdgeInsets.all(24),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text('Store Settings', style: TextStyle(
              fontSize: 18,
              fontWeight: FontWeight.bold,
            )),
            const SizedBox(height: 16),
            TextField(decoration: const InputDecoration(labelText: 'Store Name')),
            TextField(decoration: const InputDecoration(labelText: 'Support Email')),
            const SizedBox(height: 24),
            ElevatedButton(
              onPressed: () {},
              child: const Text('Save Changes'),
            ),
          ],
        ),
      ),
    );
  }
}
