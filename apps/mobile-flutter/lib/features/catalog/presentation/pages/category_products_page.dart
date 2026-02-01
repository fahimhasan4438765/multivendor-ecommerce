import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../../../core/utils/colors.dart';
import '../../../../core/widgets/app_scaffold.dart';
import '../../../../core/widgets/placeholder_image.dart';

class CategoryProductsPage extends StatelessWidget {
  final String slug;

  const CategoryProductsPage({super.key, required this.slug});

  @override
  Widget build(BuildContext context) {
    final name = slug.replaceAll('-', ' ').split(' ').map(
      (w) => w.isEmpty ? '' : '${w[0].toUpperCase()}${w.substring(1)}'
    ).join(' ');
    return AppScaffold(
      title: name,
      body: GridView.builder(
        padding: const EdgeInsets.all(16),
        itemCount: 12,
        gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 2,
          childAspectRatio: 0.75,
          crossAxisSpacing: 16,
          mainAxisSpacing: 16,
        ),
        itemBuilder: (_, i) {
          return GestureDetector(
            onTap: () => context.go('/products/${i + 1}'),
            child: Card(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Expanded(
                    child: PlaceholderImage(text: 'Product', height: 120),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('Product ${i + 1}', style: const TextStyle(
                          fontWeight: FontWeight.w600,
                          fontSize: 14,
                        )),
                        Text('\$${99 + i * 10}', style: const TextStyle(
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
