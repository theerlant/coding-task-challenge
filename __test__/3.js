const LRUCache = require("../3");

describe("LRUCache", () => {
  it("should create an instance with specified capacity", () => {
    const cache = new LRUCache(2);
    expect(cache.capacity).toBe(2);
  });

  it("should return -1 for non-existent keys", () => {
    const cache = new LRUCache(2);
    expect(cache.get(1)).toBe(-1);
  });

  it("should store and retrieve values", () => {
    const cache = new LRUCache(2);
    cache.put(1, 1);
    cache.put(2, 2);
    expect(cache.get(1)).toBe(1);
    expect(cache.get(2)).toBe(2);
  });

  it("should remove the least recently used item when capacity is reached", () => {
    const cache = new LRUCache(2);
    cache.put(1, 1);
    cache.put(2, 2);
    cache.get(1); // 1 becomes most recently used
    cache.put(3, 3); // 2 should be evicted
    expect(cache.get(2)).toBe(-1);
    expect(cache.get(1)).toBe(1);
    expect(cache.get(3)).toBe(3);
  });

  it("should works with the test described on the google form task", () => {
    const cache = new LRUCache(2);
    cache.put(1, 1);
    cache.put(2, 2);
    expect(cache.get(1)).toBe(1); // 1 age refreshed
    cache.put(3, 3); // 2 should be evicted. both age is 0 now.
    expect(cache.get(2)).toBe(-1); // 2 should return -1 now
    cache.put(4, 4); // -1 should be evicted
    expect(cache.get(1)).toBe(-1);
    expect(cache.get(3)).toBe(3);
    expect(cache.get(4)).toBe(4);
  });
});
