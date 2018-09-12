class Sorter {
  constructor() {
    this.arr = [];
    this.compareFunction = (a, b) => {
      if (a > b) return 1;
      if (a < b) return -1;
    }
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    indices.sort((a, b) => (a - b));
    indices.map(x => this.arr[x]).sort(this.compareFunction).forEach((x, i) => this.arr[indices[i]] = x);
  }

  setComparator(compareFunction) {
    // your implementation
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;