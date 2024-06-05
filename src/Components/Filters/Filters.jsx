import React, { useState, useEffect, useReducer } from 'react';
import Select from 'react-select';
import { Link, useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import { LoginButton } from './../Others/LoginButton';
import { LogoutButton } from '../Others/LogoutButton';
import { User } from '../Others/User';
import { options } from '../Filters/filter_queries'

const Filters = ({ post }) => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    navigate(`#page${currentPage}`);
  }, [currentPage, navigate]);

  const reducer = (filters, action) => {
    console.log(action.type);
    switch (action.type) {
      case 'NEW':
        action.payload.map((item) => {
          if (!filters.includes(item)) {
            filters = [...filters, item];
          }
        })
        // const newFilters = [...filters, action.payload];
        console.log("these are the new filters", filters);
        console.log("....");
        return filters;
        break;
      case 'RESET':
        console.log("Reset were the  filters", filters);
        sessionStorage.setItem('filters', JSON.stringify([]));
        return [];
        break;
      case 'PAGE':
        // setCurrentPage(action.payload);
        break;
    }
  }

  // let filters= [];
  const [searchParams, setSearchParams] = useSearchParams(new URLSearchParams());
  //const [filters, setFilters] = useState([]);
  const [filters, dispatch] = useReducer(reducer, []);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [value, setValue] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [postPerPage] = useState(100);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPassoutYears, setSelectedPassoutYears] = useState([]);
  const [batch, setBatch] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState([]);
  const [selectedStates, setSelectedStates] = useState([]);
  const [selectedCity, setSelectedCity] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState([]);
  const [selectedDegree, setSelectedDegree] = useState([]);
  const [selectedProgram, setSelectedProgram] = useState([]);
  const [selectedProfession, setSelectedProfession] = useState([]);
  const [selectedDesignation, setSelectedDesignation] = useState([]);


  const uniqueBatchValues = [...new Set(post
    .filter(obj => obj.batch !== 'Nill')
    .map(obj => obj.batch)
  )];
  const uniqueDegreeValues = [...new Set(post
    .filter(obj => obj.degree && obj.degree !== 'Nill')
    .map((obj) => { return obj.degree[0]?.toUpperCase() + obj.degree.slice(1) })
  )];
  const uniqueProgramValues = [...new Set(post
    .filter(obj => obj.program && obj.program !== 'Nill')
    .map((obj) => { return obj.program[0]?.toUpperCase() + obj.program.slice(1) })
  )];
  const uniquePassoutyearValues = [...new Set(post
    .filter(obj => obj.passoutyear && obj.passoutyear !== 'Nill')
    .map((obj) => { return obj.passoutyear[0]?.toUpperCase() + obj.passoutyear.slice(1) })
  )];
  const uniqueDepartmentValues = [...new Set(post
    .filter(obj => obj.department && obj.department !== 'Nill')
    .map((obj) => { return obj.department[0]?.toUpperCase() + obj.department.slice(1) })
  )];
  const uniqueProfessionValues = [...new Set(post
    .filter(obj => obj.profession && obj.profession !== 'Nill')
    .map((obj) => { return obj.profession[0]?.toUpperCase() + obj.profession.slice(1) })
  )];
  const uniqueDesignationValues = [...new Set(post
    .filter(obj => obj.designation && obj.designation !== 'Nill')
    .map((obj) => { return obj.designation[0]?.toUpperCase() + obj.designation.slice(1) })
  )];
  const uniqueCompanyValues = [...new Set(post
    .filter(obj => obj.company && obj.company !== 'Nill')
    .map((obj) => { return obj.company[0]?.toUpperCase() + obj.company.slice(1) })
  )];
  const uniqueCityValues = [...new Set(post
    .filter(obj => obj.city && obj.city !== 'Nill')
    .map((obj) => { return obj.city[0]?.toUpperCase() + obj.city.slice(1) })
  )];
  const uniqueStateValues = [...new Set(post
    .filter(obj => obj.state && obj.state !== 'Nill')
    .map((obj) => { return obj.state[0]?.toUpperCase() + obj.state.slice(1) })
  )];

  const handleBatchFilter = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    const newBatch = [...batch, selectedOptions]
    setBatch(newBatch);
  };
  const handleDegreeFilter = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    const newDegree = [...selectedDegree, selectedOptions]
    setSelectedDegree(newDegree);
  };
  const handleProgramFilter = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    const newProgram = [...selectedProgram, selectedOptions]
    setSelectedProgram(newProgram);
  };
  const handleCityFilter = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    const newCity = [...selectedCity, selectedOptions]
    setSelectedCity(newCity);
  };
  const handlePassoutYearFilter = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    const newPassoutYear = [...selectedPassoutYears, selectedOptions]
    setSelectedPassoutYears(newPassoutYear);
  };
  const handleDepartmentFilter = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    const newDepartment = [...selectedDepartment, selectedOptions]
    setSelectedDepartment(newDepartment);
  };
  const handleProfessionFilter = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    const newProfession = [...selectedProfession, selectedOptions]
    setSelectedProfession(newProfession);
  };
  const handleDesignationFilter = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    const newDesignation = [...selectedDesignation, selectedOptions]
    setSelectedDesignation(newDesignation);
  };
  const handleStateFilter = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    const newState = [...selectedStates, selectedOptions]
    setSelectedStates(newState);
  };
  const handleCompanyFilter = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    const newCompany = [...selectedCompany, selectedOptions]
    setSelectedCompany(newCompany);
  };

  const lastPostNumber = postPerPage * currentPage;
  const firstPostNumber = (postPerPage * currentPage) - postPerPage;
  const currentPosts = filteredPosts.length ? filteredPosts.slice(firstPostNumber, lastPostNumber) : post.slice(firstPostNumber, lastPostNumber);
  const totalPages = filteredPosts.length ? Math.ceil(filteredPosts.length / postPerPage) : Math.ceil(post.length / postPerPage);

  const handleSubmit = () => {
    const flattened = filters.flat(Infinity);
    const filteredData = post.filter(item => {
      return flattened.some(flat => {
        return Object.values(item).includes(flat);
      });
    });
    setFilteredPosts((curr) => {
      return filteredData;
    });
  }

  const renderSelect = (label, options) => (
    <label key={label}>
      {label}
      <Select
        id={options}
        onChange={handleChange}
        options={options.map((option, i) => ({ value: option, label: option, name: option }))}
        placeholder={`Select ${label}`}
        isSearchable={true}
      />
    </label>
  );

  const handleChange = (e) => {
    const selectedValue = e.value;
    const newBatch = [...filters, selectedValue];
    dispatch({ type: 'NEW', payload: newBatch });
  };

  useEffect(() => {
    sessionStorage.setItem('page_number', JSON.stringify(currentPage));
    if (filters.length) {
      sessionStorage.setItem('filters', JSON.stringify(filters));
    }
    handleSubmit();
  }, [filters, currentPage])

  useEffect(() => {
    const storedFilters = sessionStorage.getItem("filters");
    const storedPageNumber = sessionStorage.getItem("page_number");
    const parsePageNumber = JSON.parse(storedPageNumber);
    const parseFilters = JSON.parse(storedFilters);
    if (parsePageNumber) { 
      dispatch({ type: 'PAGE', payload: parsePageNumber });
    }
    if (parseFilters) {
      dispatch({ type: 'NEW', payload: parseFilters });
    }
  }, []);

  return (
    <div>
      <div className='sidebar-header' style={{ textAlign: 'center' }}>
        <h2>Filters</h2>
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        {isAuthenticated ? <h5><User /></h5> : <h5>hii there please login</h5>}
        <button onClick={handleSubmit}>Apply</button>
        <button onClick={() => {
          dispatch({ type: 'RESET', payload: [] });
          setFilteredPosts([]);
        }}
        >Reset</button>
      </div>
      <div>
        <input type="text" placeholder='Enter a filter' />
        <div>
          {filters ? filters.map((item) => {
            return (
              <span style={{ display: 'flex', flexDirection: 'row' }}>
                <h5>{item}</h5>
                <button onClick={(e) => dispatch({ type: 'DELETE', payload: e })}>x</button>
              </span>
            )
          }) : null}
        </div>
      </div>
      {/* List of Filters */}
      <ul className='links'>
        <form>
          {renderSelect("Batch", uniqueBatchValues)}
          {renderSelect("Degree", uniqueDegreeValues)}
          {renderSelect("Program", uniqueProgramValues)}
          {renderSelect("Passout Year", uniquePassoutyearValues)}
          {renderSelect("Department", uniqueDepartmentValues)}
          {renderSelect("Profession", uniqueProfessionValues)}
          {renderSelect("Designation", uniqueDesignationValues)}
          {renderSelect("Company", uniqueCompanyValues)}
          {renderSelect("City", uniqueCityValues)}
          {renderSelect("State", uniqueStateValues)}
        </form>
      </ul>
      <div>
        {currentPosts.map((post, index) => {
          return (
            <Link to={`${post._id}`} post={post}>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', border: '1px solid black' }} key={index}>
                <p>{(currentPage - 1) * postPerPage + index + 1}</p>
                <p>
                  {post.name === 'Nill' ? '-' : post.name}
                </p>
                <p>
                  {post.batch === 'Nill' ? '-' : post.batch}
                </p>
                <p>
                  {post.department === 'Nill' ? '-' : post.department}
                </p>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Pagination Buttons */}
      <div>
        <button onClick={() => {
          setCurrentPage((curr) => {
            let prevPage = curr - 1;
            if (prevPage <= 0) {
              prevPage = totalPages;
            }
            return prevPage;
          })
        }}>Prev</button>
        {Array.from({ length: 7 }, (_, index) => {
          let pageNumber = currentPage + index;
          if (pageNumber > totalPages) {
            return null;
          }
          if (pageNumber <= 0) {
            pageNumber = totalPages + pageNumber;
          }
          return (
            <button
              key={pageNumber}
              onClick={() => setCurrentPage(pageNumber)}
            >
              {pageNumber}
            </button>
          )
        })}
        <button onClick={() => {
          setCurrentPage((curr) => {
            let nextPage = Number(curr) + 1;
            if (nextPage > totalPages) {
              nextPage = 1;
            }
            return nextPage;
          })
        }}>Next</button>
      </div>

    </div >
  );
};

export default Filters;
