import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { userActions, User } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

interface LoginByUsernameProps {
    username: string
    password: string
}

// enum LoginErrors {
//     INNCORECT_DATA = '',
//     SERVER_ERROR = '',
// }

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    { rejectValue: string }
>('login/loginByUsername', async (userData, thunkApi) => {
    try {
        const response = await axios.post<User>(
            'http://localhost:8000/login',
            userData,
        )

        if (!response.data) {
            throw new Error()
        }

        localStorage.setItem(
            USER_LOCALSTORAGE_KEY,
            JSON.stringify(response.data),
        )
        thunkApi.dispatch(userActions.setAuthData(response.data))

        return response.data
    } catch (e) {
        console.log(e)
        return thunkApi.rejectWithValue('error')
    }
})