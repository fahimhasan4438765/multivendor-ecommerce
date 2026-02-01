/// App configuration and environment
class AppConfig {
  static const String appName = 'TopDeal';
  static const String apiBaseUrl = String.fromEnvironment(
    'API_URL',
    defaultValue: 'http://localhost:3000',
  );
}
