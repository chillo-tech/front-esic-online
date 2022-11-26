/**
 * Generate a simple uuid
 * @returns
 */
export function uuid(): string {
  var d = new Date().getTime();
  var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
}

/**
 * Generate a slug from a string.
 */
export function slugify(str: string): string {
  str = str.replace(/^\s+|\s+$/g, ""); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to = "aaaaeeeeiiiioooouuuunc------";
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes

  return str;
}

export class Point {
  x: number;
  y: number;
  public constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export function middle(A: Point, B: Point): Point {
  return {
    x: (A.x + B.x) / 2,
    y: (A.y + B.y) / 2,
  };
}

export function line(points: Point[], close: boolean = false): string {
  let O = points[0];
  let line = `M ${O.x} ${O.y}`;
  points
    .filter((P: Point, i: number) => i != 0)
    .forEach((P: Point) => (line = line + ` L ${P.x} ${P.y}`));

  if (close) {
    line = line + "Z";
  }

  return line;
}

export function curve(A: Point, B: Point, d: number, Q: Point | null = null) {
  let M = Q;
  if (M == null) {
    M = middle(A, B);
    M.y = M.y - d;
  }
  return `M ${A.x} ${A.y} Q ${M.x} ${M.y} ${B.x} ${B.y}`;
}

export function doublecurve(A: Point, B: Point, d: number) {
  let M = middle(A, B);
  return curve(A, M, d / 2) + ` T ${B.x} ${B.y}`;
}

export function wave(xa: number, ya: number, xc: number, p: number, a: number) {
  return (
    "M" +
    xa +
    " " +
    ya +
    " Q" +
    (xc - xa) / 2 +
    " " +
    p +
    "," +
    xc +
    " " +
    ya +
    " T" +
    2 * xc +
    " " +
    ya +
    " L" +
    2 * xc +
    " " +
    ya +
    a +
    " L" +
    xa +
    " " +
    ya +
    a +
    " z"
  );
}
