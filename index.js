// function selectionSort(lst) {
//   console.log('original list is', lst.toString());
//   var len = lst.length;
//   for (var i = 0; i < len; i++) {
//     console.log('position started is ', i)
//     var index, min;
//     var pos = lst[i];
//     // get the smallest number in the list 
//     for (var j = i; j < len; j++) {
//       if (lst[j] < pos) {
//         min = lst[j];
//         index = j;
//       }
//     }
//     console.log('position of the smaller one is ', index);
//     // swap if we have a smaller one between i and len-1
//     // you need the condition to make sure the 'new' smallest is indeed smaller
//     if (lst[index] < pos) {
//       lst[index] = pos;
//       lst[i] = min;
//     }
//     console.log('new list is ', lst);
//   }
//   console.log('sorted list ', lst);
// }

// selectionSort([1,3,5,8,7,2]);

function linearSearch(lst, val){
  console.log('the list is ', lst);
  console.log('value searching is ', val);
  for (var i = 0; i< lst.length; i++){
    if (lst[i] == val){
      console.log('position of value is ' + i); 
    } 
  } 
}

linearSearch([1,2,4,6,7,8],7);