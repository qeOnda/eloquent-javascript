/*
Write a function that computes the dominant writing direction in a string of text. 
Remember that each script object has a direction property that can be "ltr" (left to right), 
"rtl" (right to left), or "ttb" (top to bottom).
*/

// Takes code and finds language object whose range includes given code
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

// Takes items and applies testToGroup test to each item
// then creates an array of objects named 'counts' with
// shape {*nameOfItem*: *numberOfOccurrences*}. Return counts 
function countBy(items, testToGroup) {
  let counts = [];
  for (let item of items) {
    let name = testToGroup(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

// Apply countBy with test (testToGroup) of characterScript(code)
// where code is the JS method codePointAt. Lastly, filter out from
// arr of obj with countBy shape counts of "none" which capture spaces,
// and special symbols such as [!, ?, ., /,] etc... Reduce returns script
// direction name with the most counts.
function dominantDirection(text) {
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");

  if (counted.length == 0) return "ltr";

  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}