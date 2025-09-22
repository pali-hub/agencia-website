import type { MenuSection, MenuItem } from "./menuData";

export function flattenFirstSection(sections: MenuSection[]): MenuItem[] {
  if (!sections.length) return [];
  return sections[0].items.filter(
    (item): item is MenuItem => !("items" in item)
  );
}