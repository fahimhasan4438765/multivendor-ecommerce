import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../../../core/utils/colors.dart';
import '../../../../core/widgets/app_scaffold.dart';
import '../../../../core/widgets/placeholder_image.dart';

class CampaignDetailPage extends StatelessWidget {
  final String id;

  const CampaignDetailPage({super.key, required this.id});

  @override
  Widget build(BuildContext context) {
    return AppScaffold(
      title: 'Campaign',
      body: GridView.builder(
        padding: const EdgeInsets.all(16),
        gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 2,
          childAspectRatio: 0.75,
          crossAxisSpacing: 16,
          mainAxisSpacing: 16,
        ),
        itemCount: 6,
        itemBuilder: (_, i) {
          return Card(
            child: InkWell(
              onTap: () => context.go('/products/${i + 1}'),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Expanded(
                    child: PlaceholderImage(text: 'Product', height: 100),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('Campaign Product ${i + 1}', style: const TextStyle(
                          fontWeight: FontWeight.w600,
                          fontSize: 12,
                        )),
                        Text('\$${60 + i * 10}', style: const TextStyle(
                          color: AppColors.primary,
                          fontWeight: FontWeight.bold,
                        )),
                        SizedBox(
                          width: double.infinity,
                          child: ElevatedButton(
                            onPressed: () {},
                            style: ElevatedButton.styleFrom(
                              backgroundColor: AppColors.primary,
                              foregroundColor: Colors.white,
                            ),
                            child: const Text('Add to Cart'),
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          );
        },
      ),
    );
  }
}
