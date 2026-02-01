import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../../../core/utils/colors.dart';
import '../../../../core/widgets/app_scaffold.dart';

class CheckoutPage extends StatelessWidget {
  const CheckoutPage({super.key});

  @override
  Widget build(BuildContext context) {
    return AppScaffold(
      title: 'Checkout',
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text('Shipping Address', style: TextStyle(
              fontSize: 18,
              fontWeight: FontWeight.bold,
            )),
            const SizedBox(height: 8),
            TextField(decoration: const InputDecoration(labelText: 'Full Name')),
            TextField(decoration: const InputDecoration(labelText: 'Address')),
            TextField(decoration: const InputDecoration(labelText: 'City')),
            const SizedBox(height: 24),
            const Text('Payment', style: TextStyle(
              fontSize: 18,
              fontWeight: FontWeight.bold,
            )),
            const SizedBox(height: 8),
            TextField(decoration: const InputDecoration(labelText: 'Card Number')),
            const SizedBox(height: 24),
            const Text('Total: \$294', style: TextStyle(
              fontSize: 20,
              fontWeight: FontWeight.bold,
            )),
            const SizedBox(height: 24),
            SizedBox(
              width: double.infinity,
              child: ElevatedButton(
                onPressed: () {},
                style: ElevatedButton.styleFrom(
                  backgroundColor: AppColors.primary,
                  foregroundColor: Colors.white,
                ),
                child: const Text('Place Order'),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
