import React, { useEffect, useMemo, useState } from "react";
import BodyTop from "../../components/bodyTop/BodyTop";
import styles from "./home.module.css";
import FilmsDisplay from "../../components/filmDisplay/FilmsDisplay";
import Tabs from "../../components/ui/Tabs/Tabs";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useDebounce } from "use-debounce";
import { useGetTrendingMovieQuery } from "../../features/movie/movieApi";

const list = [
  {
    key: "all",
    label: "ALL",
  },
  {
    key: "movie",
    label: "Movies",
  },
  {
    key: "tv",
    label: "Tv Shows",
  },
];

const Home = () => {
  // states
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [debounceValue] = useDebounce(search, 1000)

  // API
  const trendingRes = useGetTrendingMovieQuery(activeTab);
  console.log('trendingRes', trendingRes)

  // Memo 
  const trendingMovieData = useMemo(()=>{
    if(!trendingRes.isLoading && trendingRes.data && trendingRes.data?.results){
        return trendingRes.data?.results
    }
    return []
  },[trendingRes.isLoading, trendingRes.data])

  const handleChangeTab = ({ key }) => {
    setActiveTab(key);
  };

  return (
    <>
      <BodyTop
        BodyTopTitle={"MaileHereko"}
        BodyTopDesc={
          "List of movies and TV Shows, I, Pramod Poudel have watched till date.Explore what I have watched and also feel free to make a suggestion. 😉"
        }
        value={search}
        setValue={setSearch}
      />
      <Tabs list={list} onClick={handleChangeTab} activeItem={activeTab} />
      <div className={styles.container}>
        <div className={styles.internalNav}></div>
        <h1 className={styles.filmCounter}>
          All <span>({trendingMovieData?.length})</span>
        </h1>
        {trendingRes.isLoading || trendingRes.isFetching? (
          <div style={{marginLeft: '20px'}}>
            <Skeleton 
              height={480} 
              width={282} 
              baseColor="#8383832f" 
              highlightColor="#8383832f"
              count={8} 
              direction="ltr"
              borderRadius={'1rem'}
              inline={'true'}
              enableAnimation
              marginBottom={'0.5rem'}
              marginLeft={'1rem'}
            />
          </div>
        )  : (    
            trendingMovieData?.map((item) => (
              <FilmsDisplay {...item} key={item.id} />
            ))         
        )}
      </div>
    </>
  );
};

export default Home;
