import 'package:flutter/material.dart';

class ProductTabs extends StatelessWidget {
  const ProductTabs({super.key});

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 3,
      child: Column(
        children: [
          const TabBar(
            tabs: [
              Tab(text: 'Details'),
              Tab(text: 'Reviews'),
              Tab(text: 'Comments'),
            ],
          ),
          SizedBox(
            height: 200,
            child: TabBarView(
              children: [
                _buildDetailsTab(),
                _buildReviewsTab(),
                _buildCommentsTab(),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildDetailsTab() {
    return const SingleChildScrollView(
      padding: EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text('Material: Premium quality'),
          Text('Dimensions: 10 x 8 x 2 inches'),
          Text('Weight: 0.5 kg'),
          Text('Warranty: 1 year'),
        ],
      ),
    );
  }

  Widget _buildReviewsTab() {
    return ListView(
      padding: const EdgeInsets.all(16),
      children: [
        const Text('4.5 out of 5', style: TextStyle(fontWeight: FontWeight.bold)),
        ListTile(
          title: const Text('John D.'),
          subtitle: const Text('Great product!'),
        ),
        ListTile(
          title: const Text('Jane S.'),
          subtitle: const Text('Fast delivery.'),
        ),
      ],
    );
  }

  Widget _buildCommentsTab() {
    return ListView(
      padding: const EdgeInsets.all(16),
      children: [
        const ListTile(
          title: Text('User123'),
          subtitle: Text('Any discount for bulk order?'),
        ),
      ],
    );
  }
}
