import 'package:flutter/material.dart';
import '../../../../core/widgets/app_scaffold.dart';

class TermsPage extends StatelessWidget {
  const TermsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return AppScaffold(
      title: 'Terms & Conditions',
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(24),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            _buildSection('1. Introduction', 'Welcome to TopDeal. By using our service, you agree to these terms.'),
            _buildSection('2. Use of Service', 'You must use this service in compliance with applicable laws.'),
            _buildSection('3. Account Responsibility', 'You are responsible for maintaining your account credentials.'),
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
