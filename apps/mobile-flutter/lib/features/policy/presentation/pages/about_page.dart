import 'package:flutter/material.dart';
import '../../../../core/widgets/app_scaffold.dart';
import '../../../../core/widgets/placeholder_image.dart';

class AboutPage extends StatelessWidget {
  const AboutPage({super.key});

  @override
  Widget build(BuildContext context) {
    return AppScaffold(
      title: 'About Us',
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(24),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const PlaceholderImage(height: 200, text: 'Our Team'),
            const SizedBox(height: 24),
            const Text('Who We Are', style: TextStyle(
              fontSize: 20,
              fontWeight: FontWeight.bold,
            )),
            const SizedBox(height: 8),
            const Text('TopDeal is a multi-vendor e-commerce platform connecting buyers with trusted sellers.'),
            const SizedBox(height: 24),
            const Text('Our Mission', style: TextStyle(
              fontSize: 18,
              fontWeight: FontWeight.bold,
            )),
            const SizedBox(height: 8),
            const Text('To create a seamless shopping experience for customers and vendors.'),
          ],
        ),
      ),
    );
  }
}
