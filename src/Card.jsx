const Card = ({ country }) => {

    console.log (country)
    return (
        <div className="container card ">
            {country.altSpellings[1]}
        </div>
    )
}

export default Card