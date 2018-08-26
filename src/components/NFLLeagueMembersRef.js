export const allTeams = {
  NYJ: {
    image: function() {
      return `http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${this.abbr}.png&h=150&w=150`
    },
    abbr: 'NYJ',
    weeks: [0, 1, 0],
    record: function() {
      return this.weeks.reduce((acc, val) => acc += val);
    },
  },
  NYG: {
    image: function() {
      return `http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${this.abbr}.png&h=150&w=150`
    },
    abbr: 'NYG',
    weeks: [1, 1, 0],
    record: function() {
      return this.weeks.reduce((acc, val) => acc += val);
    },
  },
  PHI: {
    image: function() {
      return `http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${this.abbr}.png&h=150&w=150`
    },
    abbr: 'PHI',
    weeks: [0, 1, 0],
    record: function() {
      return this.weeks.reduce((acc, val) => acc += val);
    },
  },
  WAS: {
    image: function() {
      return `http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${this.abbr}.png&h=150&w=150`
    },
    abbr: 'WAS',
    weeks: [0, 1, 1],
    record: function() {
      return this.weeks.reduce((acc, val) => acc += val);
    },
  },
  CHI: {
    image: function() {
      return `http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${this.abbr}.png&h=150&w=150`
    },
    abbr: 'CHI',
    weeks: [1, 1, 1],
    record: function() {
      return this.weeks.reduce((acc, val) => acc += val);
    },
  },
  DET: {
    image: function() {
      return `http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${this.abbr}.png&h=150&w=150`
    },
    abbr: 'DET',
    weeks: [0, 1, 0],
    record: function() {
      return this.weeks.reduce((acc, val) => acc += val);
    },
  },
  GB:
  {
    image: function() {
      return `http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${this.abbr}.png&h=150&w=150`
    },
    abbr: 'GB',
    weeks: [0, 1, 0],
    record: function() {
      return this.weeks.reduce((acc, val) => acc += val);
    },
  },
  MIN: {
    image: function() {
      return `http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${this.abbr}.png&h=150&w=150`
    },
    abbr: 'MIN',
    weeks: [0, 1, 0],
    record: function() {
      return this.weeks.reduce((acc, val) => acc += val);
    },
  },
  ATL: {
    image: function() {
      return `http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${this.abbr}.png&h=150&w=150`
    },
    abbr: 'ATL',
    weeks: [0, 1, 0],
    record: function() {
      return this.weeks.reduce((acc, val) => acc += val);
    },
  },
  CAR: {
    image: function() {
      return `http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${this.abbr}.png&h=150&w=150`
    },
    abbr: 'CAR',
    weeks: [0, 1, 0],
    record: function() {
      return this.weeks.reduce((acc, val) => acc += val);
    },
  },
  NO: {
    image: function() {
      return `http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${this.abbr}.png&h=150&w=150`
    },
    abbr: 'NO',
    weeks: [1, 1, 0],
    record: function() {
      return this.weeks.reduce((acc, val) => acc += val);
    },
  },
  TB:
  {
    image: function() {
      return `http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${this.abbr}.png&h=150&w=150`
    },
    abbr: 'TB',
    weeks: [0, 0, 0],
    record: function() {
      return this.weeks.reduce((acc, val) => acc += val);
    },
  },
  ARI: {
    image: function() {
      return `http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${this.abbr}.png&h=150&w=150`
    },
    abbr: 'ARI',
    weeks: [0, 1, 0],
    record: function() {
      return this.weeks.reduce((acc, val) => acc += val);
    },
  },
  SF: {
    image: function() {
      return `http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${this.abbr}.png&h=150&w=150`
    },
    abbr: 'SF',
    weeks: [0, 1, 0],
    record: function() {
      return this.weeks.reduce((acc, val) => acc += val);
    },
  },
  SEA: {
    image: function() {
      return `http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${this.abbr}.png&h=150&w=150`
    },
    abbr: 'SEA',
    weeks: [0, 1, 0],
    record: function() {
      return this.weeks.reduce((acc, val) => acc += val);
    },
  },
  DAL: {
    image: function() {
      return `http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${this.abbr}.png&h=150&w=150`
    },
    abbr: 'DAL',
    weeks: [0, 1, 1],
    record: function() {
      return this.weeks.reduce((acc, val) => acc += val);
    },
  },
  LAC: {
    image: function() {
      return `http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${this.abbr}.png&h=150&w=150`
    },
    abbr: 'LAC',
    weeks: [0, 1, 0],
    record: function() {
      return this.weeks.reduce((acc, val) => acc += val);
    },
  },
  BUF: {
    image: function() {
      return `http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${this.abbr}.png&h=150&w=150`
    },
    abbr: 'BUF',
    weeks: [0, 1, 0],
    record: function() {
      return this.weeks.reduce((acc, val) => acc += val);
    },
  },
  NE: {
    image: function() {
      return `http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${this.abbr}.png&h=150&w=150`
    },
    abbr: 'NE',
    weeks: [1, 1, 0],
    record: function() {
      return this.weeks.reduce((acc, val) => acc += val);
    },
  },
  MIA: {
    image: function() {
      return `http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${this.abbr}.png&h=150&w=150`
    },
    abbr: 'MIA',
    weeks: [0, 1, 0],
    record: function() {
      return this.weeks.reduce((acc, val) => acc += val);
    },
  },
  CIN: {
    image: function() {
      return `http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${this.abbr}.png&h=150&w=150`
    },
    abbr: 'CIN',
    weeks: [1, 1, 0],
    record: function() {
      return this.weeks.reduce((acc, val) => acc += val);
    },
  },
  PIT: {
    image: function() {
      return `http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${this.abbr}.png&h=150&w=150`
    },
    abbr: 'PIT',
    weeks: [0, 1, 0],
    record: function() {
      return this.weeks.reduce((acc, val) => acc += val);
    },
  },
  BAL: {
    image: function() {
      return `http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${this.abbr}.png&h=150&w=150`
    },
    abbr: 'BAL',
    weeks: [0, 1, 0],
    record: function() {
      return this.weeks.reduce((acc, val) => acc += val);
    },
  },
  CLE: {
    image: function() {
      return `http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${this.abbr}.png&h=150&w=150`
    },
    abbr: 'CLE',
    weeks: [0, 1, 0],
    record: function() {
      return this.weeks.reduce((acc, val) => acc += val);
    },
  },
  HOU: {
    image: function() {
      return `http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${this.abbr}.png&h=150&w=150`
    },
    abbr: 'HOU',
    weeks: [0, 1, 0],
    record: function() {
      return this.weeks.reduce((acc, val) => acc += val);
    },
  },
  IND: {
    image: function() {
      return `http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${this.abbr}.png&h=150&w=150`
    },
    abbr: 'IND',
    weeks: [0, 1, 0],
    record: function() {
      return this.weeks.reduce((acc, val) => acc += val);
    },
  },
  JAX: {
    image: function() {
      return `http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${this.abbr}.png&h=150&w=150`
    },
    abbr: 'JAX',
    weeks: [0, 1, 0],
    record: function() {
      return this.weeks.reduce((acc, val) => acc += val);
    },
  },
  TEN: {
    image: function() {
      return `http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${this.abbr}.png&h=150&w=150`
    },
    abbr: 'TEN',
    weeks: [0, 1, 0],
    record: function() {
      return this.weeks.reduce((acc, val) => acc += val);
    },
  },
  DEN: {
    image: function() {
      return `http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${this.abbr}.png&h=150&w=150`
    },
    abbr: 'DEN',
    weeks: [0, 1, 0],
    record: function() {
      return this.weeks.reduce((acc, val) => acc += val);
    },
  },
  KC: {
    image: function() {
      return `http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${this.abbr}.png&h=150&w=150`
    },
    abbr: 'KC',
    weeks: [0, 1, 0],
    record: function() {
      return this.weeks.reduce((acc, val) => acc += val);
    },
  },
  OAK: {
    image: function() {
      return `http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${this.abbr}.png&h=150&w=150`
    },
    abbr: 'OAK',
    weeks: [0, 1, 0],
    record: function() {
      return this.weeks.reduce((acc, val) => acc += val);
    },
  },
  LA: {
    image: function() {
      return `http://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/${this.abbr}.png&h=150&w=150`
    },
    abbr: 'LA',
    weeks: [0, 1, 0],
    record: function() {
      return this.weeks.reduce((acc, val) => acc += val);
    },
  },
}

export const members = [
  {
    name: 'Tim',
    teams: [allTeams.TEN, allTeams.SF, allTeams.HOU, allTeams.KC],
    currentScore: function() {
      return this.teams.reduce((acc, team) => acc += team.weeks.reduce((acc, val) => acc += val), 0)
    },
  },
  {
    name: 'Ed',
    teams: [allTeams.WAS, allTeams.NO, allTeams.DAL, allTeams.PIT],
    currentScore: function() {
      return this.teams.reduce((acc, team) => acc += team.weeks.reduce((acc, val) => acc += val), 0)
    },
  },
  {
    name: 'Matt',
    teams: [allTeams.BAL, allTeams.PHI, allTeams.ATL, allTeams.OAK],
    currentScore: function() {
      return this.teams.reduce((acc, team) => acc += team.weeks.reduce((acc, val) => acc += val), 0)
    },
  },
  {
    name: 'Chris',
    teams: [allTeams.LA, allTeams.NE, allTeams.DEN, allTeams.JAX],
    currentScore: function() {
      return this.teams.reduce((acc, team) => acc += team.weeks.reduce((acc, val) => acc += val), 0)
    },
  }
]
