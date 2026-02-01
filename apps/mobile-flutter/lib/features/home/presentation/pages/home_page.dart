import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../../../core/utils/colors.dart';
import '../../../../core/widgets/placeholder_image.dart';
import '../../../../core/widgets/app_scaffold.dart';
import '../widgets/section_list.dart';

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
            _buildCategoryStrip(context),
            _buildPromoRow(context),
            ..._buildSectionsWithBanners(context),
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
          const PlaceholderImage(height: 220, text: '75% OFF - Flash Sale'),
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
          Positioned(
            bottom: 16,
            right: 16,
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
              decoration: BoxDecoration(
                color: Colors.black54,
                borderRadius: BorderRadius.circular(8),
              ),
              child: const Text('532D : 9M : 55S',
                  style: TextStyle(color: Colors.white, fontFamily: 'monospace')),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildCategoryStrip(BuildContext context) {
    final categories = ['Electronics', 'Fashion', 'Home', 'Sports', 'Books'];
    return SizedBox(
      height: 100,
      child: ListView.builder(
        scrollDirection: Axis.horizontal,
        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 16),
        itemCount: categories.length,
        itemBuilder: (_, i) {
          final colors = [
            Colors.blue,
            Colors.pink,
            Colors.green,
            Colors.orange,
            Colors.purple,
          ];
          return Padding(
            padding: const EdgeInsets.symmetric(horizontal: 8),
            child: GestureDetector(
              onTap: () =>
                  context.go('/categories/${categories[i].toLowerCase()}'),
              child: Column(
                children: [
                  Container(
                    width: 64,
                    height: 64,
                    decoration: BoxDecoration(
                      color: colors[i].withValues(alpha: 0.3),
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: Center(
                        child: Text(categories[i].substring(0, 1),
                            style: TextStyle(
                                color: colors[i],
                                fontWeight: FontWeight.bold,
                                fontSize: 24))),
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

  Widget _buildPromoRow(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16),
      child: Row(
        children: [
          Expanded(
            child: GestureDetector(
              onTap: () => context.go('/special-offers'),
              child: Container(
                height: 100,
                decoration: BoxDecoration(
                  color: Colors.pink.shade100,
                  borderRadius: BorderRadius.circular(12),
                ),
                child: const Center(
                    child: Text('40% OFF',
                        style: TextStyle(
                            fontWeight: FontWeight.bold, fontSize: 16))),
              ),
            ),
          ),
          const SizedBox(width: 16),
          Expanded(
            child: GestureDetector(
              onTap: () => context.go('/campaigns'),
              child: Container(
                height: 100,
                decoration: BoxDecoration(
                  color: Colors.blue.shade100,
                  borderRadius: BorderRadius.circular(12),
                ),
                child: const Center(
                    child: Text('70% OFF',
                        style: TextStyle(
                            fontWeight: FontWeight.bold, fontSize: 16))),
              ),
            ),
          ),
        ],
      ),
    );
  }

  List<Widget> _buildSectionsWithBanners(BuildContext context) {
    final sections = sectionTitles;
    final widgets = <Widget>[];
    for (var i = 0; i < sections.length; i++) {
      widgets.add(buildSectionTitle(sections[i]));
      widgets.add(buildProductGrid(context, sections[i], 4));
      if ((i + 1) % 5 == 0 && i < sections.length - 1) {
        widgets.add(buildPromoBanner('Limited Time Offer - Shop Now!'));
      }
    }
    return widgets;
  }
}
