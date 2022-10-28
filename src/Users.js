/** @format */
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Pagination from "./components/pagination";
import Spinner from "./components/spinner";

var requestOptions = {
	method: "GET",
	redirect: "follow",
};

const Users = () => {
	const [users, setUsers] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(4);
    // const [loading, setLoading] = useState(false)

    
	useEffect(() => {
            fetch("https://randomuser.me/api/?results=25") 
            .then((response) => response.json())
            .then((result) => {
                setUsers(result.results);
            })
            .catch((error) => console.log("error", error));
        }, []);
    

	console.log(users.length)

	const lastPostIndex = currentPage * postsPerPage;
	const firstPostIndex = lastPostIndex - postsPerPage;
	const currentPost = users.slice(firstPostIndex, lastPostIndex);

	return (
        <div className='users container py-3'>
			<h2 className='mb-5'>AltSchool Students 2021/2022 Session</h2>
			<div className='cards-container'>
				{users.length < 1 ? 'Loading...' : currentPost.map((user, index) => (
                    
					<  Card
						name={`${user.name.first} ${user.name.last}`}
						age={user.dob.age}
						gender={user.gender}
						country={user.location.country}
						city={user.location.city}
						state={user.location.state}
						picture={user.picture.large}
					/>
				))}
			</div>
			<Pagination
				allUsers={users.length}
				postsPerPage={postsPerPage}
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
			/>
            
		</div>
	);
};

export default Users;
