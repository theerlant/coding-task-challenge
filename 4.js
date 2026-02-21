/// NOTE:
/// Menggunakan algoritma Pre-Order Traversal
/// Untuk sistem serialisasi dan deserialisasi

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Mengubah pohon binari menjadi string.
 * @param {TreeNode} root - Akar pohon
 * @returns String representasi pohon
 */
var serialize = function (root) {
  if (!root) return "";

  let stack = [root];
  let res = [];

  // Pop from the end of the stack.
  for (let i = 0; stack.length > 0; i++) {
    let node = stack.pop();

    if (node !== null) {
      res.push(node.val);
      // push RIGHT first, so LEFT gets popped out first
      stack.push(node.right);
      stack.push(node.left);
    } else {
      res.push("null");
    }
  }

  // Clean up trailing "null"s from the end of the array
  for (let i = res.length - 1; i >= 0; i--) {
    if (res[i] === "null") {
      res.pop();
    } else {
      break;
    }
  }

  return res.join(",");
};

/**
 * Mengubah string kembali ke pohon binari.
 * @param {string} data - String hasil serialisasi
 * @returns - Objek akar pohon
 */
var deserialize = function (data) {
  if (!data) return null;

  // Split data into an array.
  // Works recursively by allowing data to be array.
  let values = Array.isArray(data) ? data : data.split(",");

  // Grab the first item and remove it from the array.
  let val = values.shift();

  // If we hit a null marker, or run out of numbers.
  if (val === "null" || val === undefined) {
    return null;
  }

  let node = new TreeNode(parseInt(val));

  // Recursive calls next root
  node.left = deserialize(values);
  node.right = deserialize(values);

  return node;
};

module.exports = {
  TreeNode,
  serialize,
  deserialize,
};
