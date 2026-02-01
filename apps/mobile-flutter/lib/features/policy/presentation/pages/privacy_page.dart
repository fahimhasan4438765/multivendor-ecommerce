import 'package:flutter/material.dart';
import '../../../../core/widgets/app_scaffold.dart';

class PrivacyPage extends StatelessWidget {
  const PrivacyPage({super.key});

  @override
  Widget build(BuildContext context) {
    return AppScaffold(
      title: 'Privacy Policy',
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(24),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            _buildSection('1. Information We Collect', 'We collect information you provide when registering and placing orders.'),
            _buildSection('2. How We Use Your Data', 'We use your data to process orders and improve our services.'),
            _buildSection('3. Data Security', 'We implement industry-standard security measures.'),
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
