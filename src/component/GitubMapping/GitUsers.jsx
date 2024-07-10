"use client";
import React, { useEffect, useState } from "react";
import { GithubApi } from "../../Apis/GithubApi";
import Link from "next/link";

const getData = async () => {
  const response = await fetch(GithubApi);

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.status}`);
  }
  
  return response.json();
};

const GitUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null); 
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true); 
    const fetchData = async () => {
      try {
        const users = await getData();
        setUsers(users);
      } catch (error) {
        console.error(error);
        setError(error); 
      } finally {
        setIsLoading(false); 
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error fetching users: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading users...</div>;
  }

  return (
    <>
      {users.map((user) => (
        <Link href={`/DynamicRoutePage/${user.id}`} key={user.id}>
          <div
            className="bg-black flex flex-col items-center justify-center px-10 gap-5 text-center w-[200px] h-[200px]"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-[60%] h-[60%] object-cover"
            />
            <p className="text-white">{user.login}</p>
            <a href={`/DynamicRoutePage/${user.id}`}> view more </a>
          </div>
        </Link>
      ))}
    </>
  );
};

export default GitUsers;
