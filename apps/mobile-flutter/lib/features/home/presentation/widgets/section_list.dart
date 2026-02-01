import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../../../core/utils/colors.dart';
import '../../../../core/widgets/placeholder_image.dart';

const _sectionTitles = [
  'Shop by Category',
  'Top Trending',
  'Hot Deals',
  'Limited Offers',
  'New Arrivals',
  'Best Sellers',
  'Flash Sale',
  'Clearance',
  'Vendor Picks',
  'Featured Products',
  'Seasonal Deals',
  'Under \$50',
  'Top Rated',
  'Bundle Deals',
  "Today's Deals",
];

Widget buildSectionTitle(String title) {
  return Padding(
    padding: const EdgeInsets.all(16),
    child: Text(
      title,
      style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
    ),
  );
}

Widget buildProductGrid(BuildContext context, String section, int count) {
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
                          Text(
                            '$section ${i + 1}',
                            style: const TextStyle(
                              fontWeight: FontWeight.w600,
                              fontSize: 14,
                            ),
                          ),
                          Text(
                            '\$${60 + i * 20}',
                            style: const TextStyle(
                              color: AppColors.primary,
                              fontWeight: FontWeight.bold,
                            ),
                          ),
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

Widget buildPromoBanner(String text) {
  return Container(
    margin: const EdgeInsets.symmetric(vertical: 16, horizontal: 16),
    height: 120,
    decoration: BoxDecoration(
      gradient: LinearGradient(
        colors: [
          AppColors.primary.withOpacity(0.8),
          AppColors.primary,
        ],
        begin: Alignment.topLeft,
        end: Alignment.bottomRight,
      ),
      borderRadius: BorderRadius.circular(12),
    ),
    child: Center(
      child: Text(
        text,
        style: const TextStyle(
          color: Colors.white,
          fontSize: 20,
          fontWeight: FontWeight.bold,
        ),
      ),
    ),
  );
}

List<String> get sectionTitles => _sectionTitles;
