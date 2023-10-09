import { Input } from "@chakra-ui/react"

const SearchBar = () => {
    return (
        // <Input placeholder='Assets, Wallet,domains or identity' width={"100%"} bg="#f5f5f7"  border={"none"} padding={"0.5rem"} rounded={"10px"} color={"white"} />
        <Input placeholder='Asset,Wallet,domain or identity' width={"100%"} backgroundColor={"transparent"} border={"none"} padding={"0.5rem"} rounded={"10px"} color={"white"} />
    )
}

export default SearchBar