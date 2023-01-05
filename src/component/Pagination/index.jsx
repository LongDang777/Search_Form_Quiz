/* eslint-disable eqeqeq */
import QueryString from 'qs';
import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import { DOTS, usePagination } from '../../hooks/usePanigation';
import './style.css'

export default function Pagination(props) {

  const location = useLocation()
  const history = useHistory()

  if(!location.search){
    history.push({
      search: '_page=1'
    })
  }

  const params = QueryString.parse(location.search, {
    ignoreQueryPrefix: true
  })

  
  let page = parseInt(params._page)

  console.log(page);

  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage = page,
    pageSize,
    className
  } = props;

  const paginationRange = usePagination({ currentPage, totalCount, siblingCount, pageSize })

  if (currentPage == 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(Number(currentPage) + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  
  return (
    <ul className={`pagination-container ${className}`}>
      <li className={`pagination-item ${currentPage == 1 && 'disabled'}`}
        onClick={onPrevious}>
        <div className='arrow left' />
      </li>

      {paginationRange.map((pageNumber,index) => {

        if (pageNumber == DOTS) {
          return <li key={index} className='pagination-item dots'>&#8230;</li>
        }
       
        return (
          <li key={index} className={`pagination-item ${pageNumber == currentPage && 'selected'}`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        )
      })}

      <li className={`pagination-item ${currentPage == lastPage && 'disabled'}`}
        onClick={onNext} >
        <div className='arrow right' />
      </li>
    </ul >
  )
}
