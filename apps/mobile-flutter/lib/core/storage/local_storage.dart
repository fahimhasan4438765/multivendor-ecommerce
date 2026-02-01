// Placeholder for Hive/SQLite - implement when offline support is needed
class LocalStorage {
  Future<void> save(String key, String value) async {}
  Future<String?> get(String key) async => null;
  Future<void> delete(String key) async {}
}
