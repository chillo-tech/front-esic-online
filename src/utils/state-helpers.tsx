type Predicate = (element: any, item: any) => boolean;

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
 * Change the an object state is set using useState Hook. Enable sort syntax and better code readability.
 * @param setter
 * @param obj
 */
function setObject<T>(setter: (fn: (values: T) => T) => void, obj: T) {
  setter((values: T) => ({
    ...values,
    ...obj,
  }));
}

export const object = {
  set: setObject,
};

export const list = {
  add(setter: any, item: any) {
    setter((items: any[]) => [
      ...items,
      item.id === undefined ? { id: uuid(), ...item } : item,
    ]);
  },
  update(setter: (values: any) => void, predicate: Predicate, item: any) {
    // create the new test function.
    const test =
      predicate !== undefined
        ? predicate
        : (element: any, item: any): boolean => element.id == item.id;
    setter((elements: any) =>
      elements.map((element: any) => {
        if (test(element, item)) {
          // find the element to update.
          return item;
        } else element; // return and element let untouch
      })
    );
  },
  remove(
    setter: (values: any) => void,
    item: any,
    predicate: (element: any, item: any) => boolean
  ) {
    let test: any = null;
    if (typeof item === "number" || typeof item === "string") {
      test =
        predicate !== undefined
          ? predicate
          : (element: number | string, item: number | string) =>
              element == item;
    } else {
      test =
        predicate != undefined
          ? predicate
          : (element: any, item: any) => element.id == item.id;
    }
    setter((elements: any) =>
      elements.filter((element: any) => predicate(element, item))
    );
  },
  find(query: any, items: any[]) {
    if (typeof query == "object") {
      // then we have a predicate.
      return items.filter((item) => query(item));
    } else {
      return items.filter((item) => item.id == query);
    }
  },
};
