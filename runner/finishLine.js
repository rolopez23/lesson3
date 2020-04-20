const axios = require('axios');

const finishLine = 'http://localhost:4321/finish'

const finish = (teamMembers, race, time) => {
  const team = teamMembers.reduce((team, member)=>{
    if (team.length === 0) {
      return team += member;
    } 
    return `${team}, ${member}`
  },'');
  const data = {
    race,
    time, 
    team
  }
  axios.post(finishLine, data)
}

module.exports = finish;

