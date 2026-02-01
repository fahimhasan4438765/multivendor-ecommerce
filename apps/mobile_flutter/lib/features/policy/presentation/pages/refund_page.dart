import 'package:flutter/material.dart';
import '../../../../core/widgets/app_scaffold.dart';

class RefundPage extends StatelessWidget {
  const RefundPage({super.key});

  @override
  Widget build(BuildContext context) {
    return AppScaffold(
      title: 'Refund Policy',
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(24),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            _buildSection('1. Eligibility', 'Refunds available within 30 days for unused products.'),
            _buildSection('2. Process', 'Contact support to initiate a refund. Processing takes 5-10 business days.'),
            _buildSection('3. Exclusions', 'Digital products may not be eligible for refunds.'),
          ],
        ),
      ),
    );
  }

  Widget _buildSection(String title, String content) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 24),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(title, style: const TextStyle(
            fontSize: 18,
            fontWeight: FontWeight.bold,
          )),
          const SizedBox(height: 8),
          Text(content),
        ],
      ),
    );
  }
}
