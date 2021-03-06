import './list.css';

const baseballTeams = [
  { name: 'KIA', rank: 1, games: 38, win: 25, draw: 0, lose: 13 },
  { name: 'LG', rank: 2, games: 37, win: 23, draw: 0, lose: 14 },
  { name: 'NC', rank: 3, games: 37, win: 22, draw: 1, lose: 14 },
  { name: '두산', rank: 4, games: 36, win: 18, draw: 1, lose: 17 },
  { name: '넥센', rank: 5, games: 37, win: 18, draw: 1, lose: 18 },
  { name: 'SK', rank: 5, games: 37, win: 18, draw: 1, lose: 18 },
  { name: 'kt', rank: 7, games: 38, win: 18, draw: 0, lose: 20 },
  { name: '한화', rank: 8, games: 37, win: 17, draw: 0, lose: 20 },
  { name: '롯데', rank: 9, games: 36, win: 16, draw: 0, lose: 20 },
  { name: '삼성', rank: 10, games: 37, win: 7, draw: 2, lose: 28 }
];

const TeamRank = ({ teams = [] }) => (
  <div className="hmb_tbl">
    <table className="kbo">
      <caption>2017 KBO리그 팀순위</caption>
      <thead>
        <tr>
          <th scope="col" className="th_num"><span className="blind">순번</span></th>
          <th scope="col" className="th_team"><span>팀명</span></th>
          <th scope="col"><span>경기</span></th>
          <th scope="col"><span>승</span></th>
          <th scope="col"><span>무</span></th>
          <th scope="col"><span>패</span></th>
        </tr>
      </thead>
      <tbody>
        {teams.map(team => <TeamRow key={team.name} team={team} />)}
      </tbody>
    </table>
  </div>
);

const TeamRow = ({ team }) => {
  const { name, rank, games, win, draw, lose } = team

  return (
    <tr>
      <th scope="row"><span>{rank}</span></th>
      <td>
        <div className="wrap">
          <div className="info">
            <span className="name">{name}</span>
          </div>
        </div>
      </td>
      <td><span>{games}</span></td>
      <td><span>{win}</span></td>
      <td><span>{draw}</span></td>
      <td><span>{lose}</span></td>
    </tr>
  )
}

export default () => <TeamRank teams={baseballTeams} />
