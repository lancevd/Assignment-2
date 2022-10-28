import React from 'react'
import { useState } from 'react';

const Pagination = ({allUsers, postsPerPage, currentPage, setCurrentPage}) => {
    let pages = [];
    // const [disabled, setDisabled] = useState(true);

    for (let i=1; i<= Math.ceil(allUsers/postsPerPage); i++ ) {
        pages.push(i)
    }
        
    // console.log(pages.length, currentPage)

  return (
    <div className='pagination mt-5'> 
        <button
			onClick={() => setCurrentPage(currentPage-1) }
			id='prev'
            disabled={currentPage==1 ? true : false}
			>
            Prev
			</button>
        {pages.map((page, index) => {
            return (
                <button
                    key={index}
                    onClick={() => setCurrentPage(page)}
                    className={page === currentPage ? "active" : ""}
                    >
                    {page}
                </button>
            );
        }
        )}
        <button
			onClick={() => setCurrentPage(currentPage+1) }
			id='next'
            // disabled={false}
            disabled={currentPage==pages.length ? true : false}
			>
            Next
			</button>
    </div>
  )
}

export default Pagination