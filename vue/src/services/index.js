import axios from "axios";

function getUserRouters(uid) {
    return axios({
        url: "http://localhost:3000/user-router-auth",
        method: "post",
        header: {
            "Content-type": "application/x-www-form-urlencoded",
        },
        data: { uid },
    })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            throw err;
        });
}

export { getUserRouters };
