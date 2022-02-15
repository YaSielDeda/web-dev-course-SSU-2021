import { Point } from "./Entities/Abstract/Point";

/* Screen resolution */
export const CANVAS_HEIGHT = 970;
export const CANVAS_WIDTH = 800;

/* Doodler constants */
export const JUMP_HEIGHT = 150;
export const DOODLER_WIDTH = 60;
export const DOODLER_HEIGHT = 80;

export const DEFAULT_SPAWN_POINT = new Point(CANVAS_WIDTH / 2, 50);

/* Platform constants */
export const PLATFORM_WIDTH = 300;
export const PLATFORM_HEIGHT = 40;
export const DISTANCE_BETWEEN_PLATFORMS = 120;

/// This const needs for correct doodler bouncing,
/// IT'S ALWAYS NEED TO BE MORE THAN DOODLER MOVE DOWN CONST!
/// due to this const it's possible to change doodler speed of falling
export const POSSIBLE_DIAPASONE_BY_Y = 3;

/* Monster constants */
export const MONSTER_WIDTH = 90;
export const MONSTER_HEIGHT = 80;
export const MONSTER_MOVEMENT_DIAPASON = 100;

/* Bullet constants */
export const BULLET_WIDTH = 15;
export const BULLET_HEIGHT = 15;
/// Bullet speed - the biggest that const, than slower bullet flies
export const SPEED = 50;