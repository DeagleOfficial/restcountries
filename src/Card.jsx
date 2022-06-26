const Card = ({ country }) => {

    console.log (country)
    return (
        <div className="container card col-lg-4 col-md-2 col-sm-1">
            {country.altSpellings[1]}
        </div>
    )
}

export default Card