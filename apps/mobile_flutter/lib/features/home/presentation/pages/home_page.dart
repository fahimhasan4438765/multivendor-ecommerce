import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../../../core/utils/colors.dart';
import '../../../../core/widgets/placeholder_image.dart';
import '../../../../core/widgets/app_scaffold.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return AppScaffold(
      title: 'TopDeal',
      showFooter: true,
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            _buildHero(context),
            _buildSectionTitle('Shop by Category'),
            _buildCategoryGrid(context),
            _buildSectionTitle('Hot Deals'),
            _buildProductGrid(context, 3),
            _buildSectionTitle('Top Trending'),
            _buildProductGrid(context, 4),
          ],
        ),
      ),
    );
  }

  Widget _buildHero(BuildContext context) {
    return GestureDetector(
      onTap: () {},
      child: Stack(
        children: [
          const PlaceholderImage(
            height: 200,
            text: '75% OFF - Flash Sale',
          ),
          Positioned(
            bottom: 16,
            left: 16,
            child: ElevatedButton(
              onPressed: () {},
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.white,
                foregroundColor: AppColors.primary,
              ),
              child: const Text('Shop Now'),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildSectionTitle(String title) {
    return Padding(
      padding: const EdgeInsets.all(16),
      child: Text(title, style: const TextStyle(
        fontSize: 18,
        fontWeight: FontWeight.bold,
      )),
    );
  }

  Widget _buildCategoryGrid(BuildContext context) {
    final categories = ['Electronics', 'Fashion', 'Home', 'Sports'];
    return SizedBox(
      height: 120,
      child: ListView.builder(
        scrollDirection: Axis.horizontal,
        padding: const EdgeInsets.symmetric(horizontal: 8),
        itemCount: categories.length,
        itemBuilder: (_, i) {
          return Padding(
            padding: const EdgeInsets.all(8),
            child: GestureDetector(
              onTap: () => context.go('/categories/${categories[i].toLowerCase()}'),
              child: Column(
                children: [
                  Container(
                    width: 80,
                    height: 80,
                    decoration: BoxDecoration(
                      color: [Colors.blue, Colors.pink, Colors.green, Colors.orange][i]
                          .withOpacity(0.3),
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: Center(child: Text(categories[i].substring(0, 1))),
                  ),
                  const SizedBox(height: 4),
                  Text(categories[i], style: const TextStyle(fontSize: 12)),
                ],
              ),
            ),
          );
        },
      ),
    );
  }

  Widget _buildProductGrid(BuildContext context, int count) {
    return SizedBox(
      height: 220,
      child: ListView.builder(
        scrollDirection: Axis.horizontal,
        padding: const EdgeInsets.symmetric(horizontal: 8),
        itemCount: count,
        itemBuilder: (_, i) {
          return Padding(
            padding: const EdgeInsets.all(8),
            child: SizedBox(
              width: 160,
              child: GestureDetector(
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
                            Text('\$99', style: TextStyle(
                              color: AppColors.primary,
                              fontWeight: FontWeight.bold,
                            )),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          );
        },
      ),
    );
  }
}
