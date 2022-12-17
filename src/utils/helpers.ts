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
 *  Generate directus query fields from object desctiption
 */
export function queryFields(queryObj: any): string {
  const generate = (parent: any, key: string, trace: string = ""): string => {
    let result = "";
    let prefix = trace == "" ? "" : trace + ".";
    Object.keys(parent[key]).forEach((item) => {
      if (typeof parent[key][item] == "string") {
        result = `${result}${prefix}${item},`;
      } else {
        result = `${result}${generate(parent[key], item, `${prefix}${item}`)}`;
      }
    });
    return result;
  };
  const result = generate(queryObj, Object.keys(queryObj)[0]);
  return result.slice(0, result.length - 1);
}
