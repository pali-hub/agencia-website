import type { MenuSection, MenuItem } from "./menuData";

export function flattenFirstSection(sections: MenuSection[]): MenuItem[] {
  if (!sections.length) return [];
  return sections[0].items.filter(
    (item): item is MenuItem => !("items" in item)
  );
}

export function flattenAllSections(sections: MenuSection[]): { title: string; items: MenuItem[] }[] {
  return sections.map(section => ({
    title: section.title || "",
    items: section.items.filter((item): item is MenuItem => !("items" in item))
  }));
}