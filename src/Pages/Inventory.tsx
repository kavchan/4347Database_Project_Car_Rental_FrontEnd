import React, {useEffect, useState} from "react";


const Inventory: React.FC = () => {

    const [cars, setCars] = useState([]);

    //https://phpenthusiast.com/blog/javascript-fetch-api-tutorial
    useEffect(() => {
        fetch('http://localhost/car_rental/inventory.php')
            .then(r => r.json())
            .then(r => setCars(r));
    }, []);

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>
                        Car Id
                    </th>
                    <th>
                        Vin
                    </th>
                    <th>
                        Make
                    </th>
                    <th>
                        Model
                    </th>
                    <th>
                        Color
                    </th>
                    <th>
                        Price Per Day
                    </th>

                </tr>
                </thead>
                <tbody>
                {cars.map((car) => (
                    <tr key={car.cs_id}>
                        <td>{car.cs_id}</td>
                        <td>{car.vin}</td>
                        <td>{car.make}</td>
                        <td>{car.model}</td>
                        <td>{car.color}</td>
                        <td>{car.price_per_day}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};


export default Inventory