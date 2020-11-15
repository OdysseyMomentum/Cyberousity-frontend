
//Import PythonShell module.
// const PythonShell = require('python-shell');

const dummy =
    {
      histogram: [
        {word: "security", count: 13},
          {word: "internet", count: 4},
          {word: "authentication", count: 4},
          {word: "hack", count: 3},
          {word: "cyber", count: 2},
          {word: "threat", count: 2},
          {word: "hacker", count: 2},
          {word: "hackers", count: 2},
          {word: "cybersecurity", count: 1},
          {word: "hacking", count: 1}
      ],
      percentage: 1.013
    }


const testWebsite = function(url) {
  console.log(url);
  // const options = {
  //   mode: 'text',
  //   pythonOptions: ['-u'],
  //   scriptPath: './',
  //   args: [url]
  // };
  // PythonShell.PythonShell.run('main.py', options, function (err, results) {
  //   if (err) {
  //     console.log(err)
  //     throw err
  //   }
  //   // results is an array consisting of messages collected during execution
  //   console.log('results: %j', results);
  // });
  return dummy;
}

export default testWebsite
