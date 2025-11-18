

import useAxios from './useAxios'
import { useQuery } from '@tanstack/react-query';


const useNotice = () => {
    const { axiosSecure } = useAxios();
    const {data :allNotice,error} = useQuery({
        queryKey: ["notice"],
        queryFn: async () => {
            const { data } = await axiosSecure.get("notice/find")
            return data;
        }
    })
    return{allNotice ,error}
}

export default useNotice