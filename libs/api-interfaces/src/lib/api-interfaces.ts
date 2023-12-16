export interface BaseEntry {
  id: string | null;
}

export interface Widget extends BaseEntry {
  title: string;
  description: string;
}
