import { NotFoundError } from "../../shared/errors";
import * as repo from "./repository";

export async function listCategories() {
  return repo.findAll();
}

export async function getCategory(id: string) {
  const cat = await repo.findById(id);
  if (!cat) throw new NotFoundError("Category not found");
  return cat;
}
