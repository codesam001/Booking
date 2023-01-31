import './list.css'
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import {useLocation} from  "react-router-dom";
import { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem';

const List = () => {

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [options, setOptions] = useState(location.state.options)
  const [openDate, setOpenDate] = useState(false);

  return (

    <div>
      <Navbar/> 
      <Header type="list"/> 
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
                 </div>
            <div className="lsItem">
              <label>Check -in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                 date[0].startDate,
                 "MM/dd/yyyy"
                 )}  to  ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                 {openDate && (
                  <DateRange
                 onChange={(item)=> setDate([item.selection])} 
                 range={date}
                 minDate={new Date()}       
                 />)}
            </div>
            <div className="isItem">
              <label>Options</label>
              <div className="lsOptions">

              <div className="lsOptionItem">
                <spam className="lsOptionText">
                  Min price <small>per night</small>
                </spam>
                <input type="text" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <spam className="lsOptionText">
                  Max price <small>per night</small>
                </spam>
                <input type="text" className="lsOptionInput" />
              </div>
              <div className="lsOptionItem">
                <spam className="lsOptionText">
                  Adult
                </spam>
                <input type="number" min={1} className="lsOptionInput" placeholder={options.adult} />
              </div>
              <div className="lsOptionItem">
                <spam className="lsOptionText">
                 Children
                </spam>
                <input type="number" min={0} className="lsOptionInput" placeholder={options.children}/>
              </div>
              <div className="lsOptionItem">
                <spam className="lsOptionText">
                  Room 
                </spam>
                <input type="number" min={1} className="lsOptionInput" placeholder={options.room} />
              </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem/> 
            <SearchItem/> 
            <SearchItem/> 
            <SearchItem/> 
            <SearchItem/> 
            <SearchItem/> 
            <SearchItem/> 
            <SearchItem/> 
            <SearchItem/> 
            <SearchItem/> 
            <SearchItem/> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default List















