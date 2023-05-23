export type RootObject = {
  id?: number;
  name?: string;
  localized_name: string;
  primary_attr?: string;
  attack_type?: string;
  img?: string;
  base_health?: number;
  base_health_regen?: number;
  base_mana?: number;
  base_armor?: number;
};

export type RootObjectSlice = {
  cards: RootObject[];
};
