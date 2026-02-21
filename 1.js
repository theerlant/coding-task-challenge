const pairs = {
  "{": "}",
  "[": "]",
  "(": ")",
};

/**
 * Checks if brackets in a string is paired correctly
 * @param {string} s - String with brackets
 * @return {boolean} - true (valid), false (invalid).
 */
const isValid = function (s) {
  const keys = Object.keys(pairs); // array keys
  const vals = Object.values(pairs);

  const queue = []; // store opening bracket queues
  for (let i = 0; i < s.length; i++) {
    let open = "";
    // looping keys and find opening bracket
    for (let keyI = 0; keyI < keys.length; keyI++) {
      if (s[i] === keys[keyI]) {
        open = keys[keyI];
        break;
      }
    }

    if (open !== "") {
      queue.push(open); // opening bracket found, push to queue
      continue; // skip further logic
    }

    // opening bracket is not found, try to find closing bracket
    let close = "";
    for (let valI = 0; valI < vals.length; valI++) {
      if (s[i] === vals[valI]) {
        close = vals[valI];
        break;
      }
    }

    // closing bracket found
    if (close !== "") {
      const lastOpen = queue.pop();
      if (pairs[lastOpen] === close) continue; // close bracket pairs. continue string loop
      // close bracket did not pairs. Immediately invalid return.
      return false;
    }

    // cannot find open or closing bracket means invalid input. Immediately invalid return.
    return false;
  }

  // invalid if queue is not emptied after loop finished
  if (queue.length) return false;

  // loop finished without invalids. return true.
  return true;
};

module.exports = isValid;
