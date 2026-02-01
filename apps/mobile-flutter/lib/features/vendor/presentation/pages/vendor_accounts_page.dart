import 'package:flutter/material.dart';
import '../../../../core/widgets/app_header.dart';

class VendorAccountsPage extends StatelessWidget {
  const VendorAccountsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppHeader(title: 'Accounts'),
      body: ListView(
        padding: const EdgeInsets.all(24),
        children: [
          Card(
            child: Padding(
              padding: const EdgeInsets.all(16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text('Payout Settings', style: TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                  )),
                  const SizedBox(height: 16),
                  const Text('Available Balance: \$1,250.00'),
                  const Text('Pending Payout: \$340.00'),
                  const SizedBox(height: 16),
                  ElevatedButton(
                    onPressed: () {},
                    child: const Text('Request Payout'),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
