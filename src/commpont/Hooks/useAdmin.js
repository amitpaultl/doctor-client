import { useState } from "react";


const useAdmin = (email) => {
    const [isAdmin, setAdmin] = useState(false);
    const [isAdminLoading, setAdminLoding] = useState(true)
    useState(() => {
        if (email) {

            fetch(`https://doctor-server-sigma.vercel.app/createUser/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                   
                    setAdmin(data.isAdmin)
                    setAdminLoding(false)
                })
        }
    }, [email])
    return [isAdmin,isAdminLoading]
};

export default useAdmin;