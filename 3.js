/**
 * Cache class hat store key-value pairs with limited capacity
 */
class LRUCache {
  /**
   * @param {number} capacity - maximum capacity of the cache
   */
  constructor(capacity) {
    this.capacity = capacity;
    this.keys = [];
    this.values = [];
    this.idleTime = [];
  }

  /**
   *
   * @param {number} key - key to retreive value
   * @returns - value if exists, -1 if not
   */
  get(key) {
    let output = -1;
    // find the index of requested key
    let index = null;
    for (let i = 0; i < this.keys.length; i++) {
      if (this.keys[i] === key) {
        index = i;
        break;
      }
    }

    // reset age when found
    if (index !== null) {
      for (let i = 0; i < this.idleTime.length; i++) {
        if (index === i) this.idleTime[i] = 0;
        else this.idleTime[i]++;
      }

      output = this.values[index];
    }

    return output;
  }

  /**
   *
   * @param {number} key - key to update / store
   * @param {number} value - value to store
   */
  put(key, value) {
    // we check for existence
    let existIndex = null;
    for (let i = 0; i < this.keys.length; i++) {
      if (this.keys[i] === key) {
        existIndex = i;
        break;
      }
    }

    // if exist then replace and reset idle time
    if (existIndex !== null) {
      this.values[existIndex] = value;
      this.idleTime[existIndex] = 0;
      return;
    }

    // if full, we loop and find the least used value
    if (this.keys.length === this.capacity) {
      let age = 0;
      let oldestIndex = 0;

      for (let i = 0; i < this.idleTime.length; i++) {
        if (this.idleTime[i] > age) {
          age = this.idleTime[i];
          oldestIndex = i;
        }
      }

      // we replace the oldest value
      this.keys[oldestIndex] = key;
      this.values[oldestIndex] = value;
      this.idleTime[oldestIndex] = 0;
      return; // return immediately
    }

    // not full simple push
    this.keys.push(key);
    this.values.push(value);
    this.idleTime.push(0);
  }
}

module.exports = LRUCache;
