import axios from 'axios';
import {
	LOGIN_USER
} from './types'

export function loginUser(body) {
  const request = axios.post("/api/users/login", body)
	.then((res) => res.data);

	return {
		type: LOGIN_USER,
		payload: request,
	}
}