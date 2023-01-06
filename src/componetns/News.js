import React, {useEffect,useState} from 'react' // rce
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResult, setTotalResult] = useState(0)
    

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async ()=> {
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`
        setLoading(true)
        let data = await fetch(url)
        props.setProgress(30)
        let parseData = await data.json()
        props.setProgress(65)
        setArticles(parseData.articles)
        setTotalResult(parseData.totalResult)
        setLoading(false)
        props.setProgress(100)
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`
        updateNews()
        // eslint-disable-next-line
    }, [])
    

    // const goPreviousPage = async () => {
    //     setPage(page - 1)
    //     updateNews()
    // }

    // const goNextPage = async () => {
    //     setPage(page + 1)
    //     updateNews()
    // }

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pagesize}`
        setPage(page+1)
        let data = await fetch(url)
        let parseData = await data.json()
        setArticles(articles.concat(parseData.articles))
        setTotalResult(parseData.totalResult)
    }

        return (
            <>
                <h1 className='text-center' style={{margin: '35px 0px', marginTop: '90px'}}>News Monkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                {loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResult}
                >
                    <div className="container">
                        <div className="row">
                            {articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <Newsitem title={element.title?element.title:""} description={element.description ? element.description.slice(0, 95) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} badgeColor={props.badgeColor} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>

        )
    
}

News.defualtProps = {
    country: 'in',
    pagesize: 6,
    category: 'general'

}

News.propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
}

export default News
