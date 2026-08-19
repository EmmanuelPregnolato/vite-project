// Types.

interface User {
  name: string;
  email: string;
}

interface CardProps {
  user: User;
  isActive: boolean;
}

// Functions
function Card({user, isActive} : CardProps) {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '15px',
      borderRadius: '8px',
      marginBottom: '10px',
      backgroundColor: isActive ? '#e6fffa' : '#f9f9f9',
      color: '#333'
    }}>
      <h3 style={{ margin: '0 0 5px 0' }}>{user.name}</h3>
      <p style={{ margin: 0, color: '#666' }}>{user.email}</p>
      <small style={{ color: isActive ? 'green' : 'gray' }}>
        {isActive ? '● En ligne' : '○ Hors ligne'}
      </small>
    </div>
  );
}

export default function App() {
  const user1: User = { name: "Emmanuel Pregnolato", email: "ep@mail.com"};
  const user2: User = { name: "Marie Bourbonnais", email: "mpb@mail.com" };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Test React + TypeScript</h1>
      <Card user={user1} isActive={true}/>
      <Card user={user2} isActive={false}/>
    </div>
  );
}
