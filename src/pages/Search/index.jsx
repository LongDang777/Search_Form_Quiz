/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import QueryString from "qs";
import React, { useEffect, useRef, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import loadingImg from "../../asset/images/loadingGif.gif";
import notFound from '../../asset/images/notFound.svg';
import Pagination from "../../component/Pagination";
import Table from "../../component/table/Table";
import '../../component/Topnav/topnav.css';
import "./style.css";

const optionRegion = [
  {
    id: 0,
    region: "All"
  },
  {
    id: 1,
    region: "Africa"
  },
  {
    id: 2,
    region: "Americas"
  },
  {
    id: 3,
    region: "Asia"
  },
  {
    id: 4,
    region: "Antarctic"
  },
  {
    id: 5,
    region: "Europe"
  },
  {
    id: 6,
    region: "Oceania"
  }
]

export default function Search() {
  const history = useHistory();
  const location = useLocation()
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(notFound);
  const [total, setTotal] = useState(0)
  const inputRef = useRef()
  const LIMIT_PAGE = 10;
  const requestUrl = "https://country-api-orcin-nu.vercel.app/all";
  const messageError = notFound

  useEffect(() => {
    fetchData(params);
  }, [location.search])

  useEffect(() => {
    !params?._page && pushLocation({ _page: 1 })
  }, [])

  const fetchData = async (paramsSearch) => {
    setLoading(true)
    setError(null)
    try {
      const result = await axios.get(requestUrl, {
        params: {
          ...paramsSearch,
          _limit: 10
        }
      });
      setData(result.data);
      setTotal(result.headers['x-total-count'])
      result.data.length === 0 && setError(messageError)
    } catch (error) {
      setError(messageError);
    } finally {
      setLoading(false);
    }
  };

  const params = QueryString.parse(location.search, {
    ignoreQueryPrefix: true
  })

  const pushLocation = (value) => {
    const newParams = QueryString.stringify({ ...params, ...value })
    history.push({
      search: newParams
    })
  }

  const selecPage = (number) => {
    pushLocation({ _page: number })
  }

  const handleFilter = (e) => {
    const value = e.target.value;
    if (value === 'All') {
      delete params.region;
      history.push({
        search: QueryString.stringify({ ...params, _page: 1 })
      })
    }
    else {
      pushLocation({ region: value })
    }
  }

  const handleSearch = (value = '', isSubmit) => {
    value = value.trim()
    if (isSubmit && value) {
      pushLocation({ q: value, _page: 1 })
    }
    else if (!value) {
      delete params.q;
      const newParams = QueryString.stringify(params)
      history.push({
        search: newParams
      })
    }
  }

  const renderData = () => {
    if (loading) {
      return <img className="loading" src={loadingImg} alt="" />
    }
    else if (error || data.length < 1) {
      return <div className="row">
        <div className="col-12">
          <div className="card">
            <img className="img-notFound" src={notFound} alt="" />
            <button className="btn-retry"
              onClick={() => {
                inputRef.current.value = ''
                inputRef.current.focus()
                delete params.q;
                history.push({
                  search: QueryString.stringify({ params, _page: 1 })
                })
              }}>Retry</button>
          </div>
        </div>
      </div>
    }
    else {
      return (
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card__body">
                <Table
                  bodyData={data}
                  renderBody={renderBody}
                />
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  let number = +params?._page

  if (number > 1) {
    number = (+params?._page * 10) - 9
  }

  const renderBody = (item, index) => {
    const { name, capital, region, maps, timezones, flags, coatOfArms } = item;

    const openInNewTab = (url) => {
      window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
      <tr key={index}>
        <td>{number++}</td>
        <td>{name.common}</td>
        <td>
          <img src={flags.png} alt="" />
        </td>
        <td className="coatOfArms">
          {coatOfArms.png ? <img src={coatOfArms.png} alt="" /> : "No coatOfArms"}
        </td>
        <td>{capital || "No Capital"}</td>
        <td>
          <span
            className="region"
            style={{
              backgroundColor:
                region === "Antarctic" ? "#6a47fb"
                  : region === "Africa" ? "#ac6e21"
                    : region === "Asia" ? "#20b71c"
                      : region === "Europe" ? "#ec1d25"
                        : region === "Americas" ? "#fa8025"
                          : region === "Oceania" && "#07aeef",
            }}
          >
            {region}
          </span>
        </td>
        <td title={timezones}>{timezones}</td>
        <td
          onClick={() => openInNewTab(maps.googleMaps)}
          style={{ cursor: "pointer" }}
          title={maps.googleMaps}
        >
          {maps.googleMaps}
        </td>
      </tr>
    );
  };

  return (
    <div id="search">
      <div className="topnav">
        <div className="topnav__search">
          <input
            defaultValue={params?.q}
            type="text"
            placeholder="Search country..."
            onKeyUp={e => handleSearch(e.target.value, e.keyCode === 13)}
            ref={inputRef}
          />
          <i className="bx bx-search"></i>
          <i className="bx bx-x" onClick={() => {
            inputRef.current.value = ''
            inputRef.current.focus()
            handleSearch('', true)
          }}></i>
        </div>
        <div className="topnav__right">
          <div className="topnav__right-item">
            <label htmlFor="region">Select Region:</label>
            <select
              onChange={handleFilter}
              className="region-select"
              defaultValue={params?.region}
            >
              {optionRegion.map(({ id, region }) => (
                <option
                  key={id}
                  value={region}
                >
                  {region}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {renderData()}
      <Pagination
        className='pagination-bar'
        currentPage={Number(params._page)}
        totalCount={total}
        pageSize={LIMIT_PAGE}
        onPageChange={selecPage}
      />
    </div>
  );
}
