
const Watch = ({watch}) => {
    const {name, price} = watch;
    return (
        <div>
            <h5>Name: {name}</h5>
            <p>Price: {price}</p>
        </div>
    );
};

export default Watch;