import type { Category } from "@multivendor/shared-types";

export interface CreateCategoryDto {
  name: string;
  parentId?: string;
}

export type { Category };
