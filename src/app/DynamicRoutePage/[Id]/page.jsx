"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GithubApi } from "@/Apis/GithubApi";

const UserPage = ({ params }) => {
  const { id } = params;
  const [individualInfo, setIndividualInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`${GithubApi}/DynamicRoutePage/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status}`);
        }
        const data = await response.json();
        setIndividualInfo(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [id]);
  console.log(error, "this is error")
  console.log(response)

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <div key={individualInfo.id}>
        <img src={individualInfo.avatar_url} alt={individualInfo.login} className="w-[60%] h-[60%] object-cover" />
        <p>Name: {individualInfo.name}</p>
        <p className="text-white">User Name: {individualInfo.login}</p>
        <h6>View More</h6>
      </div>
    </div>
  );
};

export default UserPage;
