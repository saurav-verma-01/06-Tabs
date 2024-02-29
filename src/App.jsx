import { useEffect } from "react";
import { useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import CompanyTag from "./components/CompanyTag";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [jobData, setJobData] = useState([]);
  useEffect(() => {
    fetchJobData();
  }, []);
  const fetchJobData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(`${url}`);
      const data = await res.json();

      setJobData(data);
    } catch (error) {
      alert("Something went wrong in data fetching");
    } finally {
      setIsLoading(false);
    }
  };

  console.log(jobData[0]);
  console.log(jobData[1]);
  console.log(jobData[2]);
  // console.log(typeof jobData);
  const companies = jobData.map((item) => item.company);

  return (
    <main>
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <Navbar>
            {companies.map((company) => (
              <CompanyTag key={company} company={company} />
            ))}
          </Navbar>
          <Content show={jobData[2]} />
        </>
      )}
    </main>
  );
};
export default App;
