import { useParams, useLoaderData } from "react-router-dom";

const JobPage = () => {
    const { id } = useParams();
    const job = useLoaderData();


  return <h1>{ job.title }</h1>
}

export const JobLoader = async ({ params }) => {
    const response = await fetch(`/api/jobs/${params.id}`);
    const data = await response.json();

    return data
}

export default JobPage
