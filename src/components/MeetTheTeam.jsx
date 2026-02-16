import styles from './MeetTheTeam.module.css';

const TEAM = [
  { name: 'Engr Abubakar A Yahaya', role: 'CEO', description: 'Driving vision and strategy for Elite Cycle Homes.', image: '/team-abubakar.png' },
  { name: 'Engr Ahmad Nuhu', role: 'Head of Sites', description: 'Overseeing construction and site development.', image: '/team-ahmad.png' },
  { name: 'Engr Yasin Muhammad', role: 'Head of Sales', description: 'Leading sales strategy and client relations.', image: '/team-yasin.png' },
  { name: 'Engr Yahaya Muhammad', role: 'Head of Digital Marketing', description: 'Driving digital presence and marketing initiatives.', image: '/team-yahaya.png' },
];

function MeetTheTeam() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Meet the Team</h2>
      <div className={styles.grid}>
        {TEAM.map((member) => (
          <div key={member.name} className={styles.card}>
            <div className={styles.avatar}>
              {member.image ? (
                <img src={member.image} alt={member.name} />
              ) : (
                <span className={styles.placeholder}>{member.name.charAt(0)}</span>
              )}
            </div>
            <h3>{member.name}</h3>
            <p className={styles.role}>{member.role}</p>
            <p className={styles.desc}>{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MeetTheTeam;
