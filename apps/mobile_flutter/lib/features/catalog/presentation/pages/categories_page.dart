import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../../../core/widgets/app_scaffold.dart';
import '../../../../core/widgets/placeholder_image.dart';

class CategoriesPage extends StatelessWidget {
  const CategoriesPage({super.key});

  @override
  Widget build(BuildContext context) {
    final categories = [
      ('Electronics', 'electronics'),
      ('Fashion', 'fashion'),
      ('Home & Garden', 'home-garden'),
      ('Sports', 'sports'),
      ('Books', 'books'),
      ('Beauty', 'beauty'),
    ];
    return AppScaffold(
      title: 'Categories',
      body: GridView.builder(
        padding: const EdgeInsets.all(16),
        gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 2,
          childAspectRatio: 1.2,
          crossAxisSpacing: 16,
          mainAxisSpacing: 16,
        ),
        itemCount: categories.length,
        itemBuilder: (_, i) {
          final (name, slug) = categories[i];
          return GestureDetector(
            onTap: () => context.go('/categories/$slug'),
            child: Card(
              child: Column(
                children: [
                  Expanded(
                    child: PlaceholderImage(
                      text: name,
                      height: 120,
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8),
                    child: Text(name, style: const TextStyle(
                      fontWeight: FontWeight.w600,
                      fontSize: 14,
                    )),
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
