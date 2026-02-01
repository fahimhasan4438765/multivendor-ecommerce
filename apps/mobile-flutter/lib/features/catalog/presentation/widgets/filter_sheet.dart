import 'package:flutter/material.dart';

class FilterSheet extends StatelessWidget {
  final VoidCallback onApply;

  const FilterSheet({super.key, required this.onApply});

  static void show(BuildContext context, {VoidCallback? onApply}) {
    showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      builder: (_) => FilterSheet(onApply: onApply ?? () => Navigator.pop(context)),
    );
  }

  @override
  Widget build(BuildContext context) {
    return DraggableScrollableSheet(
      initialChildSize: 0.7,
      minChildSize: 0.5,
      maxChildSize: 0.9,
      expand: false,
      builder: (_, controller) => Padding(
        padding: const EdgeInsets.all(16),
        child: ListView(
          controller: controller,
          children: [
            const Text('Filters', style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
            const SizedBox(height: 16),
            const Text('Price Range'),
            Row(
              children: [
                Expanded(child: TextField(decoration: const InputDecoration(hintText: 'Min'))),
                const SizedBox(width: 16),
                Expanded(child: TextField(decoration: const InputDecoration(hintText: 'Max'))),
              ],
            ),
            const SizedBox(height: 16),
            const Text('Category'),
            CheckboxListTile(title: const Text('Electronics'), value: false, onChanged: (_) {}),
            CheckboxListTile(title: const Text('Fashion'), value: false, onChanged: (_) {}),
            const SizedBox(height: 16),
            const Text('Brand'),
            CheckboxListTile(title: const Text('Brand A'), value: false, onChanged: (_) {}),
            CheckboxListTile(title: const Text('Brand B'), value: false, onChanged: (_) {}),
            const SizedBox(height: 16),
            const Text('Gender'),
            CheckboxListTile(title: const Text('Men'), value: false, onChanged: (_) {}),
            CheckboxListTile(title: const Text('Women'), value: false, onChanged: (_) {}),
            const SizedBox(height: 24),
            ElevatedButton(onPressed: onApply, child: const Text('Apply Filters')),
          ],
        ),
      ),
    );
  }
}
