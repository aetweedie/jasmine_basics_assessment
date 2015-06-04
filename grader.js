var math = require('./node_modules/mathjs')
module.exports = {
  letterGrader: function(arr){
    for (var i = 0; i < arr.length; i++){
      if(arr[i] >= 90){
        return 'A';
      } else if (arr[i] >= 80 || arr[i] <= 89) {
        return 'B';
      } else if(arr[i] >= 70 || arr[i] <= 79) {
        return 'C';
      } else if (arr[i] >= 60 || arr[i] <= 69) {
        return 'D';
      } else {
        return 'F';
      }
    }
  },
  averageScore: math.mean,
  medianScore: math.median,
  modeScore: function(arr) {
    var mode = {};
    var max = 0, count = 0;
    arr.forEach(function(a) {
        if (mode[a]) {
          mode[a]++;
          } else {
            mode[a] = 1;
          }
        if (count < mode[a]) {
            max = a;
            count = mode[a];
        }
    });
    return max;
  },
};
