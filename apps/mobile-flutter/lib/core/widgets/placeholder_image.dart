import 'package:flutter/material.dart';
import '../utils/colors.dart';

/// Placeholder for images until real assets are used
class PlaceholderImage extends StatelessWidget {
  final double? width;
  final double? height;
  final String text;

  const PlaceholderImage({
    super.key,
    this.width,
    this.height,
    this.text = 'Image',
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      width: width,
      height: height,
      decoration: BoxDecoration(
        gradient: LinearGradient(
          colors: [
            AppColors.primary.withOpacity(0.3),
            AppColors.primary.withOpacity(0.6),
          ],
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
        ),
      ),
      child: Center(
        child: Text(
          text,
          style: TextStyle(
            color: Colors.orange.shade900,
            fontWeight: FontWeight.w600,
          ),
        ),
      ),
    );
  }
}
