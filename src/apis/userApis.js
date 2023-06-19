import axios from "axios"
import { getUsers } from "../components/slices/userSlice"

export const fetchUsersList = (dispatch) => {
    console.log("reached here")
    axios.get('https://dog.ceo/api/breeds/image/random').then((res) => {
        dispatch(getUsers(res.data.message))
    })
}