import 'package:flutter/material.dart';
import '../../../../core/widgets/placeholder_image.dart';

class ImageCarousel extends StatefulWidget {
  final List<String> images;

  const ImageCarousel({super.key, this.images = const ['1', '2', '3', '4']});

  @override
  State<ImageCarousel> createState() => _ImageCarouselState();
}

class _ImageCarouselState extends State<ImageCarousel> {
  int _current = 0;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        PlaceholderImage(
          height: 280,
          text: 'Image ${widget.images[_current]}',
        ),
        const SizedBox(height: 12),
        SizedBox(
          height: 56,
          child: ListView.builder(
            scrollDirection: Axis.horizontal,
            itemCount: widget.images.length,
            itemBuilder: (_, i) {
              final isSelected = i == _current;
              return GestureDetector(
                onTap: () => setState(() => _current = i),
                child: Container(
                  width: 56,
                  height: 56,
                  margin: const EdgeInsets.only(right: 8),
                  decoration: BoxDecoration(
                    border: Border.all(
                      color: isSelected ? Colors.orange : Colors.grey,
                      width: 2,
                    ),
                    borderRadius: BorderRadius.circular(8),
                  ),
                  clipBehavior: Clip.antiAlias,
                  child: PlaceholderImage(
                    width: 56,
                    height: 56,
                    text: widget.images[i],
                  ),
                ),
              );
            },
          ),
        ),
      ],
    );
  }
}
