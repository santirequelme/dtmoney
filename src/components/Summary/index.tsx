import totalImg from "../../assets/total.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import { Container } from "./syles";

export function Summary () {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={ incomeImg } alt="Entradas" />
                </header>
                <strong>$1999,00</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={ outcomeImg } alt="Saidas" />
                </header>
                <strong> - $1999,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={ totalImg } alt="Total" />
                </header>
                <strong>$1999,00</strong>
            </div>
        </Container>
    );
}