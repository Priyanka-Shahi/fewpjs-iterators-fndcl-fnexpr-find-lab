

  function superbowlWin(records) {
    let found = records.find(rec=>rec.result==='W');
    if(found) {
        return found.year;
    } else {
        return undefined;
    }
    }

console.log(superbowlWin(record));
