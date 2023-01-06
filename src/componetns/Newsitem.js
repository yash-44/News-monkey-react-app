import React from 'react'

const Newsitem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source, badgeColor } = props
    return (

        <div className="card my-2">
            <div className="card">
                <span className={`position-absolute top-0 translate-middle badge rounded-pill bg-${badgeColor}`} style={{ zIndex: '1', left: '92%' }}>
                    {source}
                </span>
                <img src={!imageUrl ? "https://bsmedia.business-standard.com/_media/bs/img/article/2023-01/04/full/1672808482-5466.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <div className="card-footer text-muted mb-2"><p className="card-text"><small className="text-primary">By {!author ? 'Unknown' : author} on {new Date(date).toGMTString()}</small></p>
                    </div>
                    <a href={newsUrl} rel="noreferrer" target="_blank" className={`btn btn-${badgeColor} btn-sm mt-2`}>Read-More</a>
                </div>
            </div>
        </div>

    )

}

export default Newsitem
