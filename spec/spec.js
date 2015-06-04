var grade = require('./../grader.js');

describe('#letterGrader', function() {
  it('Determines the letter grade for each student', function() {
    expect(grade.letterGrader([98])).toEqual('A');
  });
});

describe('#averageScore()', function(){
  it('Determines the average grade', function(){
    expect(grade.averageScore([90, 95, 87, 60])).toEqual(83);
  });
});

describe('#medianScore()', function(){
  it('Returns the median score', function(){
    expect(grade.medianScore([52,80,80,86,94])).toEqual(80);
  });
});

describe('#modeScore()', function(){
  it('Returns the mode of the scores', function(){
    expect(grade.modeScore([82, 92, 75, 91, 92, 89, 95, 100, 86])).toEqual(92);
  });
});
