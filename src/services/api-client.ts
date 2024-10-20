import axios from "axios";

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: '93c95b1f76af463fbe1b3294f64e5bdd'
	}
})