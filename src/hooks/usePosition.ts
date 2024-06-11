import useSWR from "swr";
import { getPosition } from "../services/endpoints";

export default function usePosition() {
    const {data, isLoading, error} = useSWR('api/get',getPosition, { refreshInterval: 1000 })
    return {
        data,
        isLoading,
        error
    }
}