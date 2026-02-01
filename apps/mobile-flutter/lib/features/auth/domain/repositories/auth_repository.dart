import '../entities/user.dart';

/// Auth repository interface
abstract class AuthRepository {
  Future<User?> login(String email, String password);
}
