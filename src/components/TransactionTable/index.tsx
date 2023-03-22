import { useEffect } from "react"
import { api } from "../../services/api";
import { Container } from "./styles"
export function TransactionTable (){
     useEffect(()=>{
        api.get('transactions')
        .then(response => console.log(response.data))
     }, []);
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Catergoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> Website development</td>
                        <td className="deposit"> $12000</td>
                        <td> Development</td>
                        <td> 20/02/2023</td>
                    </tr>
                    <tr>
                        <td> Aluguel</td>
                        <td className="withdraw"> -$12000</td>
                        <td> casa</td>
                        <td> 20/02/2023</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}