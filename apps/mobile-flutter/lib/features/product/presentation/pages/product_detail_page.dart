import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../../../core/utils/colors.dart';
import '../../../../core/widgets/app_scaffold.dart';
import '../../../../core/widgets/placeholder_image.dart';
import '../widgets/image_carousel.dart';
import '../widgets/product_tabs.dart';

class ProductDetailPage extends StatefulWidget {
  final String id;

  const ProductDetailPage({super.key, required this.id});

  @override
  State<ProductDetailPage> createState() => _ProductDetailPageState();
}

class _ProductDetailPageState extends State<ProductDetailPage> {
  String _color = 'Red';
  String _size = 'M';

  @override
  Widget build(BuildContext context) {
    return AppScaffold(
      title: 'Product',
      showFooter: false,
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const ImageCarousel(images: ['1', '2', '3', '4']),
            Padding(
              padding: const EdgeInsets.all(16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('Product ${widget.id}',
                      style: const TextStyle(
                          fontSize: 22, fontWeight: FontWeight.bold)),
                  const SizedBox(height: 8),
                  Row(
                    children: [
                      Text('\$122',
                          style: TextStyle(
                              fontSize: 20,
                              color: AppColors.primary,
                              fontWeight: FontWeight.bold)),
                      const SizedBox(width: 8),
                      Text('\$180',
                          style: TextStyle(
                              fontSize: 14,
                              color: Colors.grey,
                              decoration: TextDecoration.lineThrough)),
                      const SizedBox(width: 8),
                      Container(
                        padding: const EdgeInsets.symmetric(
                            horizontal: 8, vertical: 4),
                        decoration: BoxDecoration(
                            color: Colors.green,
                            borderRadius: BorderRadius.circular(4)),
                        child: const Text('32% OFF',
                            style: TextStyle(
                                color: Colors.white,
                                fontSize: 12,
                                fontWeight: FontWeight.bold)),
                      ),
                    ],
                  ),
                  const SizedBox(height: 16),
                  const Text(
                      'Product description here. Lorem ipsum dolor sit amet.'),
                  const SizedBox(height: 16),
                  const Text('In Stock (15 available)'),
                  const SizedBox(height: 16),
                  Wrap(
                    spacing: 8,
                    children: ['Red', 'Blue', 'Black', 'White']
                        .map((c) => FilterChip(
                            label: Text(c),
                            selected: _color == c,
                            onSelected: (_) => setState(() => _color = c)))
                        .toList(),
                  ),
                  const SizedBox(height: 16),
                  Wrap(
                    spacing: 8,
                    children: ['S', 'M', 'L', 'XL']
                        .map((s) => FilterChip(
                            label: Text(s),
                            selected: _size == s,
                            onSelected: (_) => setState(() => _size = s)))
                        .toList(),
                  ),
                  const SizedBox(height: 24),
                  Row(
                    children: [
                      Expanded(
                        child: ElevatedButton(
                          onPressed: () {},
                          style: ElevatedButton.styleFrom(
                            backgroundColor: AppColors.primary,
                            foregroundColor: Colors.white,
                          ),
                          child: const Text('Add to Cart'),
                        ),
                      ),
                      IconButton(
                          onPressed: () {},
                          icon: const Icon(Icons.favorite_border)),
                      IconButton(
                          onPressed: () {},
                          icon: const Icon(Icons.bookmark_border)),
                    ],
                  ),
                  const SizedBox(height: 24),
                  const ProductTabs(),
                  const SizedBox(height: 24),
                  const Text('Related Products',
                      style: TextStyle(
                          fontSize: 18, fontWeight: FontWeight.bold)),
                  const SizedBox(height: 12),
                  SizedBox(
                    height: 200,
                    child: ListView.builder(
                      scrollDirection: Axis.horizontal,
                      itemCount: 3,
                      itemBuilder: (_, i) {
                        return Padding(
                          padding: const EdgeInsets.only(right: 16),
                          child: GestureDetector(
                            onTap: () =>
                                context.go('/products/${100 + i}'),
                            child: SizedBox(
                              width: 140,
                              child: Card(
                                child: Column(
                                  children: [
                                    const Expanded(
                                        child: PlaceholderImage(
                                            text: 'Related', height: 100)),
                                    Padding(
                                      padding: const EdgeInsets.all(8),
                                      child: Text('Related ${i + 1}'),
                                    ),
                                    Text('\$${79 + i * 10}',
                                        style: const TextStyle(
                                            color: AppColors.primary,
                                            fontWeight: FontWeight.bold)),
                                  ],
                                ),
                              ),
                            ),
                          ),
                        );
                      },
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
