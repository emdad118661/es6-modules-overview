import { add, multiply, divideTheFirstNumberWithTheSecondNumber as divide } from "../Utilis/Calculator";
import Watch from "../Watch/Watch";


const Sunglass = () => {

    const first = 66;
    const second = 42;
    const jog = add(first, second);
    const gun = multiply(first, second);
    const vaag = divide(first, second);

    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;