import 'package:flutter/material.dart';
import '../utils/colors.dart';

/// Black footer with copyright
class AppFooter extends StatelessWidget {
  const AppFooter({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.symmetric(vertical: 16),
      color: AppColors.footerBg,
      child: const Text(
        'Copyright © 2026 Fahim Hasan. All rights reserved.',
        textAlign: TextAlign.center,
        style: TextStyle(color: Colors.grey, fontSize: 12),
      ),
    );
  }
}
