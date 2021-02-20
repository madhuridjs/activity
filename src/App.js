import React, {useState} from 'react';
import Modal from 'react-modal';
//import logo from './logo.svg';
import activityperiod from './Test.json'
import './App.css';
import Activ from './Activity'

Modal.setAppElement('#root')
function App(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [timings, setTimings] = useState([]);

  const openModal = (arg) => {    
    document.querySelector('.modal').style.display = 'block';
    document.querySelector('.backdrop').style.display = 'block';
    document.querySelector('.modal').innerHTML = '';
    
    for (let i = 0; i < arg.length; i++) {
      document.querySelector('.modal').innerHTML += `
        <div style='color: white;
                    width: 700px;
                    height: 150px;
                    display: flex;
                    justifyContent: center;
                    align-items: center;
                    
                   '>
          <div style='background-color: #263238;
                      height: 50px;
                      border-radius: 50px;
                      display: flex;
                      justifyContent: center;
                      align-items: center;
                      margin:0 30px;
                      padding: 0 30px;
                      border: 1px solid black; 
                      '>Start time: ${arg[i].start_time}</div>
                      <div style='background-color: #37474f;
                      height: 50px;
                      border-radius: 50px;
                      display: flex;
                      justifyContent: center;
                      align-items: center;
                      margin:0 30px;
                      border: 1px solid black;
                      padding: 0 30px;
                      '>End time: ${arg[i].end_time}</div>
            </div>
      `;
    }
    console.log(arg);
  }

  const closeModal = () => {
    document.querySelector('.modal').style.display = 'none';
    document.querySelector('.backdrop').style.display = 'none';
  }

  return (
    <div style = {{
                   height:'100vh',
                   backgroundImage: 
                   'linear-gradient( rgba(0,0,0,-0.5), rgba(0,0,0,.5) ), url(/images/bgimg.jpg)',
                   backgroundSize: 'cover',
                   overflow: 'hidden'
                  
                   
    }}>
    {/* <img src = "/images/bgimg.jpg" /> */}
    <div onClick={() => setModalIsOpen(true)}>
      <div style={{
            display: 'none',
            width: '700px',
            height: '500px',
            backgroundColor: '#757575',
            border: '5px solid black',
            //backgroundSize: 'cover',
            //overflow: 'hidden',
            position: 'absolute',
            zIndex: '999',
            margin: '48px 190px',

          
      }} className='modal'></div>
      <div className='backdrop' style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            opacity: '0.5',
            display: 'none'
      }}
      onClick={() => closeModal()}></div>
      {/* <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}> */}
        {/* <Activ click={openModal}  /> */}
        <div>
        <ul>
                {
                    activityperiod.members.map((member) =>{
                        return(
                            <div key={member.id} style={{
                                width: '300px',
                                height: '50px',
                                backgroundImage: 'url(/images/buttonimg.jpg)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                                position: 'relative',
                                marginBottom: '20px',
                                borderRadius: '50px',  
                                left: '65%',
                                color: 'white',
                                transform: 'translate(-130%, 400%)',
                                border: '1px solid white'
                            }}
                            onClick={() => openModal(member.activity_periods)}
                            >
                                <div style={{
                                      
                                    }}>
                                    <div>
                                        {member.real_name}
                                        {/* {member.tz} */}
                                    </div> 
                                    <ul>
                                    {/* {member.activity_periods.map((t) =>
                                    <div onClick = {this.props.openModal} >
                                        <li>
                                            {t.start_time}
                                        </li>
                                        <li>
                                            {t.end_time}
                                        </li>
                                    </div> 
                                    )} */}
                                    </ul>
                                   
                                    {/* <div>{s.activity_periods}</div> */}
                                </div> 
                               
                             </div>
                        );
                    })
                }
            </ul>
            </div>
      {/* </Modal> */}
    </div>
    </div>
  );
}

export default App;
