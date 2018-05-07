
function selectionSort(lst) {
  console.log('original list is', lst.toString());
  var len = lst.length;
  var minIndex, temp;
  for (var i = 0; i < len; i++) {
    minIndex = i;
    // get the smallest number in the list 
    for (var j = i + 1; j < len; j++) {
      if (lst[j] < lst[minIndex]) {
        minIndex = j;
      }
    }
    temp = lst[i];
    lst[i] = lst[minIndex];
    lst[minIndex] = temp;
  }
  console.log('selection sorted list ', lst);
}
/* eslint-disable no-unused-vars*/
// selectionSort([1, 3, 5, 8, 7, 2]);
// selectionSort([4, 3, 1, 7, 2, 9]);
/* esline-enable*/
function linearSearch(lst, val) {
  console.log('linear search list is ', lst);
  console.log('value searching is ', val);
  for (var i = 0; i < lst.length; i++) {
    if (lst[i] == val) {
      console.log('position of value is ' + i);

      return;
    }
  }
  console.log('nothing found');
}

/* eslint-disable no-unused-vars*/
// linearSearch([1, 2, 4, 6, 7, 8], 7);
// linearSearch([4, 3, 1, 7, 2, 9], 0);
/* esline-enable*/

function bubbleSort(lst) {
  console.log('original list is', lst.toString());
  var len = lst.length;
  var minIndex, temp;
  for (var j = 0; j < len; j++) {
    for (var i = 0; i < len; i++) {
      minIndex = i + 1;
      if (lst[minIndex] < lst[i]) {
        temp = lst[i];
        lst[i] = lst[minIndex];
        lst[minIndex] = temp;
      }
    }
  }
  console.log('bubble-sorted list is ', lst);
}
/* eslint-disable no-unused-vars*/
// bubbleSort([1, 3, 5, 8, 7, 2]);
// bubbleSort([4, 3, 1, 7, 2, 9]);
/* esline-enable*/
function insertionSort(lst) {
  var len = lst.length;
  var minIndex, temp;
  for (var i = 0; i < len; i++) {
    minIndex = i + 1;
    if (lst[minIndex] < lst[i]) {
      temp = lst[i];
      lst[i] = lst[minIndex];
      lst[minIndex] = temp;
    }
  }
}
/* eslint-disable no-unused-vars*/
// insertionSort([1, 3, 5, 8, 7, 2]);
// insertionSort([4, 3, 1, 7, 2, 9]);
/* esline-enable*/

function mergeSort(lst) {
  var len = lst.length;
  var halflen = Math.round(len / 2);
  var listA = lst.slice(0, halflen)
  var listB = lst.slice(halflen);
  var minIndexA, minIndexB, tempA, tempB;
  console.log('list A is ', listA);
  console.log('list B is ', listB);

  for (var i = 0; i < listA.length; i += 2) {
    minIndexA = i + 1;
    if (listA[i + 1] < listA[i]) {
      tempA = listA[i];
      listA[i] = listA[minIndexA];
      listA[minIndexA] = tempA;
    }
    console.log('new list A is ', listA);
  }

  for (var j = 0; j < listB.length; j += 2) {
    minIndexB = j + 1;
    if (listB[j + 1] < listB[j]) {
      tempB = listB[j];
      listB[j] = listB[minIndexB];
      listB[minIndexB] = tempB;
    }
    console.log('new list B is ', listB);
  }
  console.log('merge sort is ', lst);
}

mergeSort([1, 6, 5, 4, 8, 7, 2, 9]);