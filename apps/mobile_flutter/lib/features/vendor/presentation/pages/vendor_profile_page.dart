import 'package:flutter/material.dart';
import '../../../../core/widgets/app_header.dart';
import '../../../../core/widgets/placeholder_image.dart';

class VendorProfilePage extends StatelessWidget {
  const VendorProfilePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppHeader(title: 'Profile'),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(24),
        child: Column(
          children: [
            const PlaceholderImage(width: 100, height: 100, text: 'Logo'),
            const SizedBox(height: 24),
            TextField(decoration: const InputDecoration(labelText: 'Business Name')),
            TextField(decoration: const InputDecoration(labelText: 'Contact Email')),
            TextField(decoration: const InputDecoration(labelText: 'Phone')),
            const SizedBox(height: 24),
            ElevatedButton(
              onPressed: () {},
              child: const Text('Update Profile'),
            ),
          ],
        ),
      ),
    );
  }
}
