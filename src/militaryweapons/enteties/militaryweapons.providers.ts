
import { Weapons } from "./militaryweapons.entety";

export const weaponsProviders = [
  {
    provide: 'WEAPONS_REPOSITORY',
    useValue: Weapons
  },
];
