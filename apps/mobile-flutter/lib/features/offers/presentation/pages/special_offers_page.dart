import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../../../core/widgets/app_scaffold.dart';
import '../../../../core/widgets/placeholder_image.dart';

class SpecialOffersPage extends StatelessWidget {
  const SpecialOffersPage({super.key});

  @override
  Widget build(BuildContext context) {
    final offers = [
      ('Flash Sale - 50% Off', '1'),
      ('Buy 2 Get 1 Free', '2'),
      ('Weekend Special', '3'),
    ];
    return AppScaffold(
      title: 'Special Offers',
      body: ListView.builder(
        padding: const EdgeInsets.all(16),
        itemCount: offers.length,
        itemBuilder: (_, i) {
          final (title, id) = offers[i];
          return Card(
            margin: const EdgeInsets.only(bottom: 16),
            child: InkWell(
              onTap: () => context.go('/campaigns/$id'),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  PlaceholderImage(height: 120, text: title),
                  Padding(
                    padding: const EdgeInsets.all(16),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(title, style: const TextStyle(
                          fontWeight: FontWeight.bold,
                          fontSize: 16,
                        )),
                        const SizedBox(height: 8),
                        SizedBox(
                          width: double.infinity,
                          child: ElevatedButton(
                            onPressed: () => context.go('/campaigns/$id'),
                            child: const Text('Shop Now'),
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
