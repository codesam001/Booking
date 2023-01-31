import { faBed, faPlane, faCar, faTaxi, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateRange } from 'react-date-range';
import { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns"
import './header.css'
import { useNavigate } from 'react-router-dom';



function Header({type}) {

  const [destination, setDestination] = useState("")
  const [openDate, setOpenDate] = useState(false)

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);


  const [openOptions, setOpenOptions] = useState(false)
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });


  const navigate = useNavigate()

  const handleOption = (names, operation ) => {
    setOptions((prev) => { 
      return {
      ...prev, 
      [names] : operation === "i" ? options[names] +1 : options[names] - 1, 
    }}) 
  }

  const handleSearch =()=>{
navigate('/hotels', { state:  {destination, date, options }} )
  }


  return (
    <div className='header'>
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer" }>
        <div className="headerList">
          <div className="headeListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headeListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flight</span>
          </div>
          <div className="headeListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headeListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headeListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>


        { type !== "list" && 
        <>
          <h1 className="headerTitle">A lifetime of discount It's Genius</h1>
        <p className="headerDesc">Get rewarded for your travel - unlock instant saving of  10% or mote with
          a  free lamaBooking account</p>
        <button className="headerBtn">Sign in / Register </button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input type="text"
              placeholder='where are you going?'
              className='headerSearchInput' 
              onChange={(e)=> setDestination(e.target.value)}/>
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span onClick={() => setOpenDate(!openDate)} className='headerSearchText'>
              {`${format(date[0].startDate, "MM/dd/yyyy")} to 
            ${format(date[0].endDate, 
            "MM/dd/yyyy")} to `}</span>

            {openDate && 
            <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date} 
              className='date'
              minDate={new Date ()}
              />}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span onClick={()=> setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adult .${options.children} children . ${options.room} room`}</span>
           {openOptions &&  <div className="options">

            <div className="optionItem">
              <span className="optionText">Adult </span>
              <div className="optionCounter">
              <button 
              disabled = {options.adult <= 1}
              className="optionCounterButton" 
              onClick={() => handleOption('adult', "d")}
              > 
              -
              </button>
              <span className="optionCounterNumber">{options.adult}</span>
              <button className="optionCounterNumber" onClick={() => handleOption('adult', "i")}>+</button>
              </div>
            </div>
            <div className="optionItem">
              <span className="optionText">Childen</span>
              <div className="optionCounter">
              <button 
               disabled = {options.children <= 0}
               className="optionCounterButton" 
               onClick={() => handleOption('children', "d")}
               >
                -
              </button>
              <span className="optionCounterNumber">{options.children}</span>
              <button className="optionCounterNumber" onClick={() => handleOption('children', "i")}>+</button>
              </div>
            </div>
            <div className="optionItem">
              <span className="optionText">Room</span>
              <div className="optionCounter">
              <button 
               disabled = {options.room <= 1}
              className="optionCounterButton" 
              onClick={() => handleOption('room', "d")}
              >
                -
              </button>
              <span className="optionCounterNumber">{options.room}</span>
              <button className="optionCounterNumber" onClick={() => handleOption('room', "i")}>+</button>
              </div>
            </div>
          </div>}
          <div className="headerSearchItem">
            <button onClick={handleSearch} className="headerBtn">Search</button>

          </div>

        </div>

           </div>
           </>
           }
      </div>
    </div>
  )
}

export default Header











