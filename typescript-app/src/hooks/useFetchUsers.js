import axios from "axios";
import { useState} from "react";

export const useFetchUsers = () => {
    const [userList, setUserList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const onClickFetchUser = () => {
        setIsLoading(true);
        setIsError(false);
    
    axios
    .get("https://example.com/users")
    .then(result => {
        const users = result.data.map(user => ({
            id: user.id,
            name: `${user.lastname} ${user.firstname}`,
            age: user.age
        }));
        setUserList(users);
    })
    .catch(() => setIsError(true))
    .finally(() => setIsLoading(false));
    };
    //まとめて返却したいのでオブジェクトに設定する
    return { userList, isLoading, isError, onClickFetchUser };
}