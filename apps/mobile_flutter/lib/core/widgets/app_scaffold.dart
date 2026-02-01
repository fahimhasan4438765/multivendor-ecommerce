import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../utils/colors.dart';
import 'app_header.dart';
import 'app_footer.dart';

/// Scaffold with header (orange) and optional footer (black)
class AppScaffold extends StatelessWidget {
  final Widget body;
  final String title;
  final bool showFooter;
  final Widget? floatingActionButton;
  final List<Widget>? appBarActions;

  const AppScaffold({
    super.key,
    required this.body,
    this.title = 'TopDeal',
    this.showFooter = true,
    this.floatingActionButton,
    this.appBarActions,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppHeader(title: title, actions: appBarActions),
      drawer: _buildDrawer(context),
      body: Column(
        children: [
          Expanded(child: body),
          if (showFooter) const AppFooter(),
        ],
      ),
      floatingActionButton: floatingActionButton,
    );
  }

  Drawer? _buildDrawer(BuildContext context) {
    return Drawer(
      child: ListView(
        padding: EdgeInsets.zero,
        children: [
          DrawerHeader(
            decoration: BoxDecoration(color: Colors.orange.shade700),
            child: const Text(
              'TopDeal',
              style: TextStyle(color: Colors.white, fontSize: 24),
            ),
          ),
          ListTile(title: const Text('Home'), onTap: () {
            Navigator.pop(context);
            context.go('/');
          }),
          ListTile(title: const Text('Categories'), onTap: () {
            Navigator.pop(context);
            context.go('/categories');
          }),
          ListTile(title: const Text('Cart'), onTap: () {
            Navigator.pop(context);
            context.go('/cart');
          }),
          ListTile(title: const Text('Login'), onTap: () {
            Navigator.pop(context);
            context.go('/login');
          }),
          ListTile(title: const Text('Vendor'), onTap: () {
            Navigator.pop(context);
            context.go('/vendor/login');
          }),
        ],
      ),
    );
  }
}
