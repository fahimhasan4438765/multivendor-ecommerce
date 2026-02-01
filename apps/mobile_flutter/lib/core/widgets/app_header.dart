import 'package:flutter/material.dart';
import '../utils/colors.dart';

/// Orange header matching web design
class AppHeader extends StatelessWidget implements PreferredSizeWidget {
  final String title;
  final List<Widget>? actions;

  const AppHeader({super.key, this.title = 'TopDeal', this.actions});

  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight);

  @override
  Widget build(BuildContext context) {
    return AppBar(
      title: Text(title, style: const TextStyle(color: Colors.white)),
      backgroundColor: AppColors.primary,
      foregroundColor: Colors.white,
      actions: actions ?? [],
    );
  }
}
