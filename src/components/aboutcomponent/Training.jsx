import { useState } from 'react';
import './training.css'
// import trainner from '../assets/images/trainner.jpg';
import trainner from  '../../assets/images/trainner.jpg'

const trainers = [
  { name: "John Doe", contact: "john@example.com", experience: "10 years" },
  { name: "Jane Smith", contact: "jane@example.com", experience: "8 years" },
  { name: "Mike Johnson", contact: "mike@example.com", experience: "12 years" },
];

export default function PersonalTrainerPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    document.getElementById("trainerModal").style.display = "block";
  };

  const closeModal = () => {
    document.getElementById("trainerModal").style.display = "none";
  };

  return (
    <div className="trainner-container">
    <div className='trainner-image'>
    {/* <img src={trainner} alt="trainner" className='trainner-image'  /> */}
     
      <header>
        <nav>
          <img src="/placeholder.svg" alt="" style={{ height: '40px' }} />
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">CONTACT</a></li>
            <li><a href="#">HOW IT WORK</a></li>
          </ul>
        </nav>
      </header>

      <main style={{ position: 'relative', marginTop: '300px' }}>
        <div className="trainner-overlay">
          <h1 className="personal">PERSONAL TRAINING</h1>
          <p>
            "Strength doesn't come from what you can do; it comes from overcoming the things you once thought you couldn't."
            This quote encourages clients to push through their limits and reminds them that growth happens through challenges!
          </p>
          <button onClick={openModal} className="button-train">START</button>
        </div>
      </main>

      {/* Modal */}
      <div id="trainerModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <h2>Our Personal Trainers</h2>
          <p>Meet our experienced team of personal trainers</p>
          {trainers.map((trainer, index) => (
            <div key={index} className="trainer-card">
              <h3 >{trainer.name}</h3>
              <p>Contact: {trainer.contact}</p>
              <p>Experience: {trainer.experience}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
