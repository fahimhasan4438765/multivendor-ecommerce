import 'package:flutter/material.dart';
import 'package:mobile_flutter/core/router/app_router.dart';
import 'package:mobile_flutter/core/utils/colors.dart';

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: 'TopDeal',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: AppColors.primary),
        useMaterial3: true,
      ),
      routerConfig: createAppRouter(),
    );
  }
}
