import './App.css';
import { Link } from 'react-scroll';

function App() {
  const navItems = [
    {
      id:1,
      title : 'About'
    },
    {
      id:2,
      title : 'Skills'
    },
    {
      id:3,
      title : 'Experience'
    }
  ]
  return (
    <div className="App">
      <header>
        <nav>
          <h2>My Portfolio</h2>
          <ul>
            {
              navItems.map(menu=>(
                <li>
                <Link to={menu.title} smooth={true} offset={-300} duration={500}>{menu.title}</Link>           
                </li>  
              ))
            }
          </ul>
        </nav>
          
      </header>
      <main>
        {
        navItems.map(menu=>( 
          <div className='content'>
          <h1 className='content-header' id={menu.title}>{menu.title}</h1>
        </div>
        ))

        }

      </main>
    </div>
  );
}

export default App;
