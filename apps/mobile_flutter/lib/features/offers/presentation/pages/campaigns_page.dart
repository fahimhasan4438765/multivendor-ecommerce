import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../../../core/widgets/app_scaffold.dart';
import '../../../../core/widgets/placeholder_image.dart';

class CampaignsPage extends StatelessWidget {
  const CampaignsPage({super.key});

  @override
  Widget build(BuildContext context) {
    final campaigns = [
      ('Summer Sale', '40', '1'),
      ('New Year Promo', '25', '2'),
    ];
    return AppScaffold(
      title: 'Campaigns',
      body: ListView.builder(
        padding: const EdgeInsets.all(16),
        itemCount: campaigns.length,
        itemBuilder: (_, i) {
          final (name, discount, id) = campaigns[i];
          return Card(
            margin: const EdgeInsets.only(bottom: 16),
            child: InkWell(
              onTap: () => context.go('/campaigns/$id'),
              child: Padding(
                padding: const EdgeInsets.all(16),
                child: Row(
                  children: [
                    PlaceholderImage(
                      width: 100,
                      height: 80,
                      text: name,
                    ),
                    const SizedBox(width: 16),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(name, style: const TextStyle(
                            fontWeight: FontWeight.bold,
                            fontSize: 16,
                          )),
                          Text('-$discount% OFF'),
                        ],
                      ),
                    ),
                    const Icon(Icons.chevron_right),
                  ],
                ),
              ),
            ),
          );
        },
      ),
    );
  }
}
