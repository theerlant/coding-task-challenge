const { TreeNode, serialize, deserialize } = require("../4");

describe("Binary Tree Serialization", () => {
  it("should serialize and deserialize an empty tree", () => {
    expect(serialize(null)).toBe("");
    expect(deserialize("")).toBe(null);
  });

  it("should serialize and deserialize a simple tree", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.right.left = new TreeNode(4);
    root.right.right = new TreeNode(5);

    const serialized = serialize(root);
    expect(serialized).toBe("1,2,null,null,3,4,null,null,5");

    const deserialized = deserialize(serialized);
    expect(deserialized.val).toBe(1);
    expect(deserialized.left.val).toBe(2);
    expect(deserialized.right.val).toBe(3);
    expect(deserialized.right.left.val).toBe(4);
    expect(deserialized.right.right.val).toBe(5);
  });

  it("should serialize and deserialize a single node tree", () => {
    const root = new TreeNode(10);
    expect(serialize(root)).toBe("10");

    const deserialized = deserialize("10");
    expect(deserialized.val).toBe(10);
    expect(deserialized.left).toBeNull();
    expect(deserialized.right).toBeNull();
  });

  it("should serialize and deserialize the example tree exactly as shown in google form", () => {
    //       1
    //      / \
    //     2   3
    //        / \
    //       4   5
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.right.left = new TreeNode(4);
    root.right.right = new TreeNode(5);

    const serialized = serialize(root);

    // Match the exact modified output
    expect(serialized).toBe("1,2,null,null,3,4,null,null,5");

    // 4. Act: Deserialize the string back into a tree object
    const deserialized = deserialize(serialized);

    // 5. Assert: Verify the reconstructed tree shape is completely identical
    expect(deserialized).not.toBeNull();
    expect(deserialized.val).toBe(1);

    // Check Left Branch (Node 2 and its empty children)
    expect(deserialized.left.val).toBe(2);
    expect(deserialized.left.left).toBeNull();
    expect(deserialized.left.right).toBeNull();

    // Check Right Branch (Node 3, 4, 5)
    expect(deserialized.right.val).toBe(3);
    expect(deserialized.right.left.val).toBe(4);
    expect(deserialized.right.right.val).toBe(5);

    // Ensure leaf nodes 4 and 5 have null children
    expect(deserialized.right.left.left).toBeNull();
    expect(deserialized.right.left.right).toBeNull();
    expect(deserialized.right.right.left).toBeNull();
    expect(deserialized.right.right.right).toBeNull();
  });
});
